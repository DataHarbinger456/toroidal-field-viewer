import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CAMERA_FOV, CAMERA_NEAR, CAMERA_FAR } from "@/utils/constants";
import { HighlightManager } from "@/geometry/HighlightManager";
import type { AppState, State, RenderMode, Theme } from "@/state/AppState";
import type { CountryMesh } from "@/geometry/CountryMeshes";

export class SceneManager {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly renderer: THREE.WebGLRenderer;
  readonly controls: OrbitControls;
  readonly highlighter: HighlightManager;
  readonly countryGroup: THREE.Group;

  private torusLines: THREE.LineSegments | null = null;
  private discLines: THREE.LineSegments | null = null;
  private raycaster = new THREE.Raycaster();
  private discPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  // Callbacks for external listeners
  onCountryClick: ((country: CountryMesh) => void) | null = null;

  constructor(canvas: HTMLCanvasElement, appState: AppState) {
    // Scene
    this.scene = new THREE.Scene();

    // Country group
    this.countryGroup = new THREE.Group();
    this.scene.add(this.countryGroup);
    this.highlighter = new HighlightManager(this.countryGroup);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      window.innerWidth / window.innerHeight,
      CAMERA_NEAR,
      CAMERA_FAR,
    );
    this.camera.position.set(2.5, 2, 3.5);
    this.camera.lookAt(0, 0, 0);

    // Renderer — preserveDrawingBuffer for PNG export
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      preserveDrawingBuffer: true,
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Controls
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.minDistance = 0.5;
    this.controls.maxDistance = 15;
    this.controls.target.set(0, 0, 0);

    // Initial theme
    this.applyTheme(appState.get().theme);

    // Resize
    window.addEventListener("resize", this.handleResize);

    // Click to select country
    canvas.addEventListener("pointerup", this.handleClick);

    // State listener
    appState.subscribe((state: State) => {
      this.applyMode(state.mode);
      this.applyTheme(state.theme);
    });
  }

  addTorus(lines: THREE.LineSegments): void {
    this.torusLines = lines;
    this.scene.add(lines);
  }

  addDisc(lines: THREE.LineSegments): void {
    this.discLines = lines;
    this.scene.add(lines);
  }

  private applyMode(mode: RenderMode): void {
    const glass = mode === "glass";

    if (this.torusLines) {
      const mat = this.torusLines.material as THREE.LineBasicMaterial;
      mat.depthWrite = !glass;
      mat.transparent = true;
      mat.opacity = glass ? 0.85 : 1.0;
    }

    if (this.discLines) {
      const mat = this.discLines.material as THREE.LineBasicMaterial;
      mat.depthWrite = !glass;
    }

    this.highlighter.setMode(glass);
  }

  private applyTheme(theme: Theme): void {
    const dark = theme === "dark";
    const bgColor = dark ? 0x000000 : 0xf5f5f0;
    const lineColor = dark ? 0xffffff : 0x000000;

    this.scene.background = new THREE.Color(bgColor);

    if (this.torusLines) {
      (this.torusLines.material as THREE.LineBasicMaterial).color.setHex(lineColor);
    }
    if (this.discLines) {
      (this.discLines.material as THREE.LineBasicMaterial).color.setHex(lineColor);
    }

    this.highlighter.setTheme(theme);
  }

  private handleClick = (e: PointerEvent): void => {
    // Ignore if the pointer moved (was a drag, not a click)
    const canvas = this.renderer.domElement;
    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1,
    );

    this.raycaster.setFromCamera(mouse, this.camera);

    // Intersect with the y=0 disc plane
    const intersection = new THREE.Vector3();
    const hit = this.raycaster.ray.intersectPlane(this.discPlane, intersection);
    if (!hit) return;

    const country = this.highlighter.findCountryAtPoint(intersection);
    if (country) {
      this.highlighter.toggleByName(country.name);
      if (this.onCountryClick) {
        this.onCountryClick(country);
      }
    }
  };

  private handleResize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  render(): void {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    window.removeEventListener("resize", this.handleResize);
    this.renderer.domElement.removeEventListener("pointerup", this.handleClick);
    this.controls.dispose();
    this.renderer.dispose();
  }
}
