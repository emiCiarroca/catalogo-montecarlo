// Ilustraciones vectoriales propias para cada yerba, en vez de fotos de stock.
// Se arman combinando formas simples (guampa, hoja, humo, monte, paquete)
// tintadas con el color de acento de cada producto.

function Backdrop({ accent }) {
  return (
    <>
      <circle cx="100" cy="100" r="92" fill="var(--bg-2)" />
      <circle cx="100" cy="100" r="92" fill={accent} opacity="0.08" />
    </>
  )
}

function Paquete({ accent }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <Backdrop accent={accent} />
      <path
        d="M64 62h72l8 16-6 84a10 10 0 0 1-10 9H72a10 10 0 0 1-10-9l-6-84z"
        fill="var(--bg-3)"
        stroke={accent}
        strokeWidth="2.5"
      />
      <path d="M78 62c0-14 9-24 22-24s22 10 22 24" fill="none" stroke={accent} strokeWidth="3" />
      <rect x="70" y="88" width="60" height="46" rx="3" fill={accent} opacity="0.85" />
      <path d="M78 108h44M78 118h30" stroke="var(--bg-1)" strokeWidth="3" strokeLinecap="round" />
      <path d="M64 78h72" stroke={accent} strokeWidth="2" opacity="0.6" />
    </svg>
  )
}

function Hoja({ accent }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <Backdrop accent={accent} />
      <g transform="translate(100 104) rotate(-8)">
        <path
          d="M0 -74C34 -60 52 -22 52 10c0 40-24 66-52 66S-52 50-52 10c0-32 18-70 52-84Z"
          fill="var(--bg-3)"
          stroke={accent}
          strokeWidth="2.5"
        />
        <path d="M0 -60V70" stroke={accent} strokeWidth="2.5" />
        <path d="M0 -34 22 -18M0 -6 26 10M0 22 24 40M0 -34-22-18M0-6-26 10M0 22-24 40" stroke={accent} strokeWidth="1.6" opacity="0.7" />
      </g>
    </svg>
  )
}

function Cebado({ accent }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <Backdrop accent={accent} />
      <path
        d="M70 96c0-24 14-38 30-38s30 14 30 38v34c0 16-13 28-30 28s-30-12-30-28z"
        fill="var(--bg-3)"
        stroke={accent}
        strokeWidth="2.5"
      />
      <path d="M96 58c-4-10 2-18 12-20" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <line x1="112" y1="46" x2="138" y2="26" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <circle cx="140" cy="24" r="4" fill={accent} />
      <path d="M76 118c8 6 40 6 48 0" stroke="var(--bg-1)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M60 150h80" stroke={accent} strokeWidth="2" opacity="0.4" />
    </svg>
  )
}

function Humo({ accent }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <Backdrop accent={accent} />
      <path d="M60 150h80l-8-50H68z" fill="var(--bg-3)" stroke={accent} strokeWidth="2.5" />
      <path d="M60 150h80" stroke={accent} strokeWidth="3" />
      <path
        d="M84 100c-6-14 6-16 2-30M100 100c-6-16 8-18 2-34M116 100c-6-14 6-16 2-30"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path d="M72 116h56M76 130h48" stroke="var(--bg-1)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function Monte({ accent }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <Backdrop accent={accent} />
      <path d="M40 140 78 84l24 30 18-40 40 66z" fill="var(--bg-3)" stroke={accent} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="78" cy="70" r="10" fill={accent} opacity="0.85" />
      <circle cx="120" cy="58" r="8" fill={accent} opacity="0.65" />
      <path d="M40 140h120" stroke={accent} strokeWidth="3" />
      <path d="M52 140v10M164 140v10" stroke={accent} strokeWidth="2" opacity="0.5" />
    </svg>
  )
}

const KINDS = {
  paquete: Paquete,
  hoja: Hoja,
  cebado: Cebado,
  humo: Humo,
  monte: Monte,
}

export default function ProductArt({ kind, accent }) {
  const Cmp = KINDS[kind] || Hoja
  return <Cmp accent={accent} />
}
