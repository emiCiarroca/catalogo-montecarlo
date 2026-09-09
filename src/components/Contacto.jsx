import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function Contacto() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('¡Gracias! Te vamos a responder dentro de las próximas 48 horas hábiles.')
    e.target.reset()
  }

  return (
    <section id="contacto" className="section-pad bg-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contacto</span>
          <h2>Escribinos a la cooperativa</h2>
        </Reveal>

        <div className="contacto-grid">
          <Reveal>
            <p>
              Para pedidos mayoristas, visitas al secadero o consultas sobre asociarte, este es
              el mejor camino.
            </p>

            <ul className="contacto-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <div>
                  <strong>Ruta 12, km 1489</strong>
                  <span>Montecarlo, Misiones, Argentina</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <div>
                  <strong>contacto@montecarlos.coop</strong>
                  <span>Pedidos y consultas generales</span>
                </div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
                <div>
                  <strong>+54 3751 42-0000</strong>
                  <span>Lunes a viernes, 8 a 16 h</span>
                </div>
              </li>
            </ul>

            <div className="social-row">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6H14v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17l-1.4 3.4L9 19a8 8 0 1 0-3.4-3.4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M9 9.8c0 3 2.7 5.4 5.5 5.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />
              </div>
              <div className="field">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="email" required placeholder="vos@correo.com" />
              </div>
              <div className="field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" required placeholder="Contanos qué necesitás" />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar mensaje
              </button>
              <p className="form-note" role="status">{status}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
