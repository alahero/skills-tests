import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PalmSilhouette } from './PalmSilhouette'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hero a pantalla completa: sol, palmas en capas, entrada con GSAP y parallax al scroll.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const palmBackL = useRef<HTMLDivElement>(null)
  const palmBackR = useRef<HTMLDivElement>(null)
  const palmFrontL = useRef<HTMLDivElement>(null)
  const palmFrontR = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (reduced) {
      gsap.set(
        [
          badgeRef.current,
          line1Ref.current,
          line2Ref.current,
          subRef.current,
          ctaRef.current,
          scrollHintRef.current,
        ].filter(Boolean),
        { clearProps: 'all' },
      )
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(badgeRef.current, { y: 16, opacity: 0, duration: 0.6 }, 0)
        .from(
          line1Ref.current,
          { yPercent: 100, opacity: 0, duration: 1 },
          0.15,
        )
        .from(
          line2Ref.current,
          { yPercent: 100, opacity: 0, duration: 1 },
          0.28,
        )
        .from(subRef.current, { y: 24, opacity: 0, duration: 0.85 }, 0.45)
        .from(
          ctaRef.current?.children ?? [],
          { y: 20, opacity: 0, stagger: 0.12, duration: 0.65 },
          0.62,
        )
        .from(scrollHintRef.current, { opacity: 0, y: 8, duration: 0.5 }, 0.85)

      const stConfig = {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.65,
      }

      gsap.to(sunRef.current, { y: 120, scale: 0.92, scrollTrigger: stConfig })
      gsap.to(palmBackL.current, { y: 40, scrollTrigger: stConfig })
      gsap.to(palmBackR.current, { y: 55, scrollTrigger: stConfig })
      gsap.to(palmFrontL.current, { y: 140, scrollTrigger: stConfig })
      gsap.to(palmFrontR.current, { y: 160, scrollTrigger: stConfig })
      gsap.to(glowRef.current, { y: -60, scrollTrigger: stConfig })
    }, section)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-24 pb-16 sm:pb-20"
      aria-label="Hero"
    >
      {/* Capa base: gradiente crepuscular */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-sunset-deep/90 via-night-900 to-night-950"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(255,159,28,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(200,77,27,0.25),transparent_45%)]"
        aria-hidden
      />

      {/* Orbe solar */}
      <div
        ref={sunRef}
        className="pointer-events-none absolute left-1/2 top-[8%] h-[min(72vw,520px)] w-[min(72vw,520px)] -translate-x-1/2 will-change-transform sm:top-[10%]"
        aria-hidden
      >
        <div className="sun-breathe relative h-full w-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sunset-amber via-sunset-deep to-transparent opacity-95 blur-[2px]" />
          <div className="absolute inset-[12%] rounded-full bg-gradient-to-t from-sunset-burnt/40 to-accent-yellow/30 blur-3xl" />
        </div>
      </div>

      <div
        ref={glowRef}
        className="glow-drift pointer-events-none absolute left-1/2 top-[28%] h-64 w-[90%] max-w-3xl -translate-x-1/2 blur-[80px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 80, 140, 0.22) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Palmeras fondo */}
      <div
        ref={palmBackL}
        className="pointer-events-none absolute -left-[8%] bottom-0 w-[42vw] max-w-md text-night-950/90 sm:-left-[4%] sm:w-[36vw]"
        aria-hidden
      >
        <PalmSilhouette className="h-auto w-full" variant="sparse" />
      </div>
      <div
        ref={palmBackR}
        className="pointer-events-none absolute -right-[6%] bottom-[2%] w-[38vw] max-w-sm text-night-950/85 sm:right-0 sm:w-[32vw]"
        aria-hidden
      >
        <PalmSilhouette className="h-auto w-full scale-x-[-1]" variant="sparse" />
      </div>

      {/* Viñeta para profundidad */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#120817_88%)] opacity-80"
        aria-hidden
      />

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={badgeRef} className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-yellow sm:text-xs">
            Cancún, México
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted sm:text-xs">
            Beach Club · Nightlife · Open Air
          </span>
          <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-white/80 sm:inline-block sm:text-xs">
            Day & Night Experience
          </span>
        </div>

        <h1 className="font-display text-[clamp(2.25rem,6.5vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="inline-block">
              Where Cancún’s Sun
            </span>
          </span>
          <span className="block overflow-hidden bg-gradient-to-r from-white via-accent-yellow to-sunset-amber bg-clip-text text-transparent">
            <span ref={line2Ref} className="inline-block">
              Meets the Night
            </span>
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          An open-air beach nightclub built for sunset sessions, tropical nights,
          and unforgettable music by the sea.
        </p>

        <div
          ref={ctaRef}
          className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            id="reserve"
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent-yellow px-7 py-3.5 text-center text-sm font-bold tracking-wide text-night-950 shadow-[0_0_40px_rgba(255,228,94,0.35)] transition hover:scale-[1.02] hover:bg-white"
          >
            Reserve Now
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent-yellow/50 hover:bg-white/10"
          >
            Explore Location
          </a>
        </div>
      </div>

      {/* Palmeras primer plano */}
      <div
        ref={palmFrontL}
        className="pointer-events-none absolute bottom-0 left-[-12%] z-[5] w-[55vw] max-w-lg text-night-950 sm:left-[-6%]"
        aria-hidden
      >
        <PalmSilhouette className="h-auto w-full opacity-95" />
      </div>
      <div
        ref={palmFrontR}
        className="pointer-events-none absolute bottom-[-2%] right-[-14%] z-[5] w-[50vw] max-w-md text-night-950 sm:right-[-8%]"
        aria-hidden
      >
        <PalmSilhouette className="h-auto w-full scale-x-[-1]" />
      </div>

      <div
        ref={scrollHintRef}
        className="relative z-20 mx-auto mt-12 flex flex-col items-center gap-2 text-muted"
        aria-hidden
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-2">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-accent-yellow/80" />
        </span>
      </div>
    </section>
  )
}
