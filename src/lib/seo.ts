import type { Metadata } from 'next'

const title = 'Chimezie Onyero — Portfolio'
const description = 'Aspiring Cybersecurity Professional based in Nigeria. ALX Cybersecurity & Professional Foundations (enrolled). Projects, writing, and contact.'
const url = 'https://example.com'

export function buildDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(url),
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Chimezie Onyero',
      images: [
        { url: '/og-image.svg', width: 1200, height: 630, alt: 'Chimezie Onyero' }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.svg']
    },
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.ico' }
  }
}

export const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chimezie Onyero',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG'
  },
  sameAs: [
    'https://www.linkedin.com/in/<username>',
    'https://github.com/<username>',
    'https://twitter.com/<username>'
  ]
}
