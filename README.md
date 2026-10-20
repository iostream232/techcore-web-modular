# TECHCORE — página de inicio modular

Landing page responsive para presentar servicios de desarrollo web. Está construida con **HTML, CSS y JavaScript ES Modules**, usando **Vite** como servidor de desarrollo y herramienta de compilación.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en desarrollo
1. Descomprime el proyecto.
2. Abre la carpeta en VS Code.
3. Abre una terminal en esa carpeta.
4. Ejecuta:

```bash
npm install
npm run dev
```

5. Abre la URL local que muestre Vite en la terminal.

## Preparar versión para publicar
```bash
npm run build
```
La versión lista para subir a un hosting se genera en `dist/`.

Para revisar la compilación:
```bash
npm run preview
```

## Arquitectura

```text
techcore-web-modular/
├── index.html
├── package.json
├── README.md
├── assets/
│   └── favicon.svg
└── src/
    ├── main.js
    ├── components/
    │   ├── header.js
    │   ├── footer.js
    │   └── service-card.js
    ├── data/
    │   ├── services.js
    │   └── site.js
    ├── sections/
    │   ├── hero.js
    │   ├── process.js
    │   ├── projects.js
    │   └── contact.js
    ├── styles/
    │   └── main.css
    └── utils/
        └── navigation.js
```

### Responsabilidades
- `src/main.js`: punto de entrada que compone las secciones y conecta los módulos.
- `src/components/`: elementos reutilizables de interfaz.
- `src/sections/`: bloques principales de la página.
- `src/data/`: contenido editable separado del diseño.
- `src/styles/main.css`: estilos globales y responsive.
- `src/utils/`: funciones compartidas de comportamiento.

## Personalización habitual
- **Nombre, correo y asunto del contacto:** `src/data/site.js`.
- **Servicios y tarjetas:** `src/data/services.js`.
- **Encabezado y enlaces del menú:** `src/components/header.js`.
- **Pie de página:** `src/components/footer.js`.
- **Texto y visual de portada:** `src/sections/hero.js`.
- **Proceso, proyectos y contacto:** archivos respectivos dentro de `src/sections/`.
- **Colores, tamaños y responsive:** `src/styles/main.css`, variables al inicio del archivo.

## Notas
- El correo `hola@tudominio.com` es un marcador de ejemplo: cámbialo por el correo real antes de publicar.
- Las vistas de proyectos son ilustrativas y están etiquetadas como demostrativas; sustitúyelas por trabajos reales cuando los tengas.
- Las fuentes se cargan desde Google Fonts. Si quieres que todo funcione sin conexión externa, puedes usar fuentes del sistema o alojar las fuentes localmente.
- El sitio es una landing page estática: no incluye backend, base de datos, formulario con envío a servidor ni sistema de pagos.
