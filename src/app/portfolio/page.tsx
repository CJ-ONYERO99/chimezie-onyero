import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Cyber Portfolio | Projects' }

const projects = [
  {
    title: 'Suspicious Login Investigation (SOC Lab)',
    description:
      'Triaged a simulated alert by enriching IP 102.165.36.250 with OSINT sources, correlating activity, and delivering a response plan that balanced speed with evidence.',
    cta: { href: '/contact', label: 'Request Case Notes' }
  },
  {
    title: 'Hidden Flag Recon Exercise',
    description:
      'Performed client-side reconnaissance to uncover embedded secrets, documenting secure coding recommendations for the delivery team.',
    cta: { href: '/contact', label: 'Discuss Findings' }
  },
  {
    title: 'Domain Intelligence Playbook',
    description:
      'Mapped the public footprint of ibm.com using DNS enumeration and MX analysis, surfacing resilience insights and communication patterns for briefing stakeholders.',
    disabled: true
  }
]

const gallery = [
  {
    title: 'Incident Report Layout',
    description: 'Template used to capture investigation scope, artefacts, risk ratings, and next actions for SOC stakeholders.',
    image: '/images/cyber/sky.jpg'
  },
  {
    title: 'RFID Security Research',
    description: 'Poster summarising my undergraduate RFID project, highlighting threat models and mitigation strategies.',
    image: '/images/cyber/chimezie-logo.svg'
  }
]

export default function PortfolioPage() {
  return (
    <div className="space-y-20 pb-24 pt-24">
      <section className="px-4">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h1 className="orbitron text-4xl font-bold text-white sm:text-6xl">
            PROJECT <span className="text-[color:var(--brand-primary)]">DOSSIER</span>
          </h1>
          <p className="text-lg text-slate-300">
            A growing collection of cybersecurity investigations, research notes, and tooling experiments that blend engineering rigour with
            practical defence.
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="glass group flex h-full flex-col justify-between rounded-2xl border border-[rgba(57,255,20,0.2)] p-6 transition-transform duration-300 hover:-translate-y-2 hover:glow-green">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>
              <div className="pt-6">
                {project.disabled ? (
                  <span className="inline-flex items-center justify-center rounded-button border border-[color:var(--brand-primary)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)] opacity-60">
                    Coming Soon
                  </span>
                ) : (
                  <Link
                    href={project.cta?.href ?? '#'}
                    className="inline-flex items-center justify-center rounded-button bg-[color:var(--brand-primary)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-transform duration-300 hover:-translate-y-1"
                  >
                    {project.cta?.label ?? 'Explore'}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl space-y-12">
          {gallery.map((item) => (
            <div key={item.title} className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="relative h-72 overflow-hidden rounded-2xl border border-[rgba(57,255,20,0.2)] bg-black/50 shadow-[0_0_40px_rgba(57,255,20,0.12)] sm:h-96">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="orbitron text-2xl font-semibold text-white">{item.title}</h2>
                <p className="text-sm text-slate-300">{item.description}</p>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">Research Archive</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

