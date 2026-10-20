import { site } from '../data/site.js';

export function renderFooter() {
  return `
    <footer class="footer">
      <a class="brand footer-brand" href="#inicio">
        <span class="brand-mark"><svg viewBox="0 0 48 48"><path d="M24 2 44 13.5 24 25 4 13.5 24 2Z" fill="currentColor"/><path d="M4 18 20 27.2V46L4 36.8V18Z" fill="currentColor" opacity=".7"/><path d="M44 18 28 27.2V46l16-9.2V18Z" fill="currentColor" opacity=".9"/></svg></span>
        <span>TECH<span class="blue">CORE</span></span>
      </a>
      <p>${site.tagline}</p>
      <div class="footer-links">
        <a href="#servicios">Servicios</a><a href="#proceso">Proceso</a>
        <a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a>
      </div>
      <small>© <span id="year"></span> ${site.name}. Todos los derechos reservados.</small>
    </footer>`;
}
