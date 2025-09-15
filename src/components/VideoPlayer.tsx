/* eslint-disable jsx-a11y/media-has-caption */

type VideoPlayerProps = {
  kind?: 'file' | 'youtube' | 'vimeo'
  src?: string
  videoId?: string
  title?: string
  poster?: string
}

export default function VideoPlayer({ kind = 'file', src, videoId, title = 'Video', poster }: VideoPlayerProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div className="aspect-[16/9] w-full bg-black/40">
        {kind === 'youtube' && videoId ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : kind === 'vimeo' && videoId ? (
          <iframe
            className="h-full w-full"
            src={`https://player.vimeo.com/video/${videoId}`}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : src ? (
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            poster={poster}
            aria-label={title}
          >
            <source src={src} />
            <track
              kind="captions"
              src="/captions/pitch.vtt"
              srcLang="en"
              label="English"
              default
            />
          </video>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-[color:var(--text-muted)]">Video will appear here</span>
          </div>
        )}
      </div>
    </div>
  )
}
