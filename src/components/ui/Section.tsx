export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <header className="mb-6 space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-lg text-[color:var(--text-muted)]">{subtitle}</p>}
      </header>
      <div className="space-y-6">{children}</div>
    </section>
  )
}
