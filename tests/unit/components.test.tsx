import { render, screen } from '@testing-library/react'
import ProjectCard from '@/components/ProjectCard'
import ThemeToggle from '@/components/ui/ThemeToggle'

const sampleProject = {
  slug: 'x',
  title: 'Sample',
  summary: 'Summary',
  tools: ['A'],
  highlights: ['H1'],
  links: { github: '#', demo: '#' },
  cover: '/images/projects/placeholder.svg',
} as const

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={sampleProject as any} />)
    expect(screen.getByText('Sample')).toBeInTheDocument()
  })
})

describe('ThemeToggle', () => {
  it('mounts', () => {
    render(<ThemeToggle />)
  })
})

