import { useState } from 'react'

export default function LogoMark() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <svg className="brand-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="14" fill="#1F2A1A" />
        <path d="M32 12c12 4 18 14 18 24 0 8-6 14-14 14-2-8-2-16 0-24 2-6 6-11-4-14z" fill="#C9A227" />
        <path d="M32 50V16" stroke="#1F2A1A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <img
      className="brand-mark"
      src="/assets/leaf.png"
      alt=""
      onError={() => setFailed(true)}
    />
  )
}
