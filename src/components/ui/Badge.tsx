export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs bg-transparent border border-[color:var(--border)] text-[color:var(--text-primary)]">
      {children}
    </span>
  )
}
