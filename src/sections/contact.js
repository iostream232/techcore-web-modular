import { quoteUrl } from '../data/site.js';

export function renderContact() {
  return `
    <section class="contact-section" id="contacto"><div class="contact-glow"></div>
      <div class="contact-content"><p class="eyebrow">HAGAMOS QUE SUCEDA</p><h2>¿Listo para llevar<br>tu idea <span>más lejos?</span></h2><p>Cuéntanos qué necesitas. Hablemos de tu proyecto y encontremos una solución adecuada para ti.</p><a class="button button-light" href="${quoteUrl()}">Solicitar una cotización <span>↗</span></a><small>Recuerda configurar el correo en src/data/site.js antes de publicar.</small></div>
      <div class="contact-decoration"><div class="deco-square">T<span>.</span></div><div class="deco-ring"></div><div class="deco-cross">✳</div></div>
    </section>`;
}
