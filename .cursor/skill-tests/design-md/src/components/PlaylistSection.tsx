import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedText } from './AnimatedText'
import { PlaylistCard } from './PlaylistCard'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const playlists = [
  {
    title: 'Sunset House',
    description:
      'Warm pads, rolling bass, and coastal grooves for the moment the sky turns ember.',
    meta: '~3h curated · 42 tracks',
    accent: 'from-sunset-amber/25 to-night-900/95',
  },
  {
    title: 'Latin Tech',
    description:
      'Percussion-forward drive with Caribbean heat — built for peak-time energy on the sand.',
    meta: 'Live blend · 38 tracks',
    accent: 'from-sunset-deep/30 to-night-800/95',
  },
  {
    title: 'Afro House',
    description:
      'Polyrhythms and deep soul — hypnotic patterns that carry the crowd from dusk to midnight.',
    meta: 'Resident mix · 51 tracks',
    accent: 'from-sunset-burnt/25 to-night-950/95',
  },
  {
    title: 'Beach Club Anthems',
    description:
      'Big vocal moments and festival memories — the soundtrack guests hum on the flight home.',
    meta: 'Crowd classics · 29 tracks',
    accent: 'from-night-800/80 via-sunset-deep/20 to-night-950/95',
  },
  {
    title: 'Late Night Energy',
    description:
      'Dark velvet sonics and razor highs — when the tide is high and the BPM lifts with it.',
    meta: 'After 1am · 47 tracks',
    accent: 'from-night-900/90 to-sunset-deep/35',
  },
] as const

/**
 * Identidad sonora del club: rejilla de playlists con animación escalonada.
 */
export function PlaylistSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid || reduced) return

    const cards = grid.querySelectorAll<HTMLElement>('[data-playlist-card]')
    gsap.set(cards, { y: 56, opacity: 0 })

    const tween = gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced])

  return (
    <section
      id="sound"
      className="relative scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-night-950 via-night-900 to-night-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-sunset-deep/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sunset-amber/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedText
          as="h2"
          className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white"
        >
          Soundtrack for Sunset & After Dark
        </AnimatedText>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Our residents and guests live inside the same sonic arc: amber evenings,
          violet skies, and bass you feel through the boardwalk.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110"
            aria-label="Listen on Spotify (opens mockup)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-.641-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.561 8.52-1.141 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Listen on Spotify
          </a>
          <span className="text-xs uppercase tracking-widest text-muted">
            Curated weekly · mockup link
          </span>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {playlists.map((p) => (
            <div key={p.title} data-playlist-card>
              <PlaylistCard
                title={p.title}
                description={p.description}
                meta={p.meta}
                accent={p.accent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
