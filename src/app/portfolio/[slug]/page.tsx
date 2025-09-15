import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import CaseStudy from '@/components/CaseStudy'
import { getProjectBySlug } from '@/lib/projects'

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return notFound()

  return (
    <Container>
      <Section title={project.title} subtitle={project.summary}>
        <CaseStudy project={project} />
      </Section>
    </Container>
  )
}

