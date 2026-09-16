import { useEffect, useState } from 'react'
import { lineas } from '../data/products.js'

const LINKS = [
  { id: 'historia', label: 'Historia' },
  { id: 'productos', label: 'Productos' },
  { id: 'contacto', label: 'Contacto' },
]

const PRODUCT_LINKS = lineas.map((l) => ({ id: `producto-${l.id}`, label: l.name }))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#top" className="brand" onClick={handleLinkClick}>
          <svg className="brand-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="14" fill="#1F2A1A" />
            <path d="M32 12c12 4 18 14 18 24 0 8-6 14-14 14-2-8-2-16 0-24 2-6 6-11-4-14z" fill="#C9A227" />
            <path d="M32 50V16" stroke="#1F2A1A" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>
            <span className="brand-name">Montecarlo</span>
            <span className="brand-sub">COOPERATIVA AGRICOLA MIXTA</span>
          </span>
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav className={`navbar${open ? ' open' : ''}`}>
          {LINKS.map((link) =>
            link.id === 'productos' ? (
              <div className="nav-item has-submenu" key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link${active === link.id ? ' active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                  <svg className="nav-caret" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="submenu">
                  {PRODUCT_LINKS.map((p) => (
                    <a key={p.id} href={`#${p.id}`} className="submenu-link" onClick={handleLinkClick}>
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link${active === link.id ? ' active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
