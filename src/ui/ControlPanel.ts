import type { AppState } from "@/state/AppState";
import { EXPORT_SCALE } from "@/utils/constants";
import type { SceneManager } from "@/scene/SceneManager";

export class ControlPanel {
  private btnMode: HTMLButtonElement;
  private btnTheme: HTMLButtonElement;
  private btnExport: HTMLButtonElement;

  constructor(
    appState: AppState,
    private scene: SceneManager,
  ) {
    this.btnMode = document.getElementById("btn-mode") as HTMLButtonElement;
    this.btnTheme = document.getElementById("btn-theme") as HTMLButtonElement;
    this.btnExport = document.getElementById("btn-export") as HTMLButtonElement;

    this.btnMode.addEventListener("click", () => appState.toggleMode());
    this.btnTheme.addEventListener("click", () => appState.toggleTheme());
    this.btnExport.addEventListener("click", () => this.exportPNG());

    appState.subscribe((state) => {
      this.btnMode.textContent = state.mode === "glass" ? "SOLID" : "GLASS";
      this.btnTheme.textContent = state.theme === "dark" ? "LIGHT" : "DARK";
    });

    // Set initial labels
    const s = appState.get();
    this.btnMode.textContent = s.mode === "glass" ? "SOLID" : "GLASS";
    this.btnTheme.textContent = s.theme === "dark" ? "LIGHT" : "DARK";
  }

  private exportPNG(): void {
    const renderer = this.scene.renderer;
    const camera = this.scene.camera;
    const scene = this.scene.scene;

    // Save current size
    const w = renderer.domElement.width;
    const h = renderer.domElement.height;

    // Render at higher resolution
    const exportW = w * EXPORT_SCALE;
    const exportH = h * EXPORT_SCALE;
    renderer.setSize(exportW, exportH, false);
    camera.aspect = exportW / exportH;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);

    // Grab the image
    const dataUrl = renderer.domElement.toDataURL("image/png");

    // Restore original size
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    // Download
    const link = document.createElement("a");
    link.download = `toroidal-field-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  }
}
