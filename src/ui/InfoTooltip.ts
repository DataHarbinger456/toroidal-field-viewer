/** Floating tooltip that shows country name on click */
export class InfoTooltip {
  private el: HTMLDivElement;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.el = document.createElement("div");
    this.el.id = "info-tooltip";
    this.el.style.display = "none";
    document.body.appendChild(this.el);
  }

  show(name: string, screenX: number, screenY: number): void {
    if (this.hideTimer) clearTimeout(this.hideTimer);

    this.el.textContent = name;
    this.el.style.display = "block";
    this.el.style.left = `${screenX + 12}px`;
    this.el.style.top = `${screenY - 8}px`;

    // Auto-hide after 3s
    this.hideTimer = setTimeout(() => this.hide(), 3000);
  }

  hide(): void {
    this.el.style.display = "none";
  }
}
