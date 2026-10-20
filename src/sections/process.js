export function renderProcess() {
  const steps = [
    ['01', 'Te escuchamos', 'Conocemos tu negocio, tus necesidades y lo que quieres lograr.'],
    ['02', 'Planeamos y diseñamos', 'Definimos la estructura y la experiencia más adecuada para tus usuarios.'],
    ['03', 'Desarrollamos', 'Construimos y revisamos la solución para que funcione correctamente.'],
    ['04', 'Publicamos', 'Te acompañamos en la puesta en marcha de tu proyecto.']
  ];
  return `
    <section class="process-section" id="proceso"><div class="process-inner">
      <div class="process-intro"><p class="eyebrow">SENCILLO Y TRANSPARENTE</p><h2>De la idea al<br><span>mundo digital.</span></h2><p>Un proceso claro para que sepas qué sigue en cada etapa.</p><a class="text-link" href="#contacto">Empezar un proyecto <span>↗</span></a></div>
      <div class="steps">${steps.map(([n, title, desc]) => `<article><span>${n}</span><div><h3>${title}</h3><p>${desc}</p></div></article>`).join('')}</div>
    </div></section>`;
}
