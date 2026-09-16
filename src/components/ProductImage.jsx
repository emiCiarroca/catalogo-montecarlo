import { useState } from 'react'

export default function ProductImage({ src, alt, caption }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className="media-figure">
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
    </figure>
  )
}
