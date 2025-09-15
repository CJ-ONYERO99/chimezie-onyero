export function Textarea({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = props.id || props.name || label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
      <textarea id={id} {...props}
                className="w-full rounded-xl px-3 py-2 bg-transparent border border-[color:var(--border)] text-[color:var(--text-primary)]" />
    </div>
  )
}
