export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">Cooperativa yerbatera · Montecarlo, Misiones</span>
          <h1>
            La yerba se cultiva bajo <em>monte</em>, no en depósito.
          </h1>
          <p className="hero-lede">
            Montecarlo nació de la unión de productores familiares que se negaron a vender su
            cosecha a granel. Hoy secamos, estacionamos y envasamos nosotros mismos las cinco
            yerbas de nuestro catálogo, tal como se hacía antes de que existieran las marcas.
          </p>
          <div className="hero-actions">
            <a href="#productos" className="btn btn-primary">
              Ver los productos
            </a>
            <a href="#historia" className="btn btn-ghost">
              Conocer la historia
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>60+</strong>
              <span>familias asociadas</span>
            </div>
            <div>
              <strong>5</strong>
              <span>yerbas en catálogo</span>
            </div>
            <div>
              <strong>1958</strong>
              <span>año de fundación</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="330" rx="120" ry="16" fill="#000" opacity="0.18" />
            <path
              d="M120 200c0-46 18-70 40-70s40 24 40 70v60c0 30-18 52-40 52s-40-22-40-52z"
              fill="#2f3d26"
              stroke="#c9a227"
              strokeWidth="2.5"
            />
            <path d="M160 130c-6-18 4-32 22-36" fill="none" stroke="#c9a227" strokeWidth="4" strokeLinecap="round" />
            <line x1="182" y1="94" x2="226" y2="58" stroke="#e2c467" strokeWidth="6" strokeLinecap="round" />
            <circle cx="230" cy="54" r="7" fill="#e2c467" />
            <g opacity="0.9">
              <path
                d="M70 96c22-30 40-6 30 22-24 8-46-2-30-22Z"
                fill="#7c8b5c"
                stroke="#c9a227"
                strokeWidth="2"
              />
              <path
                d="M250 150c24-24 46 4 32 30-26 4-46-10-32-30Z"
                fill="#7c8b5c"
                stroke="#c9a227"
                strokeWidth="2"
              />
            </g>
            <path d="M100 330h120" stroke="#c9a227" strokeWidth="3" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}
