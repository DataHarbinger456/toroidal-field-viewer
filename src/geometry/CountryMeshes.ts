import * as THREE from "three";
import { projectContinent } from "@/geometry/FlatDisc";
import type { CountryFeature } from "@/geometry/loadContinents";

export interface CountryMesh {
  id: string;
  name: string;
  lines: THREE.LineSegments;
  centroid: THREE.Vector3; // position on disc for label placement
}

/** Compute centroid of a country's projected coordinates on the disc */
function computeCentroid(positions: number[]): THREE.Vector3 {
  let cx = 0;
  let cz = 0;
  let count = 0;
  for (let i = 0; i < positions.length; i += 3) {
    cx += positions[i];
    cz += positions[i + 2];
    count++;
  }
  if (count === 0) return new THREE.Vector3(0, 0.02, 0);
  return new THREE.Vector3(cx / count, 0.02, cz / count);
}

/** Extract line segment positions from a GeoJSON geometry */
function geometryToPositions(geom: GeoJSON.Geometry): number[] {
  const positions: number[] = [];
  if (geom.type === "Polygon") {
    positions.push(...projectContinent(geom.coordinates as [number, number][][]));
  } else if (geom.type === "MultiPolygon") {
    for (const polygon of geom.coordinates as [number, number][][][]) {
      positions.push(...projectContinent(polygon));
    }
  }
  return positions;
}

/** Create individual Three.js line segments for each country */
export function createCountryMeshes(countries: CountryFeature[]): CountryMesh[] {
  const meshes: CountryMesh[] = [];

  for (const country of countries) {
    const positions = geometryToPositions(country.geometry);
    if (positions.length === 0) continue;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(geometry, material);
    lines.userData = { countryId: country.id, countryName: country.name };

    meshes.push({
      id: country.id,
      name: country.name,
      lines,
      centroid: computeCentroid(positions),
    });
  }

  return meshes;
}
