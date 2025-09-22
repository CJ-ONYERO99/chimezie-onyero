"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const links = [
  { href: '/', label: 'Home', icon: 'ri-home-line' },
  { href: '/about', label: 'About', icon: 'ri-user-line' },
  { href: '/portfolio', label: 'My Portfolio', icon: 'ri-folder-line' },
  { href: '/blog', label: 'Blog', icon: 'ri-article-line' },
  { href: '/services', label: 'Services', icon: 'ri-code-line' },
  { href: '/contact', label: 'Contact', icon: 'ri-mail-line' },
  { href: '/resume', label: 'Resume', icon: 'ri-file-user-line' }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 nav-floating rounded-full px-8 py-3">
        <div className="flex items-center gap-8">
          <span className="orbitron text-sm uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Cyber</span>
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors duration-300',
                  active ? 'text-[color:var(--brand-primary)]' : 'text-slate-100 hover:text-[color:var(--brand-primary)]'
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 nav-floating rounded-full px-6 py-3">
        <div className="flex items-center gap-6 text-lg">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300',
                  active
                    ? 'bg-[color:var(--brand-primary)] text-black shadow-[0_0_20px_rgba(57,255,20,0.35)]'
                    : 'text-slate-100 hover:text-[color:var(--brand-primary)]'
                )}
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
