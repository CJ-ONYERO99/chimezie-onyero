import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getPostHtmlBySlug, getAllPosts } from '@/lib/mdx'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const post = await getPostHtmlBySlug(slug)
    return (
      <Container>
        <Section title={post.title} subtitle={post.summary}>
          <article className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Section>
      </Container>
    )
  } catch {
    return notFound()
  }
}
