import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SocialBar from '@/components/SocialBar'

export const metadata: Metadata = { title: 'Cyber Portfolio | Home' }

const skills = [
  { icon: 'ri-reactjs-line', label: 'React' },
  { icon: 'ri-nodejs-line', label: 'Node.js' },
  { icon: 'ri-javascript-line', label: 'JavaScript' },
  { icon: 'ri-database-2-line', label: 'CSS3' },
  { icon: 'ri-terminal-box-line', label: 'Python' },
  { icon: 'ri-shield-keyhole-line', label: 'Wireshark & Nmap' }
]

const achievements: { value: string; label: string }[] = []

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 pt-32 text-center">
        <div className="particle" style={{ top: '10%', left: '12%', animationDelay: '0s' }} aria-hidden />
        <div className="particle" style={{ top: '25%', right: '15%', animationDelay: '1s' }} aria-hidden />
        <div className="particle" style={{ bottom: '20%', left: '18%', animationDelay: '2s' }} aria-hidden />
        <div className="particle" style={{ bottom: '18%', right: '8%', animationDelay: '3s' }} aria-hidden />
        <div className="particle" style={{ top: '52%', left: '6%', animationDelay: '4s' }} aria-hidden />

        <div className="relative mb-10 inline-block">
          <div className="relative mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full sm:h-56 sm:w-56">
            <Image
              src="/images/cyber/CO-LG.png"
              alt="Chimezie Onyero logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 12rem, 14rem"
            />
            <span className="absolute inset-0 rounded-full border-4 border-[color:var(--brand-primary)] glow-green-strong animate-pulse" aria-hidden />
          </div>
        </div>

        <h1 className="orbitron text-4xl font-black text-white sm:text-6xl lg:text-7xl">CHIMEZIE ONYERO</h1>
        <p className="typing-animation mt-3 text-xl text-[color:var(--brand-primary)] sm:text-2xl">Aspiring Cybersecurity Engineer</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Crafting next-generation digital experiences with cutting-edge technology and innovative design solutions.
        </p>

        <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:flex-nowrap sm:justify-center sm:gap-40 md:gap-48 xl:gap-56">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-button bg-[color:var(--brand-primary)] px-8 py-4 font-semibold text-black shadow-[0_0_35px_rgba(57,255,20,0.35)] transition-transform duration-300 hover:-translate-y-1 sm:min-w-[220px]"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-button border-2 border-[color:var(--brand-primary)] px-8 py-4 font-semibold text-[color:var(--brand-primary)] transition-all duration-300 hover:bg-[color:var(--brand-primary)] hover:text-black sm:min-w-[220px]"
          >
            Start a Project
          </Link>
        </div>

        <div className="scroll-indicator absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block" aria-hidden>
          <div className="flex h-12 w-6 items-start justify-center rounded-full border-2 border-[color:var(--brand-primary)]">
            <span className="mt-2 h-3 w-1 rounded-full bg-[color:var(--brand-primary)] animate-pulse" />
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="gradient-line" />
          <div className="text-center">
            <h2 className="orbitron text-3xl font-bold text-white sm:text-5xl">
              ABOUT <span className="text-[color:var(--brand-primary)]">ME</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3 space-y-6 text-left text-slate-300">
              <p>
                Chimezie Onyero is a cybersecurity learner at the ALX Cybersecurity and Professional Foundations Program, with an Engineering background from the University of Nigeria, Nsukka. He is passionate about building secure digital systems and aspires to grow into a leading expert in cybersecurity and technology-driven entrepreneurship over the next five years.
              </p>
              <p>
                Chimezie&apos;s technical skills span network security, risk assessment, vulnerability management, and technical documentation. His final year research project on RFID technology and implementation showcased his ability to apply engineering knowledge to solve real-world security challenges. Beyond academics, he is actively involved in volunteering for tech initiatives, reflecting his commitment to innovation, collaboration, and community impact.
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
                        <div
                          className="h-2 rounded-full bg-[color:var(--brand-primary)]"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-5xl">
          <div className="glass rounded-2xl border border-[rgba(57,255,20,0.2)] p-6 shadow-[0_0_35px_rgba(57,255,20,0.12)]">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-[rgba(57,255,20,0.25)] bg-black/40 flex items-center justify-center">
              <span className="text-sm uppercase tracking-[0.3em] text-[color:var(--text-muted)]">Video walkthrough coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <h2 className="orbitron text-3xl font-bold text-white sm:text-5xl">
              TECH <span className="text-[color:var(--brand-primary)]">STACK</span>
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Mastering the tools that power immersive digital experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {skills.map((skill) => (
              <div key={skill.label} className="skill-card glass flex flex-col items-center gap-4 rounded-2xl px-6 py-8 text-center transition-transform hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(57,255,20,0.3)]">
                <div className="text-3xl text-[color:var(--brand-primary)]">
                  <i className={skill.icon}></i>
                </div>
                <span className="text-sm font-semibold text-white">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[rgba(57,255,20,0.2)] bg-black/40 p-10 text-center shadow-[0_0_45px_rgba(57,255,20,0.15)]">
          <h2 className="orbitron text-3xl font-bold text-white sm:text-4xl">Ready to build something extraordinary?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            Explore the full portfolio, discover interactive prototypes, and see how motion, storytelling, and engineering come together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-button bg-[color:var(--brand-primary)] px-8 py-4 font-semibold text-black shadow-[0_0_35px_rgba(57,255,20,0.35)] transition-transform duration-300 hover:-translate-y-1 sm:min-w-[220px]"
            >
              Browse Portfolio
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-button border-2 border-[color:var(--brand-primary)] px-8 py-4 font-semibold text-[color:var(--brand-primary)] transition-all duration-300 hover:bg-[color:var(--brand-primary)] hover:text-black sm:min-w-[220px]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <SocialBar />
    </div>
  )
}



































