import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

type PortfolioProject = {
  title: string
  objective: string
  tools: string
  process: string[]
  findings: string[]
  reflection: string
  placeholderCaption: string
}

const PROJECTS: PortfolioProject[] = [
  {
    title: 'Investigating a Suspicious IP Address (Defensive Path)',
    objective: 'Analyze a suspicious login attempt by investigating the IP address 102.165.36.250 to determine its origin and potential threat.',
    tools: 'ipinfo.io, SecurityTrails',
    process: [
      'Collected the suspicious IP from a simulated login alert.',
      'Queried the IP address on ipinfo for geolocation, ISP, and hostname details.',
      'Entered the IP into SecurityTrails for domain associations and hosting information.',
      'Compared the findings with normal user activity.'
    ],
    findings: [
      'IP registered in [insert country] and associated with [organization/hosting provider].',
      'Likely a server/data center, suggesting possible automated or malicious use.'
    ],
    reflection: 'Learned initial SOC triage and how to distinguish normal user traffic from suspicious hosts.',
    placeholderCaption: 'Replace with your screenshot of ipinfo/SecurityTrails.'
  },
  {
    title: 'Finding a Hidden Flag in a Website (Offensive Path)',
    objective: 'Identify hidden information in a website’s source code.',
    tools: 'Web browser (Chrome/Brave/Safari)',
    process: [
      'Viewed Page Source.',
      'Used Ctrl+F (Cmd+F) to search for “flag”.',
      'Reviewed HTML comments and hidden tags.'
    ],
    findings: ['flag{h1dd3n_1n_pl41n_s1ght}'],
    reflection: 'Shows how recon starts with source-code review and reinforces secure coding and code reviews.',
    placeholderCaption: 'Replace with your screenshot of source code + flag.'
  },
  {
    title: 'Domain Intelligence Gathering (OSINT Path)',
    objective: 'Perform DNS enumeration on ibm.com to understand its infrastructure.',
    tools: 'MXToolbox SuperTool',
    process: [
      'Entered ibm.com into MXToolbox SuperTool.',
      'Ran a DNS Check to find IP addresses.',
      'Retrieved MX Records for IBM’s mail servers.',
      'Noted additional DNS records for insights.'
    ],
    findings: [
      'Multiple IPs indicate redundancy/load balancing.',
      'MX Records show secure, distributed email routing for a large enterprise.'
    ],
    reflection: 'Intro to digital footprinting via open-source DNS data.',
    placeholderCaption: 'Replace with your screenshot from MXToolbox.'
  }
]

export default function PortfolioPage() {
  return (
    <Container>
      <Section title="My Portfolio" subtitle="Selected cybersecurity‑oriented samples and case studies">
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <article key={project.title} className="card p-6 md:p-8 space-y-6">
              <header className="space-y-3">
                <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">{project.title}</h3>
                <div className="space-y-1 text-sm text-[color:var(--text-muted)]">
                  <p><span className="font-semibold text-[color:var(--text-primary)]">Objective:</span> {project.objective}</p>
                  <p><span className="font-semibold text-[color:var(--text-primary)]">Tools:</span> {project.tools}</p>
                </div>
              </header>

              <figure className="overflow-hidden rounded-xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface)]">
                <Image
                  src={`/images/placeholders/portfolio-${index + 1}.png`}
                  alt="Screenshot placeholder"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-center text-sm text-[color:var(--text-muted)]">{project.placeholderCaption}</figcaption>
              </figure>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">Process</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-[color:var(--text-muted)]">
                    {project.process.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">Findings</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-[color:var(--text-muted)]">
                    {project.findings.map((finding) => (
                      <li key={finding}>{finding}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[color:var(--text-primary)]">Reflection</h4>
                  <p className="text-[color:var(--text-muted)]">{project.reflection}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </Container>
  )
}
