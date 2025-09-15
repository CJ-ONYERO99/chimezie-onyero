"use client"

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import ProjectCard from '@/components/ProjectCard'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getAllProjectsClient } from '@/lib/projects-client'
import type { Project } from '@/types/project'

const TAGS = ['Network', 'Web', 'Auth', 'Awareness', 'Tools', 'sample']

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const search = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const tag = search.get('tag') || ''

  useEffect(() => {
    getAllProjectsClient().then(setProjects)
  }, [])

  const filtered = useMemo(() => {
    if (!tag) return projects
    const lowerTag = tag.toLowerCase()
    return projects.filter((p) =>
      ((p.tags ?? []) as string[])
        .map((x: string) => x.toLowerCase())
        .some((t: string) => t === lowerTag)
    )
  }, [projects, tag])

  function setTag(next?: string) {
    const params = new URLSearchParams(search.toString())
    if (!next) params.delete('tag')
    else params.set('tag', next)
    router.push(pathname + '?' + params.toString())
  }

  return (
    <Container>
      <Section title="My Portfolio" subtitle="Selected cybersecurity‑oriented samples and case studies">
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            aria-current={!tag ? 'page' : undefined}
            className={`px-4 py-2 rounded-full text-sm shadow-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]
              ${!tag ? 'bg-[color:var(--accent-crimson)] text-white border border-transparent' : 'bg-transparent border border-[color:var(--border)] hover:bg-black/10'}`}
            onClick={() => setTag(undefined)}
          >All</button>
          {TAGS.map((t) => (
            <button
              key={t}
              aria-current={tag === t ? 'page' : undefined}
              className={`px-4 py-2 rounded-full text-sm shadow-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]
                ${tag === t ? 'bg-[color:var(--accent-crimson)] text-white border border-transparent' : 'bg-transparent border border-[color:var(--border)] hover:bg-black/10'}`}
              onClick={() => setTag(t)}
            >{t}</button>
          ))}
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent opacity-70 mb-6" aria-hidden />
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/40 backdrop-blur p-4 md:p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl p-2">
            {filtered.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} aria-label={`${p.title} details`}>
                <ProjectCard project={p} />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  )
}
