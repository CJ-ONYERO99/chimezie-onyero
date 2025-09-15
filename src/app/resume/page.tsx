import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function ResumePage() {
  return (
    <Container>
      <Section title="Resume" subtitle="Snapshot and download">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Snapshot</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Education: University of Nigeria, Nsukka (Bachelor of Engineering)</li>
              <li>Current Focus: ALX Cybersecurity and Professional Foundations (enrolled)</li>
              <li>Skills: Python, Wireshark, basic web security, auth basics</li>
              <li>Certifications: TODO (placeholder)</li>
            </ul>
          </div>
          <Button asChild>
            <Link href="/resume.pdf" download>Download PDF</Link>
          </Button>
        </div>
      </Section>
    </Container>
  )
}
