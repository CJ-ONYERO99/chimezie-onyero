import { describe, it, expect } from 'vitest'
import { validateContact } from '@/app/api/contact/validation'

describe('contact validate', () => {
  it('rejects honeypot', () => {
    const res = validateContact({ name: 'A', email: 'a@b.com', message: 'hello world hello', website: 'x' })
    expect(res.ok).toBe(false)
  })
  it('accepts valid', () => {
    const res = validateContact({ name: 'Alice', email: 'a@b.com', message: 'hello world hello' })
    expect(res.ok).toBe(true)
    if (res.ok) {
      expect(res.data.name).toBe('Alice')
    }
  })
})
