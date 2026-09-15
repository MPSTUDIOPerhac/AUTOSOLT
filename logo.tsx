export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center ${className ?? ''}`} aria-label="AUTOSOLT – domů">
      {/* Zatím textová značka, dokud nemáme reálné logo klienta */}
      <span className="font-heading text-2xl tracking-tight">
        <span className="font-light text-white">AUTO</span>
        <span className="font-extrabold text-cta">SOLT</span>
      </span>
    </a>
  )
}
