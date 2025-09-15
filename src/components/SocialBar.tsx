import Link from 'next/link'

const socials = [
  { href: 'https://www.linkedin.com/in/<username>', label: 'LinkedIn', short: 'in' },
  { href: 'https://github.com/<username>', label: 'GitHub', short: 'gh' },
  { href: 'https://twitter.com/<username>', label: 'X/Twitter', short: 'x' },
]

export default function SocialBar() {
  return (
    <nav aria-label="Social links" className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-30">
      <ul className="flex flex-col gap-3">
        {socials.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[color:var(--border)] bg-transparent hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              <span aria-hidden className="uppercase text-xs tracking-wide">{s.short}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

