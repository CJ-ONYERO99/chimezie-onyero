import type { Project } from '@/types/project'

export async function getAllProjectsClient(): Promise<Project[]> {
  const res = await fetch('/api/projects', { next: { revalidate: 60 } } as any)
  if (!res.ok) return []
  return res.json()
}

