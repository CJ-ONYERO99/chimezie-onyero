import { describe, it, expect } from 'vitest'
import { buildDefaultMetadata } from '@/lib/seo'

describe('SEO metadata', () => {
  it('returns title and description', () => {
    const meta = buildDefaultMetadata()
    expect(meta.title).toBeTruthy()
    expect(meta.description).toBeTruthy()
    expect(meta.openGraph?.images?.[0]?.url).toContain('og-image')
  })
})

