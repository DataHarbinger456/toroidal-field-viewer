import * as THREE from "three";
import { TORUS_R, LAT_LINES, LON_LINES } from "@/utils/constants";

const OUTER_RADIUS = 2 * TORUS_R; // rim at r = 2R (lat = -90)

/**
 * Azimuthal equidistant projection:
 *   r = R_disc × (90 - lat) / 180
 * Center (r=0) = North Pole (lat 90)
 * Rim (r=OUTER_RADIUS) = South Pole (lat -90)
 */
function latToRadius(lat: number): number {
  return OUTER_RADIUS * ((90 - lat) / 180);
}

/** Create the equatorial disc outline (outer ring) */
function createDiscOutline(): number[] {
  const positions: number[] = [];
  const segments = 128;
  for (let i = 0; i < segments; i++) {
    const a0 = (i / segments) * Math.PI * 2;
    const a1 = ((i + 1) / segments) * Math.PI * 2;
    positions.push(
      Math.cos(a0) * OUTER_RADIUS, 0, Math.sin(a0) * OUTER_RADIUS,
      Math.cos(a1) * OUTER_RADIUS, 0, Math.sin(a1) * OUTER_RADIUS,
    );
  }
  return positions;
}

/** Create latitude circles on the disc */
function createLatitudeGrid(): number[] {
  const positions: number[] = [];
  const segments = 96;
  for (const lat of LAT_LINES) {
    const r = latToRadius(lat);
    for (let i = 0; i < segments; i++) {
      const a0 = (i / segments) * Math.PI * 2;
      const a1 = ((i + 1) / segments) * Math.PI * 2;
      positions.push(
        Math.cos(a0) * r, 0, Math.sin(a0) * r,
        Math.cos(a1) * r, 0, Math.sin(a1) * r,
      );
    }
  }
  return positions;
}

/** Create longitude lines (radial spokes) on the disc */
function createLongitudeGrid(): number[] {
  const positions: number[] = [];
  for (const lon of LON_LINES) {
    const angle = (lon / 180) * Math.PI; // convert to radians
    // Line from center (North Pole) to rim (South)
    positions.push(
      0, 0, 0,
      Math.cos(angle) * OUTER_RADIUS, 0, Math.sin(angle) * OUTER_RADIUS,
    );
  }
  return positions;
}

/**
 * Project continent GeoJSON coordinates onto the disc.
 * Expects an array of [lon, lat] coordinate rings.
 */
export function projectContinent(coords: [number, number][][]): number[] {
  const positions: number[] = [];
  for (const ring of coords) {
    for (let i = 0; i < ring.length - 1; i++) {
      const [lon0, lat0] = ring[i];
      const [lon1, lat1] = ring[i + 1];

      const r0 = latToRadius(lat0);
      const a0 = ((lon0 - 90) / 180) * Math.PI;
      const r1 = latToRadius(lat1);
      const a1 = ((lon1 - 90) / 180) * Math.PI;

      positions.push(
        Math.cos(a0) * r0, 0, Math.sin(a0) * r0,
        Math.cos(a1) * r1, 0, Math.sin(a1) * r1,
      );
    }
  }
  return positions;
}

export function createDiscGrid(): THREE.LineSegments {
  const positions = [
    ...createDiscOutline(),
    ...createLatitudeGrid(),
    ...createLongitudeGrid(),
  ];

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  });

  return new THREE.LineSegments(geometry, material);
}

export function createContinentLines(geoJson: GeoJSON.FeatureCollection): THREE.LineSegments {
  const positions: number[] = [];

  for (const feature of geoJson.features) {
    const geom = feature.geometry;
    if (geom.type === "Polygon") {
      positions.push(...projectContinent(geom.coordinates as [number, number][][]));
    } else if (geom.type === "MultiPolygon") {
      for (const polygon of geom.coordinates as [number, number][][][]) {
        positions.push(...projectContinent(polygon));
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });

  return new THREE.LineSegments(geometry, material);
}
