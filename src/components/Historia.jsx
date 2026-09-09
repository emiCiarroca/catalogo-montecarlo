import Reveal from './Reveal.jsx'

const HITOS = [
  {
    year: '1958',
    text: 'Doce familias productoras de Montecarlo se asocian para dejar de venderle la hoja verde a los secaderos de terceros y fundan la cooperativa.',
  },
  {
    year: '1975',
    text: 'Se inaugura el primer secadero propio, con barbacuá a leña, permitiendo estacionar y envasar la yerba con marca propia por primera vez.',
  },
  {
    year: '1998',
    text: 'Montecarlos empieza a distribuir en Corrientes, Chaco y Santa Fe, sumando nuevas familias asociadas de parajes vecinos.',
  },
  {
    year: '2016',
    text: 'Ocho productores certifican manejo agroecológico bajo monte nativo, dando origen a la línea Orgánica.',
  },
  {
    year: 'Hoy',
    text: 'Más de sesenta familias sostienen la cooperativa, que sigue decidiendo en asamblea qué se cultiva, cómo se seca y a quién se le vende.',
  },
]

export default function Historia() {
  return (
    <section id="historia" className="section-pad bg-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Nuestra historia</span>
          <h2>Sesenta años decidiendo en asamblea</h2>
        </Reveal>

        <div className="historia-grid">
          <Reveal className="historia-intro">
            <p>
              Montecarlo está en el corazón de la Selva Paranaense, en Misiones. Ahí el monte y
              el yerbal conviven desde siempre, y ahí nacimos como cooperativa en un momento en
              que los pequeños productores no tenían forma de poner precio a su propia cosecha.
            </p>
            <p>
              Seguimos siendo eso: una organización de productores, no una empresa que les
              compra. Cada decisión sobre el secado, el estacionamiento y el envasado se toma
              en asamblea, con la misma lógica de siempre.
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
