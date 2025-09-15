export default function StatCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="card p-4">
      <div className="text-sm text-[color:var(--text-muted)]">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
      {hint && <div className="text-xs mt-1 text-[color:var(--text-muted)]">{hint}</div>}
    </div>
  )
}
