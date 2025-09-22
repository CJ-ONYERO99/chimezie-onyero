import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Cyber Portfolio | Contact' }

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-24 pt-24">
      <section className="px-4">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="orbitron text-4xl font-bold text-white sm:text-6xl">CONNECT</h1>
          <p className="text-lg text-slate-300">
            Let&apos;s collaborate on strengthening your security posture, investigating threats, or documenting security processes. I reply within one business day.
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="space-y-6 text-slate-200">
            <h2 className="orbitron text-2xl font-semibold text-white">Let&apos;s strengthen your security</h2>
            <p className="text-sm text-slate-300">
              Share your security challenges—incident response support, vulnerability assessments, security documentation, or awareness training. I&apos;m here to help teams build stronger defenses and respond effectively to threats.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <span className="text-[color:var(--brand-primary)]">Email:</span> theyeroverse@gmail.com
              </li>
              <li>
                <span className="text-[color:var(--brand-primary)]">X (Twitter):</span>{' '}
                <a className="text-[color:var(--brand-secondary)] hover:text-[color:var(--brand-primary)]" href="https://x.com/CartelJozzy" target="_blank" rel="noopener noreferrer">
                  @CartelJozzy
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/CJ-ONYERO99"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full text-[color:var(--brand-primary)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(57,255,20,0.25)]"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/chimezie-onyero-1605121b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full text-[color:var(--brand-primary)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(57,255,20,0.25)]"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/CartelJozzy"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full text-[color:var(--brand-primary)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(57,255,20,0.25)]"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733-16z"></path>
                  <path d="M4 20l6.768-6.768m2.46-2.46L20 4"></path>
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl border border-[rgba(57,255,20,0.2)] p-8 shadow-[0_0_35px_rgba(57,255,20,0.12)]">
            <h2 className="orbitron text-xl font-semibold text-[color:var(--brand-primary)]">Send a message</h2>
            <form action="https://formspree.io/f/mgvyrvjj" method="POST" className="mt-6 space-y-4 text-sm text-slate-200">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[rgba(57,255,20,0.18)] bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Email</span>
                <input
                  type="email"
                  name="_replyto"
                  required
                  className="w-full rounded-xl border border-[rgba(57,255,20,0.18)] bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[rgba(57,255,20,0.18)] bg-black/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-button bg-[color:var(--brand-primary)] px-6 py-3 font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
