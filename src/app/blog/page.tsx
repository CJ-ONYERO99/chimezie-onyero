import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/PostCard'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <Container>
      <Section title="Blog" subtitle="Notes on security and learning">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
    </Container>
  )
}

