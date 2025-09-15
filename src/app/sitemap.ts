import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const pages = ['', '/about', '/portfolio', '/contact', '/blog', '/services', '/resume']
  return pages.map((p) => ({ url: base + p, lastModified: new Date() }))
}
