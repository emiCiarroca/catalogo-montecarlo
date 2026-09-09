import { useRef, useState } from 'react'

export default function Carousel({ slides, label }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  const total = slides.length

  const goTo = (i) => {
    const next = (i + total) % total
    setIndex(next)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') goTo(index + 1)
    if (e.key === 'ArrowLeft') goTo(index - 1)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? index - 1 : index + 1)
    }
    touchStartX.current = null
  }

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carrusel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div
        className="carousel-frame"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              className="carousel-slide"
              key={i}
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-btn"
            onClick={() => goTo(index - 1)}
            aria-label="Imagen anterior"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-btn"
            onClick={() => goTo(index + 1)}
            aria-label="Imagen siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  )
}
