import './styles/main.css';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderServiceCard } from './components/service-card.js';
import { services } from './data/services.js';
import { renderHero } from './sections/hero.js';
import { renderProcess } from './sections/process.js';
import { renderProjects } from './sections/projects.js';
import { renderContact } from './sections/contact.js';
import { initNavigation } from './utils/navigation.js';

const app = document.querySelector('#app');

app.innerHTML = `
  ${renderHeader()}
  <main>
    ${renderHero()}
    <section class="service-strip" aria-label="Tipos de soluciones">
      <div><span class="strip-icon">&lt;/&gt;</span><b>Páginas web</b></div>
      <div><span class="strip-icon">▱</span><b>Aplicaciones web</b></div>
      <div><span class="strip-icon">🛒</span><b>Tiendas en línea</b></div>
      <div><span class="strip-icon">⚙</span><b>Sistemas a medida</b></div>
    </section>
    <section class="section services-section" id="servicios">
      <div class="section-heading">
        <p class="eyebrow">LO QUE PODEMOS HACER POR TI</p>
        <h2>Soluciones digitales para<br><span>llevarte más lejos.</span></h2>
        <p>La tecnología debe resolver problemas reales. Elegimos el enfoque adecuado para tu negocio y tus objetivos.</p>
      </div>
      <div class="service-grid">${services.map(renderServiceCard).join('')}</div>
    </section>
    ${renderProcess()}
    ${renderProjects()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`;

initNavigation();
document.querySelector('#year').textContent = new Date().getFullYear();
