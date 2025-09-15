import Link from 'next/link'

const socials = [
  { href: 'https://www.linkedin.com/in/<username>', label: 'LinkedIn' },
  { href: 'https://github.com/<username>', label: 'GitHub' },
  { href: 'https://twitter.com/<username>', label: 'X/Twitter' }
]

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[color:var(--border)]">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[color:var(--text-muted)]">© {new Date().getFullYear()} Chimezie Onyero • Last updated {new Date().toISOString().split('T')[0]}</p>
        <ul className="flex items-center gap-4">
          {socials.map((s) => (
            <li key={s.href}><Link className="underline" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</Link></li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
