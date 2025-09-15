import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
//

// Skill chips removed per request

export default function AboutPage() {
  return (
    <Container>
      <Section title="About" subtitle="Who I am and what I’m learning">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">My Bio</h2>
            <p className="leading-relaxed">
              I am <strong>Chimezie Onyero</strong> from Nigeria. I’m enrolled in the <strong>ALX Cybersecurity</strong> and
              <strong> Professional Foundations</strong> programmes and hold a <strong>B.Eng</strong> from the University of Nigeria, Nsukka.
              I also participated in the ALX Software Engineering Programme, which shaped my approach to problem‑solving and collaboration.
            </p>
            <p className="leading-relaxed">
              I enjoy writing, basketball, volunteering in tech projects, and entrepreneurship. I’m focused on foundational security
              principles, safe development practices, and clear communication. My goal is to help teams improve trust and security.
            </p>
            {/* Skills section removed */}
          </div>
          <div className="md:col-span-1">
            <div className="flex items-center justify-center">
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-[color:var(--border)] shadow-soft bg-[radial-gradient(circle_at_30%_30%,_rgba(0,196,204,0.25),_transparent_60%)] bg-[color:var(--surface)] flex items-center justify-center"
                aria-label="Portrait placeholder"
              >
                <span className="text-3xl font-semibold tracking-wide text-[color:var(--text-muted)]">CO</span>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-[color:var(--text-muted)]">Portrait coming soon</p>
          </div>
        </div>
      </Section>
    </Container>
  )
}
