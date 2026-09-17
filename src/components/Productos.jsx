import { useState } from 'react'
import { lineas } from '../data/products.js'
import ProductImage from './ProductImage.jsx'
import ScrollRow from './ScrollRow.jsx'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'

function SocialIcon({ kind }) {
  if (kind === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6H14v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}

export default function Productos() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="productos" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Catálogo</span>
          <h2>Nuestras líneas de productos</h2>
          <p>
            Cinco líneas, más de veinte presentaciones. Deslizá de costado las variedades de
            cada línea y consultá abajo el detalle completo de formatos disponibles.
          </p>
        </Reveal>

        {lineas.map((linea) => (
          <Reveal as="article" id={`producto-${linea.id}`} className="producto" key={linea.id}>
            <div className="producto-head">
              <span className="producto-tag">{linea.tagline}</span>
              <h3>{linea.name}</h3>
              <p className="producto-desc">{linea.description}</p>

              {linea.badges?.length > 0 && (
                <div className="badge-row">
                  {linea.badges.map((b) => (
                    <span className="badge" key={b}>{b}</span>
                  ))}
                </div>
              )}

              {linea.headLink && (
                <div className="producto-head-links">
                  <a
                    href={linea.headLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="producto-head-link"
                  >
                    Ver en la web de la cooperativa ↗
                  </a>

                  {linea.social && (
                    <div className="social-icons">
                      {linea.social.facebook && (
                        <a href={linea.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <SocialIcon kind="facebook" />
                        </a>
                      )}
                      {linea.social.instagram && (
                        <a href={linea.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <SocialIcon kind="instagram" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <ScrollRow label={`Variedades de ${linea.name}`}>
              {linea.variantes.map((v) => (
                <div className="variant-card" key={v.name}>
                  <div className="variant-photo">
                    <ProductImage
                      src={v.image}
                      alt={`${linea.name} — ${v.name}`}
                      onClick={() =>
                        setLightbox({ src: v.image, alt: `${linea.name} — ${v.name}` })
                      }
                    />
                  </div>
                  <div className="variant-info">
                    <h4>{v.name}</h4>
                    <p>{v.blurb}</p>

                    {v.tienda && (
                      <a
                        href={v.tienda}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="variant-shop-link"
                      >
                        Ir a la tienda →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </ScrollRow>

            {linea.fotosPendientes && (
              <p className="fotos-pendientes">* Fotos de esta línea pendientes de incorporar al catálogo.</p>
            )}

            {linea.presentaciones?.length > 0 && (
              <div className="tabla-wrap">
                <table className="tabla-presentaciones">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Presentación</th>
                      <th>Peso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {linea.presentaciones.map((p, i) => (
                      <tr key={i}>
                        <td>{p.producto}</td>
                        <td>{p.presentacion}</td>
                        <td>{p.peso}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
