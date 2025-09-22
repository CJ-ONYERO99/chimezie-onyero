export function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = props.id || props.name || label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-[color:var(--text-muted)]">{label}</label>
      <input
        id={id}
        {...props}
        className="w-full rounded-xl border border-[rgba(57,255,20,0.18)] bg-black/40 px-3 py-2 text-[color:var(--text-primary)] shadow-[0_0_20px_rgba(0,0,0,0.35)] transition focus:border-[color:var(--brand-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]"
      />
    </div>
  )
}
