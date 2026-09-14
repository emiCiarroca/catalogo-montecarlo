import Reveal from './Reveal.jsx'

const HITOS = [
  {
    year: '1926',
    text: 'En la colonia de Montecarlo, poblada mayormente por inmigrantes alemanes dedicados al maíz, el tabaco y la mandioca, comienza el cultivo de yerba mate.',
  },
  {
    year: '24 jul. 1930',
    text: 'Cansados de los abusos de los intermediarios, 72 agricultores se asocian y fundan la Cooperativa Agrícola Mixta de Montecarlo Limitada.',
  },
  {
    year: 'Primeros años',
    text: 'La cooperativa prioriza construir un almacén de ramos generales y, luego, su propio secadero de yerba mate.',
  },
  {
    year: 'Décadas siguientes',
    text: 'Nacen las marcas Aguantadora y Sinceridad, hoy las líneas de yerba más reconocidas de la cooperativa, junto con la fabricación de fécula de mandioca.',
  },
  {
    year: 'Hoy',
    text: 'Más de 500 socios sostienen la cooperativa, que elabora yerba mate y fécula de mandioca bajo los mismos principios de asociativismo de sus fundadores.',
  },
]

export default function Historia() {
  return (
    <section id="historia" className="section-pad bg-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Nuestra historia</span>
          <h2>Casi un siglo de asociativismo</h2>
        </Reveal>

        <div className="historia-grid">
          <Reveal className="historia-intro">
            <p>
              Montecarlo, Misiones, fue colonizada a principios del siglo XX por inmigrantes en
              su mayoría alemanes que llegaron en busca de tierras para cultivar. El río Paraná
              era entonces la única vía para transportar lo que producían.
            </p>
            <p>
              Ante la dificultad creciente para comercializar sus cosechas y los abusos de los
              intermediarios, un grupo de agricultores decidió hermanarse bajo los principios
              cooperativos. Esa decisión sigue guiando a la cooperativa hoy.
            </p>
          </Reveal>

          <Reveal>
            <ul className="timeline">
              {HITOS.map((h) => (
                <li key={h.year}>
                  <span className="timeline-year">{h.year}</span>
                  <p className="timeline-text">{h.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
