import { useState } from 'react'
import { lineas } from '../data/products.js'
import Reveal from './Reveal.jsx'


const WHOLESALE_EMAIL = 'tiendaonline@montecarlo.com.ar'
const WHOLESALE_WHATSAPP = '5493434718889'

const MARCAS = lineas.map((l) => l.name)

const BENEFICIOS = [
  {
    title: 'Directo desde origen',
    text: 'Comprás a la cooperativa que produce y envasa, sin intermediarios en el medio.',
  },
  {
    title: 'Marcas reconocidas',
    text: 'Aguantadora, Sinceridad y Pampa, con presencia en todo el país.',
  },
  {
    title: 'Formatos para reventa',
    text: 'Presentaciones de 1, 2, 10 y hasta 25 kg según la línea, pensadas para comercios.',
  },
  {
    title: 'Envíos a todo el país',
    text: 'Despachamos a cualquier provincia, para kioscos, supermercados y distribuidores.',
  },
]

export default function Mayoristas() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${WHOLESALE_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (!response.ok) throw new Error('Fallo el envío')

      setStatus('¡Gracias! El equipo de comercialización te va a contactar a la brevedad.')
      form.reset()
    } catch (err) {
      setStatus('No se pudo enviar la consulta. Probá de nuevo o escribinos por WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="mayoristas" className="section-pad bg-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Mayoristas</span>
          <h2>¿Tenés un comercio? Sumate como revendedor</h2>
          <p>
            Kioscos, almacenes, supermercados y distribuidores de todo el país trabajan con
            nosotros. Contanos sobre tu comercio y te asesoramos sobre condiciones y formatos.
          </p>
        </Reveal>

        <div className="mayoristas-grid">
          <Reveal>
            <ul className="beneficios-list">
              {BENEFICIOS.map((b) => (
                <li key={b.title}>
                  <strong>{b.title}</strong>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="mayoristas-contacto">
              <p>También podés escribirnos directamente:</p>
              <a
                href={`https://api.whatsapp.com/send?phone=${WHOLESALE_WHATSAPP}&text=${encodeURIComponent(
                  'Hola, quiero consultar por comercialización mayorista.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                WhatsApp comercialización
              </a>
              <a href={`mailto:${WHOLESALE_EMAIL}`} className="mayoristas-email">
                {WHOLESALE_EMAIL}
              </a>
            </div>
          </Reveal>

          <Reveal>
            <form className="form-card" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta de comercialización mayorista - Montecarlos"
              />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="field">
                <label htmlFor="m-nombre">Nombre</label>
                <input id="m-nombre" name="nombre" type="text" required placeholder="Tu nombre" />
              </div>

              <div className="field">
                <label htmlFor="m-email">Email</label>
                <input id="m-email" name="email" type="email" required placeholder="vos@correo.com" />
              </div>

              <div className="field">
                <label htmlFor="m-razon">Razón social de tu comercio</label>
                <input id="m-razon" name="razon_social" type="text" placeholder="Nombre de tu negocio" />
              </div>

              <div className="field">
                <label htmlFor="m-ciudad">Ciudad</label>
                <input id="m-ciudad" name="ciudad" type="text" placeholder="Tu ciudad" />
              </div>

              <div className="field">
                <label htmlFor="m-tipo">Tipo de comercio</label>
                <select id="m-tipo" name="tipo_comercio" defaultValue="">
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  <option value="Minorista">Minorista</option>
                  <option value="Mayorista">Mayorista</option>
                  <option value="Distribuidor">Distribuidor</option>
                  <option value="Supermercado">Supermercado</option>
                </select>
              </div>

              <div className="field">
                <span className="field-label-static">¿Qué marcas te interesa comercializar?</span>
                <div className="checkbox-group">
                  {MARCAS.map((marca) => (
                    <label key={marca} className="checkbox-item">
                      <input type="checkbox" name="marcas" value={marca} />
                      {marca}
                    </label>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="m-comentarios">Comentarios</label>
                <textarea
                  id="m-comentarios"
                  name="comentarios"
                  required
                  placeholder="Contanos qué volumen manejás y qué necesitás"
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Enviando…' : 'Enviar consulta'}
              </button>
              <p className="form-note" role="status">{status}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
