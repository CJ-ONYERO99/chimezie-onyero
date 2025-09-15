import Image from 'next/image'
import { Badge } from './ui/Badge'
import { ButtonLink } from './ui/Button'
import type { Project } from '@/types/project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card overflow-hidden h-full flex flex-col group motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[2px] hover:ring-1 hover:ring-[color:var(--accent-cyan)]/40">
      <div className="relative aspect-[16/9]">
        <Image src={project.cover || '/images/projects/placeholder.svg'} alt={`${project.title} cover`} fill className="object-cover transition-[filter] duration-200 group-hover:brightness-95" sizes="(max-width: 768px) 100vw, 33vw" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>
      <div className="p-6 flex-1 flex flex-col gap-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-[color:var(--text-muted)]">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {(project.tools || []).map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
        <ul className="list-disc pl-5 text-sm space-y-1 flex-1 marker:text-[color:var(--accent-cyan)]">
          {(project.highlights || []).slice(0,5).map((h, i) => <li key={i}>{h}</li>)}
        </ul>
        <div className="mt-1 flex gap-3">
          {project.links?.github && <ButtonLink href={project.links.github} variant="secondary" target="_blank" rel="noopener noreferrer">GitHub</ButtonLink>}
          {project.links?.demo && <ButtonLink href={project.links.demo} target="_blank" rel="noopener noreferrer">Demo</ButtonLink>}
        </div>
      </div>
    </div>
  )
}
