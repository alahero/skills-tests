import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CaretDoubleDown, MapPin, SunHorizon } from '@phosphor-icons/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

function PalmLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M120 700c18-120 22-240 10-360-40-90-90-170-110-260-6-28 8-52 34-46 46 12 86 58 120 102 10-62 6-128-18-186-10-24 8-46 34-38 52 16 92 74 118 128 18-46 22-98 10-146-6-26 18-44 40-30 44 28 72 86 88 142 14-34 18-72 10-108-4-18 14-34 32-24 40 22 62 70 74 116 8-18 10-38 6-58-4-18 12-34 30-26 34 14 52 52 60 88 6 28 6 58 2 86-24 160-98 310-190 450L120 700Z"
        opacity="0.92"
      />
      <path
        fill="currentColor"
        d="M40 705c80-200 120-420 90-640 120 120 200 280 240 460-110-40-220-60-330 180Z"
        opacity="0.55"
      />
    </svg>
  )
}

function PalmRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform="scale(-1 1) translate(-520 0)">
        <path
          fill="currentColor"
          d="M120 700c18-120 22-240 10-360-40-90-90-170-110-260-6-28 8-52 34-46 46 12 86 58 120 102 10-62 6-128-18-186-10-24 8-46 34-38 52 16 92 74 118 128 18-46 22-98 10-146-6-26 18-44 40-30 44 28 72 86 88 142 14-34 18-72 10-108-4-18 14-34 32-24 40 22 62 70 74 116 8-18 10-38 6-58-4-18 12-34 30-26 34 14 52 52 60 88 6 28 6 58 2 86-24 160-98 310-190 450L120 700Z"
          opacity="0.92"
        />
        <path
          fill="currentColor"
          d="M40 705c80-200 120-420 90-640 120 120 200 280 240 460-110-40-220-60-330 180Z"
          opacity="0.55"
        />
      </g>
    </svg>
  )
}

/**
 * Hero a pantalla completa con sol, palmeras y entrada animada.
 */
export function Hero() {
  const reduced = usePrefersReducedMotion()
  const rootRef = useRef<HTMLElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const glowARef = useRef<HTMLDivElement>(null)
  const glowBRef = useRef<HTMLDivElement>(null)
  const palmBackLRef = useRef<HTMLDivElement>(null)
  const palmBackRRef = useRef<HTMLDivElement>(null)
  const palmFrontLRef = useRef<HTMLDivElement>(null)
  const palmFrontRRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (reduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        headlineRef.current,
        { y: 36, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.05 },
        0.15,
      )
        .fromTo(
          subRef.current,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          '-=0.55',
        )
        .fromTo(
          metaRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          '-=0.45',
        )
        .fromTo(
          ctaRef.current,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.35',
        )
        .fromTo(
          scrollHintRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.55 },
          '-=0.25',
        )

      gsap.to(sunRef.current, {
        scale: 1.04,
        duration: 6.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(glowARef.current, {
        xPercent: 6,
        yPercent: -4,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(glowBRef.current, {
        xPercent: -5,
        yPercent: 5,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      const scrub = { scrub: 1.1 }
      gsap.fromTo(
        palmBackLRef.current,
        { yPercent: 0 },
        { yPercent: 10, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', ...scrub } },
      )
      gsap.fromTo(
        palmBackRRef.current,
        { yPercent: 0 },
        { yPercent: 12, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', ...scrub } },
      )
      gsap.fromTo(
        palmFrontLRef.current,
        { yPercent: 0 },
        { yPercent: 5, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', ...scrub } },
      )
      gsap.fromTo(
        palmFrontRRef.current,
        { yPercent: 0 },
        { yPercent: 6, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', ...scrub } },
      )
      gsap.fromTo(
        sunRef.current,
        { yPercent: 0, scale: 1 },
        {
          yPercent: 14,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', ...scrub },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      id="inicio"
      ref={rootRef}
      className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-[#120817] pb-10 pt-28 sm:pb-14 sm:pt-32"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(1200px 700px at 50% 18%, rgba(232,93,28,0.55) 0%, rgba(42,15,51,0.35) 42%, rgba(18,8,23,0.96) 72%, #120817 100%)',
        }}
      />

      <div
        ref={glowARef}
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#ff9f1c]/25 blur-[120px] will-change-transform"
        aria-hidden
      />
      <div
        ref={glowBRef}
        className="pointer-events-none absolute -right-40 top-32 h-[520px] w-[520px] rounded-full bg-[#c084fc]/12 blur-[140px] will-change-transform"
        aria-hidden
      />

      <div
        ref={sunRef}
        className="pointer-events-none absolute left-1/2 top-[8%] h-[min(78vw,520px)] w-[min(78vw,520px)] -translate-x-1/2 rounded-full will-change-transform"
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 40% 35%, #ffe45e 0%, #ff9f1c 28%, #e85d1c 58%, rgba(232,93,28,0) 72%)',
          boxShadow:
            '0 0 120px rgba(255,159,28,0.55), 0 0 220px rgba(232,93,28,0.35), inset 0 0 80px rgba(255,228,94,0.35)',
        }}
      />

      <div
        ref={palmBackLRef}
        className="pointer-events-none absolute -left-6 bottom-[-6%] w-[min(92vw,520px)] text-[#1b0b2e] sm:-left-10 sm:bottom-[-8%]"
        aria-hidden
      >
        <PalmLeft className="h-auto w-full opacity-90" />
      </div>
      <div
        ref={palmBackRRef}
        className="pointer-events-none absolute -right-8 bottom-[-6%] w-[min(92vw,520px)] text-[#1b0b2e] sm:-right-12 sm:bottom-[-8%]"
        aria-hidden
      >
        <PalmRight className="h-auto w-full opacity-90" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#120817]/20 to-[#120817]/85"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <MapPin size={14} weight="bold" className="text-[#ffe45e]" aria-hidden />
              Cancún, México
            </span>
            <span className="hidden sm:inline text-white/45">|</span>
            <span className="hidden sm:inline">Beach Club · Nightlife · Open Air</span>
          </p>

          <h1
            ref={headlineRef}
            className="font-display text-[clamp(2.35rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-white"
          >
            Where Cancún’s Sun Meets the Night
          </h1>

          <p
            ref={subRef}
            className="mt-6 max-w-2xl text-base leading-relaxed text-club-muted sm:text-lg"
          >
            An open-air beach nightclub built for sunset sessions, tropical nights, and
            unforgettable music by the sea.
          </p>

          <div
            ref={metaRef}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <SunHorizon size={18} weight="duotone" className="text-[#ff9f1c]" aria-hidden />
              Day &amp; Night Experience
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:hidden">
              Beach Club · Nightlife
            </span>
          </div>

          <div
            ref={ctaRef}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contacto"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-[#e85d1c] via-[#ff9f1c] to-[#ffe45e] px-7 text-sm font-semibold text-[#120817] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:brightness-105 active:scale-[0.98]"
            >
              Reserve Now
            </a>
            <a
              href="#ubicacion"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-[#ffe45e]/35 hover:bg-white/10 active:scale-[0.98]"
            >
              Explore Location
            </a>
          </div>
        </div>
      </div>

      <div
        ref={palmFrontLRef}
        className="pointer-events-none absolute -left-16 bottom-[-14%] w-[min(110vw,640px)] text-[#0b040f] sm:-left-24 sm:bottom-[-18%]"
        aria-hidden
      >
        <PalmLeft className="h-auto w-full opacity-[0.92]" />
      </div>
      <div
        ref={palmFrontRRef}
        className="pointer-events-none absolute -right-20 bottom-[-14%] w-[min(110vw,640px)] text-[#0b040f] sm:-right-28 sm:bottom-[-18%]"
        aria-hidden
      >
        <PalmRight className="h-auto w-full opacity-[0.92]" />
      </div>

      <div
        ref={scrollHintRef}
        className="relative z-10 mx-auto mt-10 flex max-w-7xl justify-center px-4 sm:mt-12"
      >
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
          <CaretDoubleDown
            className={reduced ? '' : 'motion-safe:animate-bounce'}
            size={18}
            weight="bold"
            aria-hidden
          />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
