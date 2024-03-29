class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="menu">
      <h1><a href="/" title="Navbar Brand">Forklore</a></h1>
      <button
        class="menu-button"
        title="off canvas button"
        aria-label="off canvas button"
      >
        <i class="fas fa-times"></i>
        <i class="fas fa-bars"></i>
      </button>
      <ul class="menu-list">
        <li><a href="/" title="Link ke halaman home">Home</a></li>
        <li><a href="#/favorite" title="Link ke halaman favorite">Favorite</a></li>
        <li>
          <a
            href="https://www.linkedin.com/in/muhamad-zaedan-al-ghifari-6937a0293/"
            target="_blank"
            title="Link ke about us"
            rel="noreferrer"
            >About Us</a
          >
        </li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
