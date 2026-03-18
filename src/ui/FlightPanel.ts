import { searchAirports, type Airport } from "@/data/airports";
import type { FlightPathManager } from "@/geometry/FlightPath";

/**
 * Flight route builder — toggled via a small plane icon button.
 * Two inputs: FROM and TO with airport autocomplete.
 * Shows active routes with distance and a remove button.
 */
export class FlightPanel {
  private panel: HTMLDivElement;
  private routeList: HTMLDivElement;
  private fromInput: HTMLInputElement;
  private toInput: HTMLInputElement;
  private selectedFrom: Airport | null = null;
  private selectedTo: Airport | null = null;
  private activeDropdown: HTMLDivElement | null = null;

  constructor(private flightManager: FlightPathManager) {
    // Toggle button (in top-left, below color pickers)
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "flight-toggle";
    toggleBtn.title = "Flight paths";
    toggleBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>`;
    document.body.appendChild(toggleBtn);

    // Panel
    this.panel = document.createElement("div");
    this.panel.id = "flight-panel";
    this.panel.style.display = "none";
    this.panel.innerHTML = `
      <div class="fp-header">ROUTES</div>
      <div class="fp-inputs">
        <div class="fp-field">
          <input type="text" id="fp-from" placeholder="From..." autocomplete="off" spellcheck="false" />
          <div class="fp-dropdown" id="fp-from-dropdown"></div>
        </div>
        <div class="fp-arrow">→</div>
        <div class="fp-field">
          <input type="text" id="fp-to" placeholder="To..." autocomplete="off" spellcheck="false" />
          <div class="fp-dropdown" id="fp-to-dropdown"></div>
        </div>
        <button id="fp-add" title="Add route">+</button>
      </div>
      <div id="fp-route-list"></div>
    `;
    document.body.appendChild(this.panel);

    this.fromInput = this.panel.querySelector("#fp-from") as HTMLInputElement;
    this.toInput = this.panel.querySelector("#fp-to") as HTMLInputElement;
    this.routeList = this.panel.querySelector("#fp-route-list") as HTMLDivElement;

    const fromDropdown = this.panel.querySelector("#fp-from-dropdown") as HTMLDivElement;
    const toDropdown = this.panel.querySelector("#fp-to-dropdown") as HTMLDivElement;
    const addBtn = this.panel.querySelector("#fp-add") as HTMLButtonElement;

    // Toggle panel
    toggleBtn.addEventListener("click", () => {
      const visible = this.panel.style.display !== "none";
      this.panel.style.display = visible ? "none" : "block";
      toggleBtn.classList.toggle("active", !visible);
    });

    // Input handlers
    this.fromInput.addEventListener("input", () =>
      this.showDropdown(this.fromInput, fromDropdown, (a) => {
        this.selectedFrom = a;
        this.fromInput.value = `${a.code} — ${a.city}`;
        this.hideDropdown(fromDropdown);
      }),
    );
    this.toInput.addEventListener("input", () =>
      this.showDropdown(this.toInput, toDropdown, (a) => {
        this.selectedTo = a;
        this.toInput.value = `${a.code} — ${a.city}`;
        this.hideDropdown(toDropdown);
      }),
    );

    // Close dropdowns on outside click
    document.addEventListener("pointerdown", (e) => {
      if (!this.panel.contains(e.target as Node)) {
        this.hideDropdown(fromDropdown);
        this.hideDropdown(toDropdown);
      }
    });

    // Add route
    addBtn.addEventListener("click", () => this.addRoute());

    // Enter key
    this.toInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.addRoute();
    });
  }

  private showDropdown(
    input: HTMLInputElement,
    dropdown: HTMLDivElement,
    onSelect: (a: Airport) => void,
  ): void {
    const results = searchAirports(input.value);
    if (results.length === 0) {
      this.hideDropdown(dropdown);
      return;
    }

    dropdown.innerHTML = results
      .map(
        (a) =>
          `<div class="fp-item" data-code="${a.code}">${a.code} — ${a.city} <span class="fp-item-name">${a.name}</span></div>`,
      )
      .join("");

    dropdown.style.display = "block";
    this.activeDropdown = dropdown;

    for (const item of dropdown.querySelectorAll(".fp-item")) {
      item.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        const code = (item as HTMLElement).dataset.code ?? "";
        const airport = results.find((a) => a.code === code);
        if (airport) onSelect(airport);
      });
    }
  }

  private hideDropdown(dropdown: HTMLDivElement): void {
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
    if (this.activeDropdown === dropdown) {
      this.activeDropdown = null;
    }
  }

  private addRoute(): void {
    if (!this.selectedFrom || !this.selectedTo) return;
    if (this.selectedFrom.code === this.selectedTo.code) return;

    this.flightManager.addRoute(this.selectedFrom, this.selectedTo);
    this.renderRouteList();

    // Reset inputs
    this.fromInput.value = "";
    this.toInput.value = "";
    this.selectedFrom = null;
    this.selectedTo = null;

    // Focus back to from input for next route
    this.fromInput.focus();
  }

  private renderRouteList(): void {
    const routes = this.flightManager.getRoutes();
    if (routes.length === 0) {
      this.routeList.innerHTML = "";
      return;
    }

    this.routeList.innerHTML = routes
      .map(
        (r, i) =>
          `<div class="fp-route" data-index="${i}">
            <span class="fp-route-path">${r.from.code} → ${r.to.code}</span>
            <span class="fp-route-dist">${r.distanceKm.toLocaleString()} km</span>
            <button class="fp-route-remove" data-index="${i}" title="Remove">×</button>
          </div>`,
      )
      .join("");

    for (const btn of this.routeList.querySelectorAll(".fp-route-remove")) {
      btn.addEventListener("click", () => {
        const idx = parseInt((btn as HTMLElement).dataset.index ?? "0", 10);
        const route = routes[idx];
        if (route) {
          this.flightManager.removeRoute(route);
          this.renderRouteList();
        }
      });
    }
  }
}
