import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { buildDefaultMetadata, jsonLdPerson } from '@/lib/seo'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = buildDefaultMetadata()

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1F26' },
  ],
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Read CSP nonce set in middleware (Next 15: headers() is async-typed)
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
    <html lang="en" className={inter.className}>
      <head>
        <script suppressHydrationWarning nonce={nonce} dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main" className="container py-16 md:py-20 min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
