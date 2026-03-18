import { AppState } from "@/state/AppState";
import { SceneManager } from "@/scene/SceneManager";
import { ControlPanel } from "@/ui/ControlPanel";
import { createTorusWireframe } from "@/geometry/HornTorus";
import { createDiscGrid, createContinentLines } from "@/geometry/FlatDisc";
import { loadContinentData } from "@/geometry/loadContinents";

async function init(): Promise<void> {
  const canvas = document.getElementById("viewer") as HTMLCanvasElement;
  if (!canvas) throw new Error("Canvas #viewer not found");

  // State
  const appState = new AppState();

  // Apply saved theme to DOM
  document.documentElement.setAttribute("data-theme", appState.get().theme);

  // Scene
  const scene = new SceneManager(canvas, appState);

  // Geometry — torus wireframe
  const torus = createTorusWireframe();
  scene.addTorus(torus);

  // Geometry — equatorial disc grid
  const disc = createDiscGrid();
  scene.addDisc(disc);

  // Geometry — continent outlines (async)
  loadContinentData()
    .then((geoJson) => {
      const continents = createContinentLines(geoJson);
      scene.addContinents(continents);
    })
    .catch((err) => {
      console.warn("Could not load continent data:", err);
    });

  // UI
  new ControlPanel(appState, scene);

  // Render loop
  scene.renderer.setAnimationLoop(() => {
    scene.render();
  });
}

init();
