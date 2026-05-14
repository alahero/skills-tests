import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, NavigationArrow } from '@phosphor-icons/react'
import { AnimatedText } from './AnimatedText'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Sección de ubicación con tarjeta tipo mapa premium.
 */
export function LocationSection() {
  const reduced = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced) return
    const section = sectionRef.current
    const card = cardRef.current
    const copy = copyRef.current
    if (!section || !card || !copy) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        copy,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: copy,
            start: 'top 84%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 86%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      id="ubicacion"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#120817] via-[#1b0b2e] to-[#120817] py-24 sm:py-28"
      aria-labelledby="ubicacion-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            'radial-gradient(900px 520px at 20% 10%, rgba(232,93,28,0.22), transparent 60%), radial-gradient(700px 520px at 85% 40%, rgba(200,77,27,0.16), transparent 55%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div ref={copyRef} className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffe45e]/90">
              Location
            </p>
            <AnimatedText
              id="ubicacion-titulo"
              as="h2"
              text="Located by the Caribbean Shore"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-club-muted sm:text-lg">
              Steps from the water, surrounded by palms, warm air, and the pulse of
              Cancún’s nightlife. This is outdoor luxury: sea breeze, barefoot energy,
              and a sound system tuned for the open sky.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[#ff9f1c]" size={22} weight="duotone" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-club-muted">
                    Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-[#ffe45e]/35 hover:bg-white/10 active:scale-[0.98]"
              aria-label="Open in Maps (mock link)"
            >
              <NavigationArrow size={18} weight="bold" aria-hidden />
              Open in Maps
            </a>
          </div>

          <div className="lg:col-span-7">
            <div
              ref={cardRef}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            >
              <div className="relative overflow-hidden rounded-[27px] bg-[#0f0616]/80 p-6 sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  aria-hidden
                  style={{
                    backgroundImage:
                      'linear-gradient(120deg, rgba(255,159,28,0.35), transparent 40%, rgba(120,40,160,0.25))',
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                        Map preview
                      </p>
                      <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                        Hotel Zone · Beachfront
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#ffe45e]">
                      Mock
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                        Distance
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">0.2 mi</p>
                      <p className="mt-1 text-sm text-club-muted">to shoreline</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                        Outdoor area
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">18k+</p>
                      <p className="mt-1 text-sm text-club-muted">sq ft open-air deck</p>
                    </div>
                  </div>

                  <div className="mt-8 h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a0f33] to-[#120817] sm:h-[260px]">
                    <div
                      className="relative h-full w-full"
                      role="img"
                      aria-label="Stylized abstract map of Cancún shoreline"
                    >
                      <div
                        className="absolute inset-0 opacity-70"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle at 30% 35%, rgba(255,159,28,0.35), transparent 45%), radial-gradient(circle at 70% 60%, rgba(255,228,94,0.12), transparent 40%), linear-gradient(180deg, rgba(18,8,23,0) 0%, rgba(18,8,23,0.85) 100%)',
                        }}
                      />
                      <svg
                        className="absolute inset-0 h-full w-full text-white/15"
                        viewBox="0 0 900 420"
                        preserveAspectRatio="none"
                        aria-hidden
                      >
                        <path
                          d="M40 330 C 160 300, 220 240, 320 210 S 520 160, 620 140 S 820 120, 860 90"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M60 360 C 200 330, 260 280, 380 250 S 560 210, 700 190 S 840 170, 880 150"
                          fill="none"
                          stroke="currentColor"
                          strokeOpacity="0.55"
                          strokeWidth="2"
                        />
                      </svg>

                      <div className="absolute left-[58%] top-[44%] -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="h-14 w-14 rounded-full bg-[#ffe45e]/25 blur-xl" />
                          <div className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#120817]/80 shadow-[0_0_0_6px_rgba(255,159,28,0.18)]">
                            <MapPin className="text-[#ff9f1c]" size={22} weight="fill" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-xs text-white/75 backdrop-blur-md">
                        <span className="truncate">Blvd. Kukulcán · Beach access</span>
                        <span className="shrink-0 font-semibold text-[#ffe45e]">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
