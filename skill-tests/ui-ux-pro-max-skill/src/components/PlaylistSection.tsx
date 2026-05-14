import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedText } from './AnimatedText'
import { PlaylistCard } from './PlaylistCard'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const playlists = [
  {
    title: 'Sunset House',
    description: 'Warm pads, rolling grooves, and coastal breeze energy as the sky turns ember.',
    stat: 'Curated · 2h 20m',
  },
  {
    title: 'Latin Tech',
    description: 'Percussion-forward heat with modern low-end — built for golden hour to midnight.',
    stat: 'Live blend · 18 tracks',
  },
  {
    title: 'Afro House',
    description: 'Polyrhythms and deep subs that move the sand beneath your feet.',
    stat: 'Residency mix · 1h 45m',
  },
  {
    title: 'Beach Club Anthems',
    description: 'Big moments, luminous leads, and hands-in-the-air releases by the water.',
    stat: 'Peak set · 24 tracks',
  },
  {
    title: 'Late Night Energy',
    description: 'After the sunset: darker hues, tighter drums, and warehouse soul under the stars.',
    stat: 'Afterhours · 3h 05m',
  },
] as const

/** Sección de identidad sonora con tarjetas en rejilla. */
export function PlaylistSection() {
  const rootRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      if (introRef.current && !reduced) {
        gsap.set(introRef.current, { opacity: 0, y: 24 })
        gsap.to(introRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 86%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      const cards = root.querySelectorAll<HTMLElement>('[data-playlist-card]')
      if (!cards.length) return

      if (reduced) {
        gsap.set(cards, { clearProps: 'all' })
        return
      }

      gsap.set(cards, { opacity: 0, y: 48 })
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: cards[0],
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={rootRef}
      id="playlist"
      className="relative overflow-hidden bg-gradient-to-b from-violet via-plum to-night py-24 sm:py-28"
      aria-labelledby="playlist-titulo"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-20%] top-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(232,93,28,0.35), transparent 65%)' }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay bg-grain-noise" aria-hidden />

      <div className="relative mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <AnimatedText
            id="playlist-titulo"
            text="Soundtrack for Sunset & After Dark"
            className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-white"
          />
          <p ref={introRef} lang="en" className="text-base leading-relaxed text-white/75 sm:text-lg">
            This is the sonic signature behind our terrace: sunset warmth, midnight tension, and sunrise relief — all
            mixed for an open-air dancefloor beside the Caribbean.
          </p>
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-ember to-amber px-7 text-sm font-bold uppercase tracking-wide text-night shadow-glow transition hover:brightness-110 focus-visible:outline-offset-4"
          >
            Listen on Spotify
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {playlists.map((p) => (
            <PlaylistCard key={p.title} title={p.title} description={p.description} stat={p.stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
