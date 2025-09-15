import Link from 'next/link'
import type { BlogPostMeta } from '@/types/blog'

export default function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800 shadow-soft h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-1"><Link href={`/blog/${post.slug}`} className="underline-offset-2 hover:underline">{post.title}</Link></h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 flex-1">{post.summary}</p>
      <div className="mt-3 text-xs text-slate-500">{new Date(post.date).toDateString()}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {post.tags?.map((t) => (
          <span key={t} className="px-2 py-1 rounded-full border text-xs">{t}</span>
        ))}
      </div>
    </div>
  )
}

