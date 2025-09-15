import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const services = [
  { title: 'Security Review Lite', desc: 'Lightweight reviews for early projects: auth flows, password policy, and input validation.' },
  { title: 'Lab Write-ups', desc: 'Clear, beginner‑friendly summaries and practical takeaways for security labs.' },
  { title: 'Awareness Content', desc: 'Short guides and checklists to help small teams build safer habits.' }
]

export default function ServicesPage() {
  return (
    <Container>
      <Section title="Services" subtitle="Simple, practical offerings">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} title={s.title}>
              <p>{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}
