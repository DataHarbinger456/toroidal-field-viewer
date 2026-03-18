import type { HighlightManager } from "@/geometry/HighlightManager";

export class SearchBar {
  private container: HTMLDivElement;
  private input: HTMLInputElement;
  private dropdown: HTMLDivElement;
  private allNames: string[] = [];

  constructor(private highlighter: HighlightManager) {
    // Container
    this.container = document.createElement("div");
    this.container.id = "search-bar";
    this.container.innerHTML = `
      <input type="text" id="search-input" placeholder="Search country..." autocomplete="off" spellcheck="false" />
      <div id="search-dropdown"></div>
    `;
    document.body.appendChild(this.container);

    this.input = this.container.querySelector("#search-input") as HTMLInputElement;
    this.dropdown = this.container.querySelector("#search-dropdown") as HTMLDivElement;

    this.input.addEventListener("input", () => this.onInput());
    this.input.addEventListener("keydown", (e) => this.onKeydown(e));
    this.input.addEventListener("focus", () => this.onInput());

    // Close dropdown on outside click
    document.addEventListener("pointerdown", (e) => {
      if (!this.container.contains(e.target as Node)) {
        this.closeDropdown();
      }
    });
  }

  /** Call after country meshes are loaded */
  setCountries(names: string[]): void {
    this.allNames = names;
  }

  private onInput(): void {
    const query = this.input.value.toLowerCase().trim();
    if (query.length === 0) {
      this.closeDropdown();
      return;
    }

    const matches = this.allNames
      .filter((n) => n.includes(query))
      .slice(0, 10);

    if (matches.length === 0) {
      this.closeDropdown();
      return;
    }

    this.dropdown.innerHTML = matches
      .map((name) => {
        const display = name.charAt(0).toUpperCase() + name.slice(1);
        return `<div class="search-item" data-name="${name}">${display}</div>`;
      })
      .join("");

    this.dropdown.style.display = "block";

    // Click handlers
    for (const item of this.dropdown.querySelectorAll(".search-item")) {
      item.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        const name = (item as HTMLElement).dataset.name ?? "";
        this.selectCountry(name);
      });
    }
  }

  private onKeydown(e: KeyboardEvent): void {
    if (e.key === "Enter") {
      const firstItem = this.dropdown.querySelector(".search-item") as HTMLElement | null;
      if (firstItem) {
        this.selectCountry(firstItem.dataset.name ?? "");
      }
    } else if (e.key === "Escape") {
      this.closeDropdown();
      this.input.blur();
    }
  }

  private selectCountry(name: string): void {
    this.highlighter.toggleByName(name);
    this.input.value = "";
    this.closeDropdown();
  }

  private closeDropdown(): void {
    this.dropdown.style.display = "none";
    this.dropdown.innerHTML = "";
  }
}
