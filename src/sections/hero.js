export function renderHero() {
  return `
    <section class="hero" id="inicio">
      <div class="hero-glow"></div>
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> DESARROLLO WEB & SOLUCIONES DIGITALES</p>
        <h1>Tu idea merece<br>estar en <span>internet.</span></h1>
        <p class="hero-text">Creamos páginas web y aplicaciones que ayudan a tu negocio a crecer, conectar con clientes y trabajar de forma más inteligente.</p>
        <div class="hero-actions">
          <a class="button" href="#servicios">Explorar servicios <span>→</span></a>
          <a class="button button-outline" href="#contacto">Cuéntanos tu idea <span>↗</span></a>
        </div>
        <div class="trust-row"><div class="trust-icon">✓</div><p><strong>Soluciones a tu medida</strong><br><span>Diseñadas para tus objetivos.</span></p></div>
      </div>
      <div class="hero-visual" aria-label="Ilustración de una tienda web y un panel de control">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="browser-window store-window">
          <div class="browser-top"><div class="window-dots"><i></i><i></i><i></i></div><div class="address-bar">tusitio.com</div><span>•••</span></div>
          <div class="store-content">
            <div class="mock-nav"><b><span class="mini-logo">T</span> TuMarca</b><span>Inicio　 Productos　 Nosotros</span><span>⌕　♧</span></div>
            <div class="store-hero"><div><small>HECHO PARA CRECER</small><h3>Tu negocio,<br>en otro nivel.</h3><p>Todo lo que necesitas, en un solo lugar.</p><span class="mock-button">Descubrir más　→</span></div><div class="product-art"><div class="art-sun"></div><div class="art-box box-a"></div><div class="art-box box-b"></div><div class="art-plant">✳</div></div></div>
            <div class="product-row"><div><span class="product-icon">✧</span><b>Calidad</b></div><div><span class="product-icon">◇</span><b>Confianza</b></div><div><span class="product-icon">↗</span><b>Resultados</b></div></div>
          </div>
        </div>
        <div class="dashboard-card"><div class="dash-heading"><span class="dash-logo">▦</span><div><b>Panel de control</b><small>Resumen de actividad</small></div><span class="dash-menu">•••</span></div><div class="dash-stats"><div><small>Visitas</small><b>2,480</b><em>↗ 18.6%</em></div><div><small>Conversiones</small><b>8.4%</b><em>↗ 2.1%</em></div></div><div class="chart-title">Actividad del sitio <span>Últimos 7 días</span></div><svg class="chart" viewBox="0 0 300 80" role="img" aria-label="Gráfica ilustrativa ascendente"><path d="M0 67 C20 60 26 68 45 48 S75 58 94 38 S128 52 145 30 S177 43 195 22 S224 34 243 15 S276 26 300 3" fill="none" stroke="#1685ff" stroke-width="3" stroke-linecap="round"/><path d="M0 67 C20 60 26 68 45 48 S75 58 94 38 S128 52 145 30 S177 43 195 22 S224 34 243 15 S276 26 300 3 L300 80 L0 80Z" fill="#1685ff" opacity=".09"/></svg></div>
        <div class="floating-tag"><span>✦</span><div><b>Diseño adaptable</b><small>Se ve bien en cualquier pantalla</small></div></div>
        <div class="phone-card"><div class="phone-notch"></div><div class="phone-brand">T<span>.</span></div><div class="phone-banner"><small>BIENVENIDO A</small><b>Tu próximo<br>gran proyecto.</b><i></i></div><div class="phone-line"></div><div class="phone-line short"></div><div class="phone-action">Conocer más　→</div></div>
      </div>
    </section>`;
}
