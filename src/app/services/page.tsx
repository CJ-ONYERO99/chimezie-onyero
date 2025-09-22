import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Cyber Portfolio | Services' }

const services = [
  {
    title: 'Security Fundamentals Assessment',
    description: 'An introductory evaluation to identify basic security gaps and establish foundational protections for your systems.',
    deliverables: [
      'Basic vulnerability scan report',
      'Essential security checklist with action items',
      'Simple risk assessment summary'
    ]
  },
  {
    title: 'Incident Response Support',
    description: 'Guidance on responding to security incidents with basic triage, documentation, and remediation steps.',
    deliverables: [
      'Incident response workflow templates',
      'Basic forensic analysis guide',
      'Evidence collection checklist'
    ]
  },
  {
    title: 'Security Awareness Training',
    description: 'Introductory security education materials to help teams recognize threats and follow basic security practices.',
    deliverables: [
      'Security awareness presentation decks',
      'Phishing recognition guides',
      'Password and authentication best practices'
    ]
  }
]

const phases = [
  {
    name: '01 Discover & Assess',
    detail: 'I start by understanding your current setup, identifying basic security gaps, and establishing foundational protections.'
  },
  {
    name: '02 Implement & Enable',
    detail: 'I help you put basic security controls in place and provide guidance on essential security practices.'
  },
  {
    name: '03 Review & Grow',
    detail: 'I review what we\'ve implemented together, document lessons learned, and plan your next learning steps.'
  }
]

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-24 pt-24">
      <section className="px-4">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="orbitron text-4xl font-bold text-white sm:text-6xl">SERVICES</h1>
          <p className="text-lg text-slate-300">
            Foundational cybersecurity support for individuals and teams beginning their security journey.
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass flex h-full flex-col gap-6 rounded-2xl border border-[rgba(57,255,20,0.2)] p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_28px_rgba(57,255,20,0.25)]">
              <div>
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[rgba(57,255,20,0.2)] bg-black/40 p-10 shadow-[0_0_35px_rgba(57,255,20,0.12)]">
          <h2 className="orbitron text-2xl font-semibold text-white sm:text-3xl">Engagement Flow</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {phases.map((phase) => (
              <div key={phase.name} className="border border-[rgba(57,255,20,0.18)] bg-black/40 p-6 rounded-2xl">
                <span className="orbitron text-xs uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">{phase.name}</span>
                <p className="mt-3 text-sm text-slate-300">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
