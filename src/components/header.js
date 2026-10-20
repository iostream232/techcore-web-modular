export function renderHeader() {
  return `
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="TECHCORE, inicio">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48"><path d="M24 2 44 13.5 24 25 4 13.5 24 2Z" fill="currentColor"/><path d="M4 18 20 27.2V46L4 36.8V18Z" fill="currentColor" opacity=".7"/><path d="M44 18 28 27.2V46l16-9.2V18Z" fill="currentColor" opacity=".9"/></svg>
        </span>
        <span>TECH<span class="blue">CORE</span></span>
      </a>
      <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
      <nav class="nav" aria-label="Navegación principal">
        <a class="active" href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#proceso">Cómo trabajamos</a>
        <a href="#proyectos">Proyectos</a>
      </nav>
      <a class="button button-small header-cta" href="#contacto">Solicitar cotización <span>↗</span></a>
    </header>`;
}
