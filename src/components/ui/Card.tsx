export function Card({ title, className, children }: { title?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`card p-8 transition-shadow motion-safe:duration-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${className || ''}`}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  )
}
