import { describe, it, expect } from 'vitest'
import { getAllProjects } from '@/lib/projects'

describe('projects loader', () => {
  it('loads JSON projects sorted by date desc', async () => {
    const list = await getAllProjects()
    expect(list.length).toBeGreaterThanOrEqual(3)
    const dates = list.map((p) => p.date)
    const sorted = [...dates].sort((a, b) => (a && b ? a.localeCompare(b) * -1 : 0))
    expect(dates).toEqual(sorted)
  })
})

