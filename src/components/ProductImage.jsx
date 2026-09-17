import { useState } from 'react'

export default function ProductImage({ src, alt, caption, onClick }) {
  const [failed, setFailed] = useState(false)
  const clickable = typeof onClick === 'function' && !failed

  return (
    <figure
      className={`media-figure${clickable ? ' clickable' : ''}`}
      onClick={clickable ? onClick : undefined}
    >
      {failed ? (
        <div className="img-placeholder">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 16l5-4 4 3 4-5 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span>Falta agregar la foto</span>
          <code>{src}</code>
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}

      {caption && <figcaption>{caption}</figcaption>}

      {clickable && (
        <div className="zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </figure>
  )
}
