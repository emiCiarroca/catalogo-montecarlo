export default function ScrollRow({ children, label }) {
  return (
    <div className="scroll-row" role="group" aria-label={label}>
      <div className="scroll-track">{children}</div>
    </div>
  )
}
