import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedText } from './AnimatedText'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Sección de ubicación con tarjeta de mapa estilizada (placeholder premium).
 */
export function LocationSection() {
  const cardRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card || reduced) return

    const tween = gsap.from(card, {
      y: 48,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 88%',
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
      id="location"
      className="relative scroll-mt-24 border-t border-white/5 bg-night-950 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(232,93,28,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedText
          as="h2"
          className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white"
        >
          Located by the Caribbean Shore
        </AnimatedText>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Steps from the water, surrounded by palms, warm air, and the pulse of
          Cancún’s nightlife.
        </p>

        <div
          ref={cardRef}
          className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-night-800/90 to-night-950 p-8 shadow-[0_40px_120px_-50px_rgba(232,93,28,0.35)] sm:p-10">
            <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-sunset-deep/30 blur-3xl" />
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
              Open-air shoreline
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
              Salt breeze off the Nichupté lagoon corridor, barefoot decks, and a
              sound system tuned for the open sky — engineered for golden hour and
              the hours after.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
                Outdoor dance floor & lounge cabanas
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sunset-amber" />
                Sunset bar & late-night craft cocktails
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sunset-deep" />
                Guest list & table service nightly
              </li>
            </ul>
          </div>

          <div className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-night-900/80 shadow-2xl backdrop-blur-md">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-night-800 via-night-900 to-sunset-burnt/30 sm:aspect-auto sm:min-h-[280px]">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60V0h60' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full max-w-xs rounded-2xl border border-white/15 bg-black/35 p-5 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent-yellow">
                    Map preview
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold text-white">
                    Zona Hotelera
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted">
                    Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.
                  </p>
                  <div className="mt-4 h-24 rounded-xl bg-gradient-to-t from-sunset-deep/50 to-transparent ring-1 ring-white/10" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <a
                  href="https://maps.app.goo.gl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-accent-yellow hover:text-night-950 hover:ring-accent-yellow"
                  aria-label="Open in Google Maps (placeholder)"
                >
                  Open in Maps
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
