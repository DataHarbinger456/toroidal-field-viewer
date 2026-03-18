import type { AppState } from "@/state/AppState";
import { EXPORT_SCALE } from "@/utils/constants";
import type { SceneManager } from "@/scene/SceneManager";

export class ControlPanel {
  constructor(
    appState: AppState,
    private scene: SceneManager,
  ) {
    const btn = (id: string) => document.getElementById(id) as HTMLButtonElement;

    const btnMode = btn("btn-mode");
    const btnTheme = btn("btn-theme");
    const btnTorus = btn("btn-torus");
    const btnGrid = btn("btn-grid");
    const btnMap = btn("btn-map");
    const btnClear = btn("btn-clear");
    const btnReset = btn("btn-reset");
    const btnExport = btn("btn-export");

    btnMode.addEventListener("click", () => appState.toggleMode());
    btnTheme.addEventListener("click", () => appState.toggleTheme());
    btnTorus.addEventListener("click", () => appState.toggleTorus());
    btnGrid.addEventListener("click", () => appState.toggleGrid());
    btnMap.addEventListener("click", () => appState.toggleMap());
    btnClear.addEventListener("click", () => scene.highlighter.clearAll());
    btnReset.addEventListener("click", () => scene.resetCamera());
    btnExport.addEventListener("click", () => this.exportPNG());

    appState.subscribe((state) => {
      btnMode.textContent = state.mode === "glass" ? "SOLID" : "GLASS";
      btnTheme.textContent = state.theme === "dark" ? "LIGHT" : "DARK";
      btnTorus.classList.toggle("active", state.showTorus);
      btnGrid.classList.toggle("active", state.showGrid);
      btnMap.classList.toggle("active", state.showMap);
    });

    // Set initial labels
    const s = appState.get();
    btnMode.textContent = s.mode === "glass" ? "SOLID" : "GLASS";
    btnTheme.textContent = s.theme === "dark" ? "LIGHT" : "DARK";
  }

  private exportPNG(): void {
    const renderer = this.scene.renderer;
    const camera = this.scene.camera;
    const scn = this.scene.scene;
    const canvas = renderer.domElement;

    // Use CSS (logical) dimensions, not the pixel buffer dimensions
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    const exportW = cssW * EXPORT_SCALE;
    const exportH = cssH * EXPORT_SCALE;

    // Save current pixel ratio
    const savedPixelRatio = renderer.getPixelRatio();

    // Set to 1:1 pixel ratio so setSize gives us exact pixel dimensions
    renderer.setPixelRatio(1);
    renderer.setSize(exportW, exportH, false);
    camera.aspect = exportW / exportH;
    camera.updateProjectionMatrix();
    renderer.render(scn, camera);

    // Grab the image
    const dataUrl = canvas.toDataURL("image/png");

    // Restore everything
    renderer.setPixelRatio(savedPixelRatio);
    renderer.setSize(cssW, cssH);
    camera.aspect = cssW / cssH;
    camera.updateProjectionMatrix();

    // Download
    const link = document.createElement("a");
    link.download = `toroidal-field-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  }
}
