export type RenderMode = "glass" | "solid";
export type Theme = "dark" | "light";

export interface State {
  mode: RenderMode;
  theme: Theme;
  showGrid: boolean;
  showMap: boolean;
  showTorus: boolean;
}

type Listener = (state: State) => void;

export class AppState {
  private state: State;
  private listeners = new Set<Listener>();

  constructor() {
    const savedTheme = localStorage.getItem("tfv-theme") as Theme | null;
    this.state = {
      mode: "glass",
      theme: savedTheme ?? "dark",
      showGrid: true,
      showMap: true,
      showTorus: true,
    };
  }

  get(): State {
    return this.state;
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  setMode(mode: RenderMode): void {
    this.state = { ...this.state, mode };
    this.notify();
  }

  setTheme(theme: Theme): void {
    this.state = { ...this.state, theme };
    localStorage.setItem("tfv-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    this.notify();
  }

  toggleMode(): void {
    this.setMode(this.state.mode === "glass" ? "solid" : "glass");
  }

  toggleTheme(): void {
    this.setTheme(this.state.theme === "dark" ? "light" : "dark");
  }

  toggleGrid(): void {
    this.state = { ...this.state, showGrid: !this.state.showGrid };
    this.notify();
  }

  toggleMap(): void {
    this.state = { ...this.state, showMap: !this.state.showMap };
    this.notify();
  }

  toggleTorus(): void {
    this.state = { ...this.state, showTorus: !this.state.showTorus };
    this.notify();
  }

  private notify(): void {
    for (const fn of this.listeners) {
      fn(this.state);
    }
  }
}
