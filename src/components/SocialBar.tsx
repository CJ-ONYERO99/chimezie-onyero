import Link from 'next/link'

const socials = [
  { href: 'https://www.linkedin.com/in/chimezie-onyero-1605121b0/', label: 'LinkedIn', short: 'in' },
  { href: 'https://github.com/CJ-ONYERO99', label: 'GitHub', short: 'gh' },
  { href: 'https://x.com/CartelJozzy', label: 'X/Twitter', short: 'x' },
]

export default function SocialBar() {
  return (
    <nav aria-label="Social links" className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-30">
      <ul className="flex flex-col gap-3">
        {socials.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[color:var(--surface-border)] bg-black/60 backdrop-blur transition-all duration-300 shadow-[0_0_18px_rgba(57,255,20,0.12)] hover:-translate-y-1 hover:bg-[color:var(--brand-primary)] hover:border-[color:var(--brand-primary)] hover:text-black hover:shadow-[0_0_35px_rgba(57,255,20,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              <span aria-hidden className="uppercase text-xs tracking-[0.2em]">{s.short}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

