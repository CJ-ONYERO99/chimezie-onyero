import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Cyber Portfolio | About' }

const highlights = [
  {
    title: 'Network Defense Practice',
    description: 'Running SOC-style investigations, building playbooks, and hardening configurations to reduce attack surface.'
  },
  {
    title: 'Vulnerability Management',
    description: 'Documenting risks, prioritising remediation, and tracking fixes across cloud and on-prem environments.'
  },
  {
    title: 'Technical Storytelling',
    description: 'Turning complex findings into reports, workshops, and documentation that help teams act fast.'
  }
]

const timeline = [
  {
    period: '2024 — Present',
    role: 'Cybersecurity Learner, ALX Cybersecurity & Professional Foundations',
    summary:
      'Immersed in Blue Team fundamentals, risk analysis, and professional skills while contributing to cohort projects and peer learning.'
  },
  {
    period: '2022 — 2024',
    role: 'Volunteer & Technical Writer',
    summary:
      'Produced security newsletters, facilitated community meetups, and created how-to guides that demystify threat trends for beginners.'
  },
  {
    period: '2019 — 2023',
    role: 'Engineering Student, University of Nigeria Nsukka',
    summary:
      'Completed an RFID security capstone, validating practical defences and translating engineering theory into real-world protections.'
  }
]

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="px-4 pt-28">
        <div className="mx-auto max-w-5xl space-y-8 text-center">
          <h1 className="orbitron text-4xl font-bold text-white sm:text-6xl">
            ABOUT <span className="text-[color:var(--brand-primary)]">ME</span>
          </h1>
          <div className="mx-auto mt-6 flex h-48 w-48 items-center justify-center rounded-full border border-[rgba(57,255,20,0.25)] bg-black/40 shadow-[0_0_30px_rgba(57,255,20,0.12)] overflow-hidden">
            <img 
              src="/images/PF1.png" 
              alt="Chimezie Onyero" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3 space-y-6 text-left text-slate-300">
            <p>
              Chimezie Onyero is a cybersecurity learner at the ALX Cybersecurity and Professional Foundations Program, with an engineering background from the University of Nigeria, Nsukka. He is passionate about building secure digital systems and is charting a five-year roadmap toward leading work across cybersecurity and technology-driven entrepreneurship.
            </p>
            <p>
              Chimezie&apos;s technical skills span network security, risk assessment, vulnerability management, and technical documentation. His RFID research project demonstrated how methodical engineering can address real-world security gaps, while volunteer experience keeps him grounded in collaboration, innovation, and community impact.
            </p>
            <p>
              My current focus is on security operations fundamentals&mdash;triaging alerts, enriching signals with OSINT, and capturing lessons learned for the team.
            </p>
            <p>
              I collaborate with peers to run tabletop exercises, automate evidence gathering, and mentor new learners stepping into cybersecurity.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="glass rounded-2xl p-8">
              <h3 className="orbitron text-xl font-bold text-[color:var(--brand-primary)]">CORE EXPERTISE</h3>
              <div className="mt-6 space-y-5 text-slate-200">
                {[['Network Security', '82%'], ['Risk Assessment', '78%'], ['Threat Hunting', '75%'], ['Technical Writing', '88%']].map(([label, value]) => (
                  <div key={label}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{label}</span>
                      <span className="text-[color:var(--brand-primary)]">{value}</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-[color:var(--brand-primary)]" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
          <div className="space-y-6 text-slate-200">
            <h2 className="orbitron text-2xl font-semibold text-white sm:text-3xl">Security Mindset In Motion</h2>
            <p>
              Every engagement starts with discovery, understanding business context, critical assets, and the realities of the threat
              landscape. From there, I combine research, lab work, and collaborative workshops to prototype defences quickly.
            </p>
            <p>
              I enjoy translating dense findings into next-step actions, whether that means writing a plain-language report for leadership
              or pairing with engineers to tune detections and patch vulnerabilities.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="glass space-y-3 rounded-2xl px-5 py-6 text-left">
                  <span className="orbitron text-sm uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">Focus</span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 text-sm text-slate-300 space-y-4">
            <p>
              &ldquo;Security is everyone&apos;s job, but it needs a translator.&rdquo; I love being that bridge—contextualising alerts, guiding decisions,
              and helping teams level up together.
            </p>
            <p>
              Clear documentation, actionable playbooks, and open communication keep collaboration strong whether I&apos;m working with engineers,
              analysts, or leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-5xl space-y-10">
          <h2 className="orbitron text-2xl font-semibold text-white sm:text-3xl">Journey</h2>
          <div className="space-y-6">
            {timeline.map((entry) => (
              <div key={entry.period} className="card flex flex-col gap-3 border border-[rgba(57,255,20,0.18)] px-6 py-5 text-left">
                <span className="orbitron text-xs uppercase tracking-[0.35em] text-[color:var(--brand-primary)]">{entry.period}</span>
                <h3 className="text-lg font-semibold text-white">{entry.role}</h3>
                <p className="text-sm text-slate-300">{entry.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[rgba(57,255,20,0.25)] bg-black/40 p-10 text-center shadow-[0_0_40px_rgba(57,255,20,0.15)]">
          <h2 className="orbitron text-3xl font-bold text-white">Let&apos;s build resilient, human-centred security</h2>
          <p className="mt-4 text-lg text-slate-300">
            From discovery to documentation, I partner with teams to secure ideas before they scale. Ready to collaborate on your next
            initiative?
          </p>
        </div>
      </section>
    </div>
  )
}
