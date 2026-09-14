import { lineas } from '../data/products.js'
import Carousel from './Carousel.jsx'
import ProductImage from './ProductImage.jsx'
import Reveal from './Reveal.jsx'

export default function Productos() {
  return (
    <section id="productos" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Catálogo</span>
          <h2>Nuestras líneas de productos</h2>
          <p>
            Cuatro líneas, más de veinte presentaciones. Deslizá el carrusel de cada línea
            para ver sus variedades y consultá el detalle de formatos disponibles.
          </p>
        </Reveal>

        {lineas.map((linea) => (
          <Reveal as="article" className="producto" key={linea.id}>
            <div className="producto-media">
              <Carousel
                slides={linea.images.map((img) => (
                  <ProductImage key={img.src} src={img.src} alt={`${linea.name} — ${img.caption}`} caption={img.caption} />
                ))}
                label={`Imágenes de ${linea.name}`}
              />
              {linea.fotosPendientes && (
                <p className="fotos-pendientes">* Fotos de esta línea pendientes de incorporar al catálogo.</p>
              )}
            </div>

            <div className="producto-info">
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
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
