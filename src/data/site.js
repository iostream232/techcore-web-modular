// Datos generales de la marca. Actualiza aquí los datos que se reutilizan en el sitio.
export const site = {
  name: 'TECHCORE',
  tagline: 'Ideas claras. Soluciones digitales.',
  email: 'hola@tudominio.com',
  quoteSubject: 'Quiero cotizar un proyecto web'
};

export const quoteUrl = () =>
  `mailto:${site.email}?subject=${encodeURIComponent(site.quoteSubject)}`;
