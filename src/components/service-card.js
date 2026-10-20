export function renderServiceCard(service) {
  const featuredClass = service.featured ? ' featured' : '';
  return `
    <article class="service-card${featuredClass}">
      <div class="service-icon">${service.icon}</div>
      <span class="card-number">${service.number}</span>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <a href="#contacto">${service.linkText} <span>→</span></a>
    </article>`;
}
