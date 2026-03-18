import * as THREE from "three";
import { TORUS_R } from "@/utils/constants";
import type { Airport } from "@/data/airports";

const OUTER_RADIUS = 2 * TORUS_R;
const DEG = Math.PI / 180;
const PATH_SEGMENTS = 120;
const DOT_SPEED = 0.15; // fraction of path per second

export interface FlightRoute {
  from: Airport;
  to: Airport;
  discLine: THREE.Line;
  torusLine: THREE.Line;
  dot: THREE.Mesh;
  distanceKm: number;
}

/** Azimuthal equidistant projection: lat/lon -> disc x,z */
function project(lat: number, lon: number): [number, number] {
  const r = OUTER_RADIUS * ((90 - lat) / 180);
  const a = ((lon - 90) / 180) * Math.PI;
  return [Math.cos(a) * r, Math.sin(a) * r];
}

/** Horn torus surface point from lat/lon */
function torusPoint(lat: number, lon: number): THREE.Vector3 {
  // Map lat/lon to torus parameters U, V
  // U = longitude angle, V = latitude mapped to tube angle
  // V = π → pinch (North Pole, lat=90), V = 0 → outer rim (lat=-90)
  const u = ((lon - 90) * DEG);
  const v = Math.PI * (1 - (lat + 90) / 180);
  const R = TORUS_R;
  return new THREE.Vector3(
    R * (1 + Math.cos(v)) * Math.cos(u),
    R * Math.sin(v),
    R * (1 + Math.cos(v)) * Math.sin(u),
  );
}

/**
 * Compute great circle intermediate points between two lat/lon pairs.
 * Returns array of [lat, lon] pairs along the shortest path.
 */
function greatCirclePoints(
  lat1: number, lon1: number,
  lat2: number, lon2: number,
  segments: number,
): [number, number][] {
  const φ1 = lat1 * DEG;
  const λ1 = lon1 * DEG;
  const φ2 = lat2 * DEG;
  const λ2 = lon2 * DEG;

  // Haversine central angle
  const dφ = φ2 - φ1;
  const dλ = λ2 - λ1;
  const a = Math.sin(dφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(dλ / 2) ** 2;
  const d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  if (d < 1e-10) {
    return [[lat1, lon1]];
  }

  const points: [number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const f = i / segments;
    const A = Math.sin((1 - f) * d) / Math.sin(d);
    const B = Math.sin(f * d) / Math.sin(d);

    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);

    const lat = Math.atan2(z, Math.sqrt(x * x + y * y)) / DEG;
    const lon = Math.atan2(y, x) / DEG;
    points.push([lat, lon]);
  }

  return points;
}

/** Calculate great circle distance in km */
function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const φ1 = lat1 * DEG;
  const φ2 = lat2 * DEG;
  const dφ = (lat2 - lat1) * DEG;
  const dλ = (lon2 - lon1) * DEG;
  const a = Math.sin(dφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(dλ / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export class FlightPathManager {
  private routes: FlightRoute[] = [];
  private group: THREE.Group;
  private clock = new THREE.Clock();
  private routeColor = 0x00ffcc;

  constructor(private scene: THREE.Scene) {
    this.group = new THREE.Group();
    this.scene.add(this.group);
  }

  setColor(color: number): void {
    this.routeColor = color;
    for (const route of this.routes) {
      (route.discLine.material as THREE.LineBasicMaterial).color.setHex(color);
      (route.torusLine.material as THREE.LineBasicMaterial).color.setHex(color);
      (route.dot.material as THREE.MeshBasicMaterial).color.setHex(color);
    }
  }

  addRoute(from: Airport, to: Airport): FlightRoute {
    const gcPoints = greatCirclePoints(from.lat, from.lon, to.lat, to.lon, PATH_SEGMENTS);

    // Disc path
    const discPositions: number[] = [];
    for (const [lat, lon] of gcPoints) {
      const [x, z] = project(lat, lon);
      discPositions.push(x, 0.01, z); // slightly above disc
    }
    const discGeom = new THREE.BufferGeometry();
    discGeom.setAttribute("position", new THREE.Float32BufferAttribute(discPositions, 3));
    const discMat = new THREE.LineBasicMaterial({
      color: this.routeColor,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const discLine = new THREE.Line(discGeom, discMat);

    // Torus path
    const torusPositions: number[] = [];
    for (const [lat, lon] of gcPoints) {
      const p = torusPoint(lat, lon);
      torusPositions.push(p.x, p.y, p.z);
    }
    const torusGeom = new THREE.BufferGeometry();
    torusGeom.setAttribute("position", new THREE.Float32BufferAttribute(torusPositions, 3));
    const torusMat = new THREE.LineBasicMaterial({
      color: this.routeColor,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const torusLine = new THREE.Line(torusGeom, torusMat);

    // Animated dot
    const dotGeom = new THREE.SphereGeometry(0.015, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({ color: this.routeColor });
    const dot = new THREE.Mesh(dotGeom, dotMat);

    // Start at origin airport on disc
    const [sx, sz] = project(from.lat, from.lon);
    dot.position.set(sx, 0.02, sz);

    // Store path points for animation
    dot.userData.discPath = discPositions;
    dot.userData.torusPath = torusPositions;
    dot.userData.progress = 0;

    this.group.add(discLine);
    this.group.add(torusLine);
    this.group.add(dot);

    const route: FlightRoute = {
      from,
      to,
      discLine,
      torusLine,
      dot,
      distanceKm: Math.round(haversineDistance(from.lat, from.lon, to.lat, to.lon)),
    };

    this.routes.push(route);
    return route;
  }

  removeRoute(route: FlightRoute): void {
    this.group.remove(route.discLine);
    this.group.remove(route.torusLine);
    this.group.remove(route.dot);
    route.discLine.geometry.dispose();
    route.torusLine.geometry.dispose();
    route.dot.geometry.dispose();
    this.routes = this.routes.filter((r) => r !== route);
  }

  clearAll(): void {
    for (const route of [...this.routes]) {
      this.removeRoute(route);
    }
  }

  /** Call in render loop to animate flight dots */
  update(): void {
    const delta = this.clock.getDelta();

    for (const route of this.routes) {
      const dot = route.dot;
      dot.userData.progress = (dot.userData.progress + delta * DOT_SPEED) % 1;
      const t = dot.userData.progress;
      const path = dot.userData.discPath as number[];
      const totalPoints = path.length / 3;
      const idx = t * (totalPoints - 1);
      const i0 = Math.floor(idx);
      const i1 = Math.min(i0 + 1, totalPoints - 1);
      const frac = idx - i0;

      // Interpolate position on disc path
      const x = path[i0 * 3] + (path[i1 * 3] - path[i0 * 3]) * frac;
      const y = path[i0 * 3 + 1] + (path[i1 * 3 + 1] - path[i0 * 3 + 1]) * frac;
      const z = path[i0 * 3 + 2] + (path[i1 * 3 + 2] - path[i0 * 3 + 2]) * frac;
      dot.position.set(x, y, z);
    }
  }

  getRoutes(): FlightRoute[] {
    return this.routes;
  }

  setVisible(visible: boolean): void {
    this.group.visible = visible;
  }
}
