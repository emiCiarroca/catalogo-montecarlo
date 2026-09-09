import { products } from '../data/products.js'
import Carousel from './Carousel.jsx'
import ProductArt from './ProductArt.jsx'
import Reveal from './Reveal.jsx'

function buildSlides(product) {
  const kinds = [product.art, 'hoja', 'cebado'].filter(
    (k, i, arr) => arr.indexOf(k) === i
  )
  return kinds.map((kind) => (
    <ProductArt key={kind} kind={kind} accent={product.accent} />
  ))
}

export default function Productos() {
  return (
    <section id="productos" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Catálogo</span>
          <h2>Cinco yerbas, un mismo yerbal</h2>
          <p>
            Cada línea sale del mismo monte, pero con su propio secado, estacionamiento y
            mezcla. Deslizá el carrusel de cada una para ver el paquete, la hoja y cómo se ceba.
          </p>
        </Reveal>

        {products.map((product) => (
          <Reveal as="article" className="producto" key={product.id}>
            <div className="producto-media">
              <Carousel
                slides={buildSlides(product)}
                label={`Imágenes de ${product.name}`}
              />
            </div>

            <div className="producto-info">
              <span className="producto-tag">{product.tag}</span>
              <h3>{product.name}</h3>
              <p className="producto-desc">{product.description}</p>

              <div className="producto-meta">
                <div>
                  <span>Intensidad</span>
                  <div className="intensidad" aria-label={`Intensidad ${product.intensidad} de 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className={i < product.intensidad ? 'on' : ''} />
                    ))}
                  </div>
                </div>
                <div>
                  <span>Secado</span>
                  <strong>{product.secado}</strong>
                </div>
                <div>
                  <span>Ideal para</span>
                  <strong>{product.idealPara}</strong>
                </div>
                <div>
                  <span>Origen</span>
                  <strong>{product.origen}</strong>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
