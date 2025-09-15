 # Chimezie Onyero — Cybersecurity Portfolio (Next.js 15, React 19, Tailwind v4)

 Production‑ready personal portfolio for cybersecurity. Built on Next.js 15 (App Router + RSC), React 19, TypeScript 5.9, and Tailwind CSS v4. Dark theme by default, high contrast, strong accessibility, and a secure contact API.

 ## Highlights
 - Next.js 15, React 19, TS 5.9, Tailwind v4
 - Dark theme default; persisted toggle; WCAG AA contrast
 - Pages: Home, About, Projects (+ details), Services, Blog, Contact, Resume
 - Content as code: JSON projects, MDX posts
 - Contact API: Zod validation, honeypot, IP rate limit, SendGrid/SMTP
 - Security headers: CSP with nonces, Referrer-Policy, Permissions-Policy, X-CTO, X-Frame-Options
 - SEO: Metadata, OG/Twitter cards, sitemap, robots, JSON‑LD
 - Tests: Vitest (unit/integration), Playwright 1.55 (e2e) + axe
 - CI: GitHub Actions (Node 20), Husky + lint-staged

 ## Quickstart
 ```bash
 # 1) Install deps
 npm install

 # 2) Env
 cp .env.example .env.local
 # Fill CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL. Add SMTP or SENDGRID for real email.

 # 3) Dev
 npm run dev
 # http://localhost:3000

 # 4) Tests
 npm run test      # unit/integration (Vitest)
 npm run test:e2e  # e2e (Playwright); first: npx playwright install
 ```

 ## Environment
 ```
 CONTACT_TO_EMAIL=
 CONTACT_FROM_EMAIL=
 SMTP_HOST=
 SMTP_PORT=587
 SMTP_USER=
 SMTP_PASS=
 SENDGRID_API_KEY=
 SENDGRID_FROM=
 UPSTASH_REDIS_REST_URL=
 UPSTASH_REDIS_REST_TOKEN=
 ```

 ## Content Model
 - Projects: `src/content/projects/*.json`
   - Fields: slug, title, summary, role, tools[], highlights[], problem, approach, results, links{github,demo}, cover, date, tags[]
 - Blog: `src/content/blog/*.mdx` with frontmatter (title, slug, date, tags, summary, cover)

 ## Deployment (Vercel)
 - Import repo → set env vars in Project Settings → Environment Variables
 - Build: `npm run build` | Start: `npm start`
 - `vercel.json` optional; CSP comes from middleware

 ## Notes
 - CSP nonces: avoid inline scripts/styles beyond the nonce injected in `layout.tsx`.
 - Rate limit: Upstash Redis if configured; fallback to in-memory (not persistent).
 - Replace `public/resume.pdf` and social links in footer.

