import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { BlogPostMeta } from '@/types/blog'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

const ROOT = process.cwd()
const BLOG_DIR = path.join(ROOT, 'src', 'content', 'blog')
let cache: { list: BlogPostMeta[]; mtimeMs: number } | null = null

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const stat = await fs.stat(BLOG_DIR)
  if (cache && cache.mtimeMs === stat.mtimeMs) return cache.list
  const files = await fs.readdir(BLOG_DIR)
  const mdx = files.filter((f) => f.endsWith('.mdx'))
  const list: BlogPostMeta[] = []
  for (const f of mdx) {
    const raw = await fs.readFile(path.join(BLOG_DIR, f), 'utf8')
    const { data } = matter(raw)
    list.push({
      title: String(data.title || ''),
      slug: String(data.slug || f.replace(/\.mdx$/, '')),
      date: String(data.date || ''),
      tags: (data.tags as string[]) || [],
      summary: String(data.summary || ''),
      cover: String(data.cover || '')
    })
  }
  list.sort((a, b) => (a.date && b.date ? a.date.localeCompare(b.date) * -1 : 0))
  cache = { list, mtimeMs: stat.mtimeMs }
  return list
}

export async function getPostBySlug(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(file, 'utf8')
  const { data, content } = matter(raw)
  const meta: BlogPostMeta = {
    title: String(data.title || ''),
    slug: String(data.slug || slug),
    date: String(data.date || ''),
    tags: (data.tags as string[]) || [],
    summary: String(data.summary || ''),
    cover: String(data.cover || '')
  }
  const fileHtml = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content)
  const html = String(fileHtml)
  return { ...meta, html }
}

export { getPostBySlug as getPostHtmlBySlug }
