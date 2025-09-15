# ADR 0001 — Architecture & Stack

## Context
The portfolio requires fast iteration, strong accessibility, SEO, and a secure contact backend with great DX.

## Decision
- Use Next.js 14 App Router with TypeScript
- Tailwind CSS for rapid, consistent styling
- Content as code: JSON for projects, MDX for blog
- Email via SendGrid or SMTP (Nodemailer fallback)
- Security via strict headers and CSP nonces in middleware
- Testing with Vitest (unit/integration) + Playwright (+ axe) for e2e and a11y

## Consequences
- Simple content updates without touching core code
- Strong defaults for perf and a11y
- Slight complexity for MDX rendering and middleware headers, but manageable

