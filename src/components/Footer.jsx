import LogoMark from './LogoMark.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <LogoMark />
              <span>
                <span className="brand-name">Montecarlo</span>
                <span className="brand-sub">COOPERATIVA AGRICOLA MIXTA</span>
              </span>
            </a>
            <p>
              Cooperativa Agrícola Mixta de Montecarlo Limitada, fundada el 24 de julio de 1930.
              Elaboramos yerba mate y fécula de mandioca junto a más de 500 socios.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#top">Inicio</a></li>
              <li><a href="#historia">Historia</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Cooperativa</h4>
            <ul>
              <li><span>Asociarse</span></li>
              <li><span>Nuestros productores</span></li>
              <li><span>Certificaciones</span></li>
              <li><span>Trabajá con nosotros</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><span>Av. Libertador Gral. San Martín 2713</span></li>
              <li><span>Piray Km 19, Montecarlo, Misiones</span></li>
              <li><a href="mailto:info@montecarlo.com.ar">info@montecarlo.com.ar</a></li>
              <li><span>03751 480-053</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Cooperativa Agrícola Mixta de Montecarlo Limitada. Todos los derechos reservados.</span>
          <span>Hecho por y para los productores asociados.</span>
        </div>
      </div>
    </footer>
  )
}
