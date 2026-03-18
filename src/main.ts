import { AppState } from "@/state/AppState";
import { SceneManager } from "@/scene/SceneManager";
import { ControlPanel } from "@/ui/ControlPanel";
import { SearchBar } from "@/ui/SearchBar";
import { InfoTooltip } from "@/ui/InfoTooltip";
import { FlightPanel } from "@/ui/FlightPanel";
import { createTorusWireframe } from "@/geometry/HornTorus";
import { createDiscGrid } from "@/geometry/FlatDisc";
import { FlightPathManager } from "@/geometry/FlightPath";
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

  // Flight paths
  const flightManager = new FlightPathManager(scene.scene);
  new FlightPanel(flightManager);

  // UI
  const tooltip = new InfoTooltip();
  const searchBar = new SearchBar(scene.highlighter);
  new ControlPanel(appState, scene);

  // Country click handler — show tooltip
  scene.onCountryClick = (country) => {
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
      const state = appState.get();
      scene.highlighter.setTheme(state.theme);
      scene.highlighter.setMode(state.mode === "glass");
      searchBar.setCountries(scene.highlighter.getCountryNames());
    })
    .catch((err) => {
      console.warn("Could not load country data:", err);
    });

  // Render loop
  scene.renderer.setAnimationLoop(() => {
    flightManager.update();
    scene.render();
  });
}

init();
