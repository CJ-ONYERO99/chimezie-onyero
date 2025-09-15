"use client"
import Link from 'next/link'
import ThemeToggle from './ui/ThemeToggle'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'My Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
]

export default function Navbar() {
  const currentPath = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`border-b border-[color:var(--border)] bg-[color:var(--surface)]/80 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/70 sticky top-0 z-40 ${scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''}`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold">Chimezie Onyero</Link>
        <ul className="hidden md:flex items-center gap-4" role="menubar">
          {nav.map((n) => (
            <li key={n.href} role="none">
              <Link role="menuitem" aria-current={currentPath === n.href ? 'page' : undefined} className={`px-3 py-2 rounded-lg hover:bg-black/10 ${currentPath === n.href ? 'underline text-[color:var(--accent-cyan)]' : ''}`} href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
