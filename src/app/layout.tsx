import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter, Orbitron, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { buildDefaultMetadata, jsonLdPerson } from '@/lib/seo'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', weight: ['400', '500', '600', '700', '800', '900'] })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = buildDefaultMetadata()

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#050505' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' }
  ]
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const hdrs = await headers()
  const nonce = hdrs.get('x-nonce') || undefined
  const themeScript = `
    try {
      const m = localStorage.getItem('theme');
      if (m === 'dark') document.documentElement.classList.add('dark');
      if (m === 'light') document.documentElement.classList.remove('dark');
      if (!m && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark');
    } catch {}
  `

  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" />
        <script nonce={nonce} src="https://unpkg.com/@phosphor-icons/web" defer />
        <script suppressHydrationWarning nonce={nonce} dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      </head>
      <body className="relative">
        <div className="digital-noise" aria-hidden />
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main" className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
