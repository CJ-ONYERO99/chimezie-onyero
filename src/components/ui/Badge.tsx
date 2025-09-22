export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgba(57,255,20,0.18)] bg-black/30 px-3 py-1 text-xs text-[color:var(--brand-secondary)]">
      {children}
    </span>
  )
}
