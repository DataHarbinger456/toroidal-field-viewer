import * as THREE from "three";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";

/**
 * Manages floating CSS labels overlaid on the WebGL scene via CSS2DRenderer.
 * Each label is a small monospace text element positioned at a THREE.Vector3.
 */
export class LabelRenderer {
  private cssRenderer: CSS2DRenderer | null = null;
  private labels = new Map<string, CSS2DObject>();
  private scene: THREE.Scene | null = null;

  /** Initialise the CSS2D overlay renderer and attach it to the container. */
  init(
    container: HTMLElement,
    _camera: THREE.Camera,
    scene: THREE.Scene,
  ): void {
    this.scene = scene;

    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    this.cssRenderer = renderer;

    window.addEventListener("resize", this.handleResize);
  }

  /** Show (or create) a label at the given world position. */
  showLabel(name: string, position: THREE.Vector3): void {
    const existing = this.labels.get(name);
    if (existing) {
      existing.position.copy(position);
      existing.visible = true;
      return;
    }

    const el = document.createElement("div");
    el.className = "country-label";
    el.textContent = name;

    const label = new CSS2DObject(el);
    label.position.copy(position);
    label.layers.set(0);

    this.labels.set(name, label);
    this.scene?.add(label);
  }

  /** Hide a single label by name. */
  hideLabel(name: string): void {
    const label = this.labels.get(name);
    if (label) {
      label.visible = false;
    }
  }

  /** Hide all labels. */
  hideAll(): void {
    for (const label of this.labels.values()) {
      label.visible = false;
    }
  }

  /** Mark a label as highlighted (adds the CSS class). */
  highlight(name: string): void {
    const label = this.labels.get(name);
    if (label) {
      label.element.classList.add("highlighted");
    }
  }

  /** Remove highlight from a label. */
  unhighlight(name: string): void {
    const label = this.labels.get(name);
    if (label) {
      label.element.classList.remove("highlighted");
    }
  }

  /** Call once per frame to render the CSS2D overlay. */
  update(camera: THREE.Camera): void {
    this.cssRenderer?.render(this.scene!, camera);
  }

  /** Dispose the overlay and detach listeners. */
  dispose(): void {
    window.removeEventListener("resize", this.handleResize);

    for (const label of this.labels.values()) {
      label.removeFromParent();
      label.element.remove();
    }
    this.labels.clear();

    if (this.cssRenderer) {
      this.cssRenderer.domElement.remove();
      this.cssRenderer = null;
    }
  }

  private handleResize = (): void => {
    this.cssRenderer?.setSize(window.innerWidth, window.innerHeight);
  };
}
