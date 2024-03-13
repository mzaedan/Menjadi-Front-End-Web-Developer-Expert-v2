class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="inner">
        <h1 class="title">Forklore</h1>
        <p class="subtitle">Petualangan Rasa, Dimulai Dari Sini!</p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
