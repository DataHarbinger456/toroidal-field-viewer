import { AppState } from "@/state/AppState";
import { SceneManager } from "@/scene/SceneManager";
import { ControlPanel } from "@/ui/ControlPanel";
import { SearchBar } from "@/ui/SearchBar";
import { InfoTooltip } from "@/ui/InfoTooltip";
import { createTorusWireframe } from "@/geometry/HornTorus";
import { createDiscGrid } from "@/geometry/FlatDisc";
import { loadCountryData } from "@/geometry/loadContinents";
import { createCountryMeshes } from "@/geometry/CountryMeshes";

async function init(): Promise<void> {
  const canvas = document.getElementById("viewer") as HTMLCanvasElement;
  if (!canvas) throw new Error("Canvas #viewer not found");

  // State
  const appState = new AppState();
  document.documentElement.setAttribute("data-theme", appState.get().theme);

  // Scene
  const scene = new SceneManager(canvas, appState);

  // Geometry — torus wireframe
  const torus = createTorusWireframe();
  scene.addTorus(torus);

  // Geometry — equatorial disc grid (lat/lon lines)
  const disc = createDiscGrid();
  scene.addDisc(disc);

  // UI
  const tooltip = new InfoTooltip();
  const searchBar = new SearchBar(scene.highlighter);
  new ControlPanel(appState, scene);

  // Country click handler — show tooltip
  scene.onCountryClick = (country) => {
    // Position tooltip near center of screen as fallback
    const vec = country.centroid.clone().project(scene.camera);
    const hw = window.innerWidth / 2;
    const hh = window.innerHeight / 2;
    const sx = vec.x * hw + hw;
    const sy = -(vec.y * hh) + hh;
    tooltip.show(country.name, sx, sy);
  };

  // Load country data (50m resolution) — async
  loadCountryData()
    .then((countries) => {
      const meshes = createCountryMeshes(countries);
      scene.highlighter.register(meshes);
      // Apply current theme/mode to new meshes
      const state = appState.get();
      scene.highlighter.setTheme(state.theme);
      scene.highlighter.setMode(state.mode === "glass");
      // Feed country names to search
      searchBar.setCountries(scene.highlighter.getCountryNames());
    })
    .catch((err) => {
      console.warn("Could not load country data:", err);
    });

  // Render loop
  scene.renderer.setAnimationLoop(() => {
    scene.render();
  });
}

init();
