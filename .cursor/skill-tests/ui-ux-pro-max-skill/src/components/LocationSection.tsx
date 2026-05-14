import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedText } from './AnimatedText'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/** Sección de ubicación con tarjeta de mapa estilizada. */
export function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const section = sectionRef.current
    const card = cardRef.current
    const body = bodyRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([card, body], { clearProps: 'all' })
        return
      }

      if (body) {
        gsap.set(body, { opacity: 0, y: 28 })
        gsap.to(body, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: body,
            start: 'top 86%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      if (card) {
        gsap.set(card, { opacity: 0, y: 56, rotateX: 6, transformOrigin: '50% 50%', transformPerspective: 900 })
        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={sectionRef}
      id="ubicacion"
      className="relative overflow-hidden bg-gradient-to-b from-night via-plum to-violet py-24 sm:py-28"
      aria-labelledby="ubicacion-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light bg-grain-noise"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,159,28,0.25), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-6">
          <AnimatedText
            id="ubicacion-titulo"
            text="Located by the Caribbean Shore"
            className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-white"
          />
          <p
            ref={bodyRef}
            lang="en"
            className="editorial-justificado max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Steps from the water, surrounded by palms, warm air, and the pulse of Cancún’s nightlife. Salt breeze on
            your skin, sand underfoot, and the horizon melting into amber before the bass takes over the shoreline.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/55">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Outdoor terrace</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Caribbean views</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Hotel Zone</span>
          </div>
        </div>

        <div ref={cardRef} className="relative will-change-transform">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-ember/40 via-transparent to-plum/80 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-1 shadow-card backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-violet/80 to-night">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,159,28,0.35),transparent_55%)]" aria-hidden />
              <div className="relative grid gap-4 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-glow/90">Mapa conceptual</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                    Zona Hotelera
                  </span>
                </div>

                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-plum via-night to-violet">
                  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:28px_28px]" aria-hidden />
                  <div
                    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,228,94,0.55),rgba(255,159,28,0.15)_45%,transparent_70%)] blur-md"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-white/20 bg-night/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-md">
                      ORILLA · Beachfront
                    </div>
                  </div>
                  <svg className="absolute bottom-4 left-4 w-28 text-white/35" viewBox="0 0 120 40" aria-hidden>
                    <path
                      d="M4 32 C 30 8, 70 8, 116 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white">Dirección</p>
                  <p className="text-sm leading-relaxed text-white/70">Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.</p>
                </div>

                <a
                  href="https://maps.app.goo.gl/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-glow/50 hover:text-glow focus-visible:outline-offset-4"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
