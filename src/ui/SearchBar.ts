import type { HighlightManager } from "@/geometry/HighlightManager";

/**
 * Stealth search bar — appears as a small magnifying glass icon in the
 * top-right corner. Expands into a text input on click. No "search country"
 * text visible by default. Looks like a generic UI element.
 */
export class SearchBar {
  private container: HTMLDivElement;
  private input: HTMLInputElement;
  private dropdown: HTMLDivElement;
  private toggle: HTMLButtonElement;
  private allNames: string[] = [];
  private expanded = false;

  constructor(private highlighter: HighlightManager) {
    this.container = document.createElement("div");
    this.container.id = "search-bar";
    this.container.classList.add("collapsed");
    this.container.innerHTML = `
      <button id="search-toggle" title="Find" aria-label="Search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
      <input type="text" id="search-input" placeholder="Find..." autocomplete="off" spellcheck="false" />
      <div id="search-dropdown"></div>
    `;
    document.body.appendChild(this.container);

    this.toggle = this.container.querySelector("#search-toggle") as HTMLButtonElement;
    this.input = this.container.querySelector("#search-input") as HTMLInputElement;
    this.dropdown = this.container.querySelector("#search-dropdown") as HTMLDivElement;

    this.toggle.addEventListener("click", () => this.toggleExpand());
    this.input.addEventListener("input", () => this.onInput());
    this.input.addEventListener("keydown", (e) => this.onKeydown(e));

    // Close on outside click
    document.addEventListener("pointerdown", (e) => {
      if (!this.container.contains(e.target as Node)) {
        this.collapse();
      }
    });
  }

  setCountries(names: string[]): void {
    this.allNames = names;
  }

  private toggleExpand(): void {
    if (this.expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  private expand(): void {
    this.expanded = true;
    this.container.classList.remove("collapsed");
    this.container.classList.add("expanded");
    // Small delay so the transition finishes before focus
    setTimeout(() => this.input.focus(), 150);
  }

  private collapse(): void {
    this.expanded = false;
    this.container.classList.remove("expanded");
    this.container.classList.add("collapsed");
    this.input.value = "";
    this.closeDropdown();
    this.input.blur();
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

    for (const item of this.dropdown.querySelectorAll(".search-item")) {
      item.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        const name = (item as HTMLElement).dataset.name ?? "";
        this.selectItem(name);
      });
    }
  }

  private onKeydown(e: KeyboardEvent): void {
    if (e.key === "Enter") {
      const firstItem = this.dropdown.querySelector(".search-item") as HTMLElement | null;
      if (firstItem) {
        this.selectItem(firstItem.dataset.name ?? "");
      }
    } else if (e.key === "Escape") {
      this.collapse();
    }
  }

  private selectItem(name: string): void {
    this.highlighter.toggleByName(name);
    this.input.value = "";
    this.closeDropdown();
  }

  private closeDropdown(): void {
    this.dropdown.style.display = "none";
    this.dropdown.innerHTML = "";
  }
}
