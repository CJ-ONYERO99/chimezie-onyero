# Chimezie Onyero — Cybersecurity Portfolio

A production-ready personal portfolio for cybersecurity professionals, built with modern web technologies.

## 🚀 Key Features

- ** cutting-edge stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Dark theme by default** with persisted toggle and WCAG AA contrast compliance
- **Comprehensive pages**: Home, About, Projects, Services, Blog, Contact, and Resume
- **Content as code**: JSON for projects, MDX for blog posts
- **Secure contact form**: With Zod validation, honeypot protection, and IP rate limiting
- **Enhanced security**: CSP with nonces, Referrer-Policy, Permissions-Policy, and other headers
- **SEO optimized**: Metadata, Open Graph/Twitter cards, sitemap, and JSON-LD
- **Comprehensive testing**: Unit/integration tests with Vitest, E2E tests with Playwright
- **CI/CD ready**: GitHub Actions workflow with Husky for pre-commit hooks

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   ├── resume/
│   └── ...
├── components/          # Reusable UI components
├── content/             # Content files (projects, blog posts)
│   ├── blog/
│   └── projects/
├── lib/                 # Utility functions and libraries
└── styles/              # Global styles and CSS variables
```

## 🛠️ Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Configure your environment variables (see section below)

# 3. Run development server
npm run dev
# Open http://localhost:3000

# 4. Run tests
npm run test          # Unit/integration tests
npm run test:e2e      # End-to-end tests
npm run test:watch    # Watch mode for unit tests
```

## ⚙️ Environment Variables

Create a `.env.local` file with the following variables:

```env
# Contact form settings
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL=your-email@example.com

# Email delivery (choose one)
# SMTP settings
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password

# OR SendGrid settings
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM=your-sendgrid-from-email

# Rate limiting (optional but recommended)
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
```

## 📝 Content Management

### Projects
Add projects as JSON files in `src/content/projects/`:

```json
{
  "slug": "project-name",
  "title": "Project Title",
  "summary": "Brief project description",
  "role": "Your role in the project",
  "tools": ["Tool 1", "Tool 2"],
  "highlights": ["Key achievement 1", "Key achievement 2"],
  "problem": "Problem statement",
  "approach": "Solution approach",
  "results": "Measurable results",
  "links": {
    "github": "https://github.com/username/repo",
    "demo": "https://demo-url.com"
  },
  "cover": "/images/project-cover.jpg",
  "date": "2023-01-01",
  "tags": ["security", "web"]
}
```

### Blog Posts
Create blog posts as MDX files in `src/content/blog/` with frontmatter:

```mdx
---
title: "Blog Post Title"
slug: "blog-post-slug"
date: "2023-01-01"
tags: ["security", "tutorial"]
summary: "Brief summary of the post"
cover: "/images/post-cover.jpg"
---

Your blog content here...
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Project Settings
3. Deploy!

### Other Platforms
```bash
# Build the application
npm run build

# Start the application
npm start
```

## 🔒 Security Notes

- **Content Security Policy**: Implemented with nonces; avoid inline scripts beyond the nonce injected in `layout.tsx`
- **Rate Limiting**: Uses Upstash Redis if configured; falls back to in-memory (not persistent)
- **Form Protection**: Contact form includes Zod validation, honeypot fields, and IP rate limiting

## 🎨 Customization

1. Replace `public/resume.pdf` with your actual resume
2. Update social links in the contact page and footer
3. Customize color scheme in `src/app/globals.css`
4. Modify fonts in `src/app/layout.tsx`

## 🧪 Testing

```bash
# Run unit and integration tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run end-to-end tests
npm run test:e2e

# Type checking
npm run typecheck

# Linting
npm run lint

# Code formatting
npm run format
```

## 🔍 Performance Analysis

```bash
# Bundle analysis
npm run analyze

# Performance testing
npm run perf
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)