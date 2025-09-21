import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const services = [
  {
    title: 'OSINT Snapshot Report (Beginner)',
    desc: 'Non-intrusive, open-source reconnaissance (public footprints, basic DNS/IP lookups) with a simple findings summary and next-step recommendations.'
  },
  {
    title: 'Website Recon & Source Review (Beginner)',
    desc: 'Public-only review of pages and source code for obvious disclosures (e.g., comments, exposed emails/keys), with a short remediation checklist.'
  },
  {
    title: 'Suspicious IP/Alert Triage (Blue Team Lite)',
    desc: 'Check IPs or simple alerts with ipinfo/SecurityTrails, provide risk context and suggested follow-up actions.'
  },
  {
    title: 'Security Awareness Mini-Session',
    desc: '30–45 min walkthrough for individuals/small teams: phishing basics, password hygiene, and safe browsing tips, with a one-page cheat sheet.'
  },
  {
    title: 'Portfolio/Resume Security Projects Packaging',
    desc: 'Turn lab notes into clean project write-ups with clear objectives, process, findings, and reflections (great for junior roles).'
  }
]

const scopeNote = 'Scope & Ethics: All services are non-intrusive and permission-based. No vulnerability scanning, exploitation, or intrusive testing unless there is written authorization and a defined legal scope.'

export default function ServicesPage() {
  return (
    <Container>
      <Section
        title="Security Services I Offer"
        subtitle="Practical, beginner-friendly engagements to build confidence and safer habits."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} title={service.title}>
              <p>{service.desc}</p>
            </Card>
          ))}
        </div>
        <Card title="Scope & Ethics" className="mt-8">
          <p>{scopeNote}</p>
        </Card>
      </Section>
    </Container>
  )
}
