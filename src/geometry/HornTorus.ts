import * as THREE from "three";
import { TORUS_R, MERIDIAN_COUNT, PARALLEL_COUNT } from "@/utils/constants";

/**
 * Generate a horn torus wireframe as line segments.
 *
 * Horn torus parametric equations:
 *   x = R(1 + cosV) cosU
 *   y = R sinV
 *   z = R(1 + cosV) sinU
 *
 * Where U ∈ [0, 2π] (around the torus) and V ∈ [0, 2π] (around the tube).
 * V = π  → pinch point (center, North Pole)
 * V = 0  → outer rim r = 2R (South / Ice Wall)
 */

function torusPoint(u: number, v: number): THREE.Vector3 {
  const R = TORUS_R;
  const cosV = Math.cos(v);
  const sinV = Math.sin(v);
  const cosU = Math.cos(u);
  const sinU = Math.sin(u);
  return new THREE.Vector3(
    R * (1 + cosV) * cosU,
    R * sinV,
    R * (1 + cosV) * sinU,
  );
}

export function createTorusWireframe(): THREE.LineSegments {
  const positions: number[] = [];
  const meridians = MERIDIAN_COUNT;
  const parallels = PARALLEL_COUNT;
  const vSteps = 128; // smoothness of each meridian line
  const uSteps = 128; // smoothness of each parallel ring

  // Meridian lines (constant U, sweep V)
  for (let i = 0; i < meridians; i++) {
    const u = (i / meridians) * Math.PI * 2;
    for (let j = 0; j < vSteps; j++) {
      const v0 = (j / vSteps) * Math.PI * 2;
      const v1 = ((j + 1) / vSteps) * Math.PI * 2;
      const p0 = torusPoint(u, v0);
      const p1 = torusPoint(u, v1);
      positions.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
    }
  }

  // Parallel rings (constant V, sweep U)
  for (let j = 0; j < parallels; j++) {
    const v = (j / parallels) * Math.PI * 2;
    for (let i = 0; i < uSteps; i++) {
      const u0 = (i / uSteps) * Math.PI * 2;
      const u1 = ((i + 1) / uSteps) * Math.PI * 2;
      const p0 = torusPoint(u0, v);
      const p1 = torusPoint(u1, v);
      positions.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.85,
    depthWrite: false, // glass mode default
  });

  return new THREE.LineSegments(geometry, material);
}
