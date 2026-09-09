export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <svg className="brand-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="14" fill="#1F2A1A" />
                <path d="M32 12c12 4 18 14 18 24 0 8-6 14-14 14-2-8-2-16 0-24 2-6 6-11-4-14z" fill="#C9A227" />
                <path d="M32 50V16" stroke="#1F2A1A" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>
                <span className="brand-name">Montecarlos</span>
                <span className="brand-sub">COOPERATIVA YERBATERA</span>
              </span>
            </a>
            <p>
              Cooperativa de productores yerbateros de Montecarlo, Misiones. Cultivamos,
              secamos y envasamos nuestra propia yerba desde 1958.
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
              <li><span>Ruta 12, km 1489</span></li>
              <li><span>Montecarlo, Misiones</span></li>
              <li><a href="mailto:contacto@montecarlos.coop">contacto@montecarlos.coop</a></li>
              <li><span>+54 3751 42-0000</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Cooperativa Montecarlos. Todos los derechos reservados.</span>
          <span>Hecho por y para los productores asociados.</span>
        </div>
      </div>
    </footer>
  )
}
