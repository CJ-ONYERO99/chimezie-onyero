import { Card } from '@/components/ui/Card'
import type { Project } from '@/types/project'
import { ButtonLink } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(project.tags || []).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Problem" className="md:col-span-1">
          <p>{project.problem || '—'}</p>
        </Card>
        <Card title="Approach" className="md:col-span-1">
          <p>{project.approach || '—'}</p>
        </Card>
        <Card title="Results" className="md:col-span-1">
          <p>{project.results || '—'}</p>
        </Card>
      </div>
      <div className="flex gap-3">
        {project.links?.github && (
          <ButtonLink href={project.links.github} variant="secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </ButtonLink>
        )}
        {project.links?.demo && (
          <ButtonLink href={project.links.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </ButtonLink>
        )}
      </div>
    </div>
  )
}
