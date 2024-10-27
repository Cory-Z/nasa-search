import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = "";
    this.source = "";
    this.alt = "";
    this.secondaryCreator = "";
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      alt: { type: String },
      secondaryCreator: { type: String },
    };
  }

  static get styles() {
    return css`
      .card {
        display: inline-block;
        width: 240px;
        border: 1px solid var(--ddd-border-color);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-2);
        transition: background-color 0.3s ease;
        cursor: pointer;
        text-align: center;
      }

      .card:hover {
        background-color: var(--ddd-accent-1);
      }

      .card img {
        width: 240px;
        height: 150px;
        object-fit: cover;
        border-radius: var(--ddd-radius-md);
      }

      .card-title {
        font-size: var(--ddd-font-size-md);
        font-weight: bold;
        margin-top: var(--ddd-spacing-1);
      }

      .secondary-creator {
        font-size: var(--ddd-font-size-sm);
        color: var(--ddd-secondary-color);
      }
    `;
  }

  openImage() {
    window.open(this.source, "_blank");
  }

  render() {
    return html`
      <div
        class="card"
        tabindex="0"
        @click="${this.openImage}"
        @keypress="${(e) => (e.key === "Enter" ? this.openImage() : null)}"
        role="button"
        aria-label="Open image in new window"
      >
        <img src="${this.source}" alt="${this.alt}" />
        <div class="card-title">${this.title}</div>
        <div class="secondary-creator">${this.secondaryCreator}</div>
      </div>
    `;
  }

  static get tag() {
    return "nasa-image";
  }
}

customElements.define(NasaImage.tag, NasaImage);