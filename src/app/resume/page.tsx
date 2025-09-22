import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Cyber Portfolio | Resume' }

const sections = [
  {
    heading: 'Cybersecurity Skills',
    bullets: [
      'Network security fundamentals and vulnerability assessment',
      'Incident response and forensic analysis basics',
      'Security documentation and reporting',
      'Risk assessment and mitigation strategies'
    ]
  },
  {
    heading: 'Learning Achievements',
    bullets: [
      'Completed ALX Cybersecurity and Professional Foundations Program',
      'RFID security research project at University of Nigeria, Nsukka',
      'Active participant in cybersecurity community initiatives',
      'Contributor to peer learning and knowledge sharing'
    ]
  }
]

export default function ResumePage() {
  return (
    <div className="space-y-16 pb-24 pt-24">
      <section className="px-4">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="orbitron text-4xl font-bold text-white sm:text-6xl">RESUME</h1>
          <p className="text-lg text-slate-300">
            Cybersecurity learner with engineering background. Download the PDF for full academic and project details.
          </p>
          <Link
            href="/resume.pdf"
            className="inline-flex items-center justify-center rounded-button bg-[color:var(--brand-primary)] px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-transform duration-300 hover:-translate-y-1"
          >
            Download Resume
          </Link>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.heading} className="glass rounded-2xl border border-[rgba(57,255,20,0.18)] p-6 text-left">
              <h2 className="orbitron text-xl font-semibold text-white">{section.heading}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[rgba(57,255,20,0.18)] bg-black/40 p-10 text-center shadow-[0_0_30px_rgba(57,255,20,0.12)]">
          <h2 className="orbitron text-2xl font-semibold text-white">Availability</h2>
          <p className="mt-4 text-sm text-slate-300">
            Currently focused on completing cybersecurity education and building practical skills through hands-on projects and learning initiatives.
          </p>
        </div>
      </section>
    </div>
  )
}
