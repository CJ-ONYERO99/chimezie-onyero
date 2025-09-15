import fs from 'node:fs/promises'
import path from 'node:path'
import type { Project } from '@/types/project'

const ROOT = process.cwd()
const DIR = path.join(ROOT, 'src', 'content', 'projects')
let cache: { items: Project[]; mtimeMs: number } | null = null

export async function getAllProjects(): Promise<Project[]> {
  const stat = await fs.stat(DIR)
  if (cache && cache.mtimeMs === stat.mtimeMs) return cache.items
  const files = await fs.readdir(DIR)
  const items: Project[] = []
  for (const f of files) {
    if (!f.endsWith('.json')) continue
    const raw = await fs.readFile(path.join(DIR, f), 'utf8')
    const data = JSON.parse(raw) as Project
    items.push(data)
  }
  items.sort((a, b) => (a.date && b.date ? a.date.localeCompare(b.date) * -1 : 0))
  cache = { items, mtimeMs: stat.mtimeMs }
  return items
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const raw = await fs.readFile(path.join(DIR, `${slug}.json`), 'utf8')
    return JSON.parse(raw) as Project
  } catch {
    return null
  }
}

// Client-side fetching lives in '@/lib/projects-client'
