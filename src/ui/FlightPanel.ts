import { searchAirports, type Airport } from "@/data/airports";
import type { FlightPathManager } from "@/geometry/FlightPath";

/**
 * Flight route builder — toggled via a small plane icon button.
 * Two inputs with airport autocomplete. Must select from dropdown.
 */
export class FlightPanel {
  private panel: HTMLDivElement;
  private routeList: HTMLDivElement;
  private fromInput: HTMLInputElement;
  private toInput: HTMLInputElement;
  private addBtn: HTMLButtonElement;
  private selectedFrom: Airport | null = null;
  private selectedTo: Airport | null = null;

  constructor(private flightManager: FlightPathManager) {
    // Toggle button
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
      <div class="fp-hint">Type city or airport code, then pick from the list</div>
      <div class="fp-inputs">
        <div class="fp-field">
          <input type="text" id="fp-from" placeholder="From (e.g. Tampa)" autocomplete="off" spellcheck="false" />
          <div class="fp-dropdown" id="fp-from-dropdown"></div>
        </div>
        <div class="fp-arrow">→</div>
        <div class="fp-field">
          <input type="text" id="fp-to" placeholder="To (e.g. Beijing)" autocomplete="off" spellcheck="false" />
          <div class="fp-dropdown" id="fp-to-dropdown"></div>
        </div>
        <button id="fp-add" title="Add route" disabled>+</button>
      </div>
      <div id="fp-route-list"></div>
    `;
    document.body.appendChild(this.panel);

    this.fromInput = this.panel.querySelector("#fp-from") as HTMLInputElement;
    this.toInput = this.panel.querySelector("#fp-to") as HTMLInputElement;
    this.addBtn = this.panel.querySelector("#fp-add") as HTMLButtonElement;
    this.routeList = this.panel.querySelector("#fp-route-list") as HTMLDivElement;

    const fromDropdown = this.panel.querySelector("#fp-from-dropdown") as HTMLDivElement;
    const toDropdown = this.panel.querySelector("#fp-to-dropdown") as HTMLDivElement;

    // Toggle panel
    toggleBtn.addEventListener("click", () => {
      const visible = this.panel.style.display !== "none";
      this.panel.style.display = visible ? "none" : "block";
      toggleBtn.classList.toggle("active", !visible);
      if (!visible) this.fromInput.focus();
    });

    // From input
    this.fromInput.addEventListener("input", () => {
      this.selectedFrom = null;
      this.fromInput.classList.remove("fp-selected");
      this.updateAddButton();
      this.showDropdown(this.fromInput, fromDropdown, (a) => {
        this.selectedFrom = a;
        this.fromInput.value = `${a.code} — ${a.city}`;
        this.fromInput.classList.add("fp-selected");
        this.hideDropdown(fromDropdown);
        this.updateAddButton();
        this.toInput.focus();
      });
    });

    // To input
    this.toInput.addEventListener("input", () => {
      this.selectedTo = null;
      this.toInput.classList.remove("fp-selected");
      this.updateAddButton();
      this.showDropdown(this.toInput, toDropdown, (a) => {
        this.selectedTo = a;
        this.toInput.value = `${a.code} — ${a.city}`;
        this.toInput.classList.add("fp-selected");
        this.hideDropdown(toDropdown);
        this.updateAddButton();
      });
    });

    // Close dropdowns on outside click
    document.addEventListener("pointerdown", (e) => {
      if (!this.panel.contains(e.target as Node)) {
        this.hideDropdown(fromDropdown);
        this.hideDropdown(toDropdown);
      }
    });

    // Add route
    this.addBtn.addEventListener("click", () => this.addRoute());
    this.toInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.addRoute();
    });
    this.fromInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this.selectedFrom) this.toInput.focus();
    });
  }

  private updateAddButton(): void {
    const ready = this.selectedFrom !== null && this.selectedTo !== null;
    this.addBtn.disabled = !ready;
    this.addBtn.classList.toggle("fp-ready", ready);
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
          `<div class="fp-item" data-code="${a.code}">
            <span class="fp-item-code">${a.code}</span>
            <span class="fp-item-city">${a.city}, ${a.country}</span>
          </div>`,
      )
      .join("");

    dropdown.style.display = "block";

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
  }

  private addRoute(): void {
    if (!this.selectedFrom || !this.selectedTo) return;
    if (this.selectedFrom.code === this.selectedTo.code) return;

    this.flightManager.addRoute(this.selectedFrom, this.selectedTo);
    this.renderRouteList();

    // Reset
    this.fromInput.value = "";
    this.toInput.value = "";
    this.fromInput.classList.remove("fp-selected");
    this.toInput.classList.remove("fp-selected");
    this.selectedFrom = null;
    this.selectedTo = null;
    this.updateAddButton();
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
          `<div class="fp-route">
            <span class="fp-route-path">${r.from.code} → ${r.to.code}</span>
            <span class="fp-route-cities">${r.from.city} → ${r.to.city}</span>
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
