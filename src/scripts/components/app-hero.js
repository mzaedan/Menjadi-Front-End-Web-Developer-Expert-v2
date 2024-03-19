class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <img src="../hero-1.jpg"
          alt="Gambar macam-macam makanan yang diterapkan di komponen hero">
      <div class="inner">
          <h1 class="title">Resto Finder</h1>
          <p class="subtitle">
              Find the best Restaurant in your area
          </p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
