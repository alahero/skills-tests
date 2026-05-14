import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SpotifyLogo } from '@phosphor-icons/react'
import { AnimatedText } from './AnimatedText'
import { PlaylistCard, type PlaylistItem } from './PlaylistCard'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const items: PlaylistItem[] = [
  {
    title: 'Sunset House',
    description:
      'Warm pads, rolling bass, and melodic peaks timed for golden hour on the sand.',
    stat: 'Curated · 2h 14m',
  },
  {
    title: 'Latin Tech',
    description:
      'Percussion-forward grooves with modern tension—built for heat, hips, and headlights.',
    stat: 'Live blends · 38 tracks',
  },
  {
    title: 'Afro House',
    description:
      'Deep polyrhythms and sky-wide chords that carry the crowd from dusk into midnight.',
    stat: 'Residency set · 94 min',
  },
  {
    title: 'Beach Club Anthems',
    description:
      'Big moments without cheap drops: festival-scale energy, boutique sound design.',
    stat: 'Peak-time · 52 tracks',
  },
  {
    title: 'Late Night Energy',
    description:
      'After the sunset fades—driving kicks, neon haze, and the open-air bass you feel in your chest.',
    stat: 'Closing hours · 1h 47m',
  },
]

/**
 * Sección de identidad sonora con carrusel horizontal y entradas escalonadas.
 */
export function PlaylistSection() {
  const reduced = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (reduced) return
    const section = sectionRef.current
    const intro = introRef.current
    const cardsRoot = cardsRef.current
    const cta = ctaRef.current
    if (!section || !intro || !cardsRoot || !cta) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        intro,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: intro,
            start: 'top 86%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      const cardEls = gsap.utils.toArray<HTMLElement>(
        cardsRoot.querySelectorAll('[data-playlist-card]'),
      )

      gsap.fromTo(
        cardEls,
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRoot,
            start: 'top 84%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      gsap.fromTo(
        cta,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 92%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      id="playlist"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#120817] py-24 sm:py-28"
      aria-labelledby="playlist-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(900px 520px at 70% 0%, rgba(232,93,28,0.28), transparent 55%), radial-gradient(760px 520px at 10% 55%, rgba(90,20,120,0.22), transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffe45e]/90">
              Playlist
            </p>
            <AnimatedText
              id="playlist-titulo"
              as="h2"
              text="Soundtrack for Sunset & After Dark"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            />
            <p
              ref={introRef}
              className="mt-6 max-w-2xl text-base leading-relaxed text-club-muted sm:text-lg"
            >
              This is the sonic signature of Aurea: warm open-air highs, sub that moves
              sand under your feet, and a tempo arc that follows the sky—from amber
              glow to violet night.
            </p>
          </div>

          <a
            ref={ctaRef}
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-[#ffe45e]/35 hover:bg-white/10 active:scale-[0.98] lg:mt-0 lg:w-auto"
            aria-label="Listen on Spotify (mock link)"
          >
            <SpotifyLogo size={20} weight="fill" className="text-[#3bd671]" />
            Listen on Spotify
          </a>
        </div>

        <div
          ref={cardsRef}
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 lg:grid lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Playlist categories"
        >
          {items.map((item, index) => {
            const spans =
              index === 0
                ? 'lg:col-span-7'
                : index === 1
                  ? 'lg:col-span-5'
                  : index === 2
                    ? 'lg:col-span-4'
                    : index === 3
                      ? 'lg:col-span-4'
                      : 'lg:col-span-4'

            return (
              <div
                key={item.title}
                data-playlist-card
                className={`w-[min(86vw,420px)] shrink-0 snap-start sm:w-[min(72vw,460px)] ${spans} lg:w-auto`}
              >
                <PlaylistCard item={item} className="h-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
