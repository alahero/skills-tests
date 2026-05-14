import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AnimatedText from './AnimatedText.tsx'
import PlaylistCard from './PlaylistCard.tsx'

const playlists = [
  {
    title: 'Sunset House',
    description: 'Warm grooves, airy pads, and coastal low-end for the hour the sky turns ember.',
    meta: '~ 2h 10m · 28 tracks',
  },
  {
    title: 'Latin Tech',
    description: 'Percussion-forward drive with tropical tension—built for packed sand and laser heat.',
    meta: '~ 1h 45m · 22 tracks',
  },
  {
    title: 'Afro House',
    description: 'Rolling rhythms and soulful vocals that keep hips moving long after the sun drops.',
    meta: '~ 2h 35m · 31 tracks',
  },
  {
    title: 'Beach Club Anthems',
    description: 'Big moments, singalong hooks, and festival energy without losing the shoreline soul.',
    meta: '~ 3h 05m · 36 tracks',
  },
  {
    title: 'Late Night Energy',
    description: 'Darker palettes, hypnotic builds, and peak-time pressure for when the moon owns the sky.',
    meta: '~ 2h 20m · 26 tracks',
  },
] as const

export default function PlaylistSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const intro = introRef.current
    const cardsRoot = cardsRef.current
    if (!section || !intro || !cardsRoot) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cardEls = cardsRoot.querySelectorAll<HTMLElement>('.playlist-card')

    if (reduced) {
      gsap.set(intro, { opacity: 1, y: 0 })
      gsap.set(cardEls, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(intro, {
        opacity: 0,
        y: 30,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: intro,
          start: 'top 86%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from(cardEls, {
        opacity: 0,
        y: 44,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRoot,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="playlist"
      className="relative scroll-mt-24 overflow-hidden bg-night py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,159,28,0.16),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatedText
            text="Soundtrack for Sunset & After Dark"
            className="font-display text-[clamp(2rem,4vw,3.1rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
          />
          <p
            ref={introRef}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Our residents shape a sonic arc from champagne-light house into deep, magnetic club
            pressure. These are the lanes you will hear on the sand—curated, loud when it should be,
            and always ocean-aware.
          </p>
          <a
            href="https://open.spotify.com/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.18em] text-night transition hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            target="_blank"
            rel="noreferrer"
          >
            Listen on Spotify
          </a>
        </div>

        <div ref={cardsRef} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {playlists.map((item) => (
            <PlaylistCard
              key={item.title}
              className="playlist-card"
              title={item.title}
              description={item.description}
              meta={item.meta}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
