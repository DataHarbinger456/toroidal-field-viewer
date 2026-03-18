import * as THREE from "three";
import type { CountryMesh } from "@/geometry/CountryMeshes";
import type { Theme } from "@/state/AppState";

const HIGHLIGHT_COLOR_DARK = 0x00ffcc; // cyan-green on dark
const HIGHLIGHT_COLOR_LIGHT = 0xcc0044; // deep red on light
const HIGHLIGHT_OPACITY = 1.0;
const NORMAL_OPACITY = 0.55;

export class HighlightManager {
  private countryMap = new Map<string, CountryMesh>();
  private nameMap = new Map<string, CountryMesh>(); // lowercase name -> mesh
  private highlighted = new Set<string>();
  private currentTheme: Theme = "dark";

  constructor(private group: THREE.Group) {}

  register(meshes: CountryMesh[]): void {
    for (const mesh of meshes) {
      this.countryMap.set(mesh.id, mesh);
      this.nameMap.set(mesh.name.toLowerCase(), mesh);
      this.group.add(mesh.lines);
    }
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    const baseColor = theme === "dark" ? 0xffffff : 0x000000;
    const highlightColor = theme === "dark" ? HIGHLIGHT_COLOR_DARK : HIGHLIGHT_COLOR_LIGHT;

    for (const [id, mesh] of this.countryMap) {
      const mat = mesh.lines.material as THREE.LineBasicMaterial;
      if (this.highlighted.has(id)) {
        mat.color.setHex(highlightColor);
      } else {
        mat.color.setHex(baseColor);
      }
    }
  }

  setMode(glass: boolean): void {
    for (const mesh of this.countryMap.values()) {
      const mat = mesh.lines.material as THREE.LineBasicMaterial;
      mat.depthWrite = !glass;
    }
  }

  highlightByName(name: string): CountryMesh | null {
    const mesh = this.nameMap.get(name.toLowerCase());
    if (!mesh) return null;
    this.highlightById(mesh.id);
    return mesh;
  }

  highlightById(id: string): void {
    const mesh = this.countryMap.get(id);
    if (!mesh) return;

    this.highlighted.add(id);
    const mat = mesh.lines.material as THREE.LineBasicMaterial;
    const highlightColor =
      this.currentTheme === "dark" ? HIGHLIGHT_COLOR_DARK : HIGHLIGHT_COLOR_LIGHT;
    mat.color.setHex(highlightColor);
    mat.opacity = HIGHLIGHT_OPACITY;
  }

  clearHighlight(id: string): void {
    const mesh = this.countryMap.get(id);
    if (!mesh) return;

    this.highlighted.delete(id);
    const mat = mesh.lines.material as THREE.LineBasicMaterial;
    const baseColor = this.currentTheme === "dark" ? 0xffffff : 0x000000;
    mat.color.setHex(baseColor);
    mat.opacity = NORMAL_OPACITY;
  }

  clearAll(): void {
    for (const id of this.highlighted) {
      this.clearHighlight(id);
    }
    this.highlighted.clear();
  }

  toggleByName(name: string): CountryMesh | null {
    const mesh = this.nameMap.get(name.toLowerCase());
    if (!mesh) return null;
    if (this.highlighted.has(mesh.id)) {
      this.clearHighlight(mesh.id);
    } else {
      this.highlightById(mesh.id);
    }
    return mesh;
  }

  /** Find country at a raycast intersection point on the disc */
  findCountryAtPoint(point: THREE.Vector3): CountryMesh | null {
    let closest: CountryMesh | null = null;
    let closestDist = Infinity;

    for (const mesh of this.countryMap.values()) {
      const dist = mesh.centroid.distanceTo(point);
      if (dist < closestDist) {
        closestDist = dist;
        closest = mesh;
      }
    }

    // Only match if reasonably close (within 0.3 units)
    return closestDist < 0.3 ? closest : null;
  }

  getCountryNames(): string[] {
    return Array.from(this.nameMap.keys()).sort();
  }

  isHighlighted(id: string): boolean {
    return this.highlighted.has(id);
  }
}
