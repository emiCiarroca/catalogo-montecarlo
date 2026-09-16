import { useState } from 'react'

const HERO_EXTENSIONS = ['png', 'jpg', 'jpeg']

function HeroImage({ base, alt }) {
  const [attempt, setAttempt] = useState(0)
  const failed = attempt >= HERO_EXTENSIONS.length

  if (failed) {
    return (
      <div className="img-placeholder">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 16l5-4 4 3 4-5 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span>Falta agregar la foto</span>
        <code>{base}.png</code>
      </div>
    )
  }

  return (
    <img
      src={`${base}.${HERO_EXTENSIONS[attempt]}`}
      alt={alt}
      onError={() => setAttempt((a) => a + 1)}
    />
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media" aria-hidden="true">
        <HeroImage base="/assets/hero-banner" alt="" />
        <div className="hero-scrim" />
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-copy">
            <span className="eyebrow">Cooperativa yerbatera · Montecarlo, Misiones</span>
            <h1>
              La yerba se cultiva bajo <em>monte</em>, no en depósito.
            </h1>
            <p className="hero-lede">
              En 1930, 72 agricultores cansados de los abusos de los intermediarios se asociaron
              para comercializar su propia cosecha. Casi un siglo después, esa cooperativa sigue
              en pie: elaboramos y envasamos nosotros mismos cada línea de nuestro catálogo.
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
                <strong>500+</strong>
                <span>socios cooperativistas</span>
              </div>
              <div>
                <strong>5</strong>
                <span>líneas de productos</span>
              </div>
              <div>
                <strong>1930</strong>
                <span>año de fundación</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
