import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import VideoPlayer from '@/components/VideoPlayer'
import home from '../content/home.json'
import SocialBar from '@/components/SocialBar'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Watch my pitch' }

export default function HomePage() {
  return (
    <Container>
      <h1 className="sr-only">Watch my pitch</h1>

      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-10 rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(217,54,62,0.12),_transparent_55%)]">
        <div className="space-y-14">
          <div className="flex items-center gap-4">
            <span aria-hidden className="inline-block h-12 w-1.5 rounded bg-[color:var(--accent-crimson)]" />
            <p className="text-5xl sm:text-6xl font-bold tracking-tight text-left">Chimezie Onyero</p>
          </div>

          <div className="h-6" aria-hidden />

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">My Bio</h2>
          <div className="h-4" aria-hidden />

          <p className="text-lg text-[color:var(--text-muted)] text-center max-w-2xl mx-auto leading-relaxed">
            {home.bio}
          </p>

          <div className="h-8" aria-hidden />

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">Watch my pitch</h2>

          <div className="h-6" aria-hidden />

          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              kind={(home.video?.kind as 'file' | 'youtube' | 'vimeo') || 'file'}
              src={home.video?.src || undefined}
              videoId={home.video?.videoId || undefined}
              poster={home.video?.poster || '/og-image.svg'}
              title="Pitch video"
            />
          </div>

          <div className="h-8" aria-hidden />

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">View My Portfolio</h2>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/portfolio">My Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>

      <SocialBar />
    </Container>
  )
}
