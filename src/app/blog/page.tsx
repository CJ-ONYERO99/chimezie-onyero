import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Cyber Portfolio | Blog' }

const posts = [
  {
    title: 'CISA: Ten Steps to Mitigate Ransomware Risk',
    excerpt: 'Highlights from CISA’s latest ransomware guidance and a checklist I use to stress-test backup and response plans.',
    tag: 'Blue Team',
    date: 'Aug 12, 2025',
    href: 'https://www.cisa.gov/news-events/news/ten-steps-mitigate-ransomware'
  },
  {
    title: 'Microsoft Incident Response Playbook – Field Notes',
    excerpt: 'Lessons I pulled from Microsoft’s incident response playbook and how to adapt them for lean security teams.',
    tag: 'Incident Response',
    date: 'Jul 29, 2025',
    href: 'https://learn.microsoft.com/en-us/security/compass/incident-response-playbook'
  },
  {
    title: 'Mandiant on Detecting Lateral Movement',
    excerpt: 'Practical detection ideas from Mandiant’s research on lateral movement with tips for tuning SIEM hunts.',
    tag: 'Threat Hunting',
    date: 'Jun 18, 2025',
    href: 'https://www.mandiant.com/resources/blog/detecting-lateral-movement'
  }
]

export default function BlogPage() {
  return (
    <div className="space-y-16 pb-24 pt-24">
      <section className="px-4">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="orbitron text-4xl font-bold text-white sm:text-6xl">CYBERSECURITY NOTES</h1>
          <p className="text-lg text-slate-300">
            Curated write-ups and research I lean on to sharpen detection engineering, incident response, and cyber resilience.
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="glass flex h-full flex-col justify-between rounded-2xl border border-[rgba(57,255,20,0.2)] p-6 transition-transform duration-300 hover:-translate-y-2 hover:glow-green">
              <div className="space-y-4">
                <span className="orbitron text-xs uppercase tracking-[0.35em] text-[color:var(--brand-primary)]">{post.tag}</span>
                <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                <p className="text-sm text-slate-300">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                <time>{post.date}</time>
                <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--brand-primary)] hover:text-[color:var(--brand-secondary)]"
                >
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
