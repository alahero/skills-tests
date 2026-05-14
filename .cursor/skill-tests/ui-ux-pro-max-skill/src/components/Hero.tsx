import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PalmSilhouette, PalmSilhouetteMirror } from './PalmSilhouette'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/** Indicador de scroll (decorativo). */
function ScrollCue() {
  return (
    <div
      className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55"
      aria-hidden
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">Descubre</span>
      <span className="block h-10 w-px bg-gradient-to-b from-glow/80 to-transparent" />
    </div>
  )
}

/** Hero a pantalla completa con sol, palmeras y animación de entrada. */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const sunWrapRef = useRef<HTMLDivElement>(null)
  const sunCoreRef = useRef<HTMLDivElement>(null)
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
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const headline = headlineRef.current
    const sub = subRef.current
    const meta = metaRef.current
    const cta = ctaRef.current
    const sunWrap = sunWrapRef.current
    const sunCore = sunCoreRef.current
    const glowA = glowARef.current
    const glowB = glowBRef.current
    const pbL = palmBackLRef.current
    const pbR = palmBackRRef.current
    const pfL = palmFrontLRef.current
    const pfR = palmFrontRRef.current

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([headline, sub, meta, cta], { clearProps: 'all' })
        return
      }

      gsap.set([headline, sub, meta, cta], { opacity: 0, y: 36 })
      gsap.set(headline, { y: 56 })

      const enter = gsap.timeline({ defaults: { ease: 'power3.out' } })
      enter.to(headline, { opacity: 1, y: 0, duration: 1.1 }, 0.15)
      enter.to(sub, { opacity: 1, y: 0, duration: 0.95 }, '-=0.55')
      enter.to(meta, { opacity: 1, y: 0, duration: 0.75 }, '-=0.55')
      enter.to(cta, { opacity: 1, y: 0, duration: 0.85 }, '-=0.45')

      if (sunCore) {
        gsap.fromTo(
          sunCore,
          { scale: 0.94, opacity: 0.9 },
          { scale: 1, opacity: 1, duration: 2.6, ease: 'sine.inOut', repeat: -1, yoyo: true },
        )
      }

      const st = { trigger: root, start: 'top top', end: 'bottom top', scrub: true } as const

      if (pbL) gsap.to(pbL, { y: 90, ease: 'none', scrollTrigger: { ...st, scrub: 0.75 } })
      if (pbR) gsap.to(pbR, { y: 110, ease: 'none', scrollTrigger: { ...st, scrub: 0.85 } })
      if (pfL) gsap.to(pfL, { y: 150, ease: 'none', scrollTrigger: { ...st, scrub: 1.05 } })
      if (pfR) gsap.to(pfR, { y: 170, ease: 'none', scrollTrigger: { ...st, scrub: 1.1 } })
      if (sunWrap) gsap.to(sunWrap, { y: 48, scale: 1.05, ease: 'none', scrollTrigger: st })
      if (glowA) gsap.to(glowA, { x: -36, y: 28, ease: 'none', scrollTrigger: { ...st, scrub: 1.15 } })
      if (glowB) gsap.to(glowB, { x: 44, y: 36, ease: 'none', scrollTrigger: { ...st, scrub: 1.05 } })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={rootRef}
      id="inicio"
      className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden pt-[104px] md:justify-center md:pt-24"
      aria-labelledby="hero-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,159,28,0.55)_0%,rgba(232,93,28,0.35)_18%,rgba(200,77,27,0.2)_32%,rgba(42,15,51,0.92)_58%,#120817_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-night/20 to-night" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay bg-grain-noise"
        aria-hidden
      />

      <div
        ref={glowARef}
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.35), transparent 65%)' }}
        aria-hidden
      />
      <div
        ref={glowBRef}
        className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,228,94,0.22), transparent 70%)' }}
        aria-hidden
      />

      <div
        ref={sunWrapRef}
        className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 will-change-transform"
        aria-hidden
      >
        <div
          ref={sunCoreRef}
          className="h-[min(72vw,520px)] w-[min(72vw,520px)] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffe45e_0%,#ff9f1c_28%,#e85d1c_55%,rgba(232,93,28,0)_72%)] opacity-95 shadow-[0_0_120px_rgba(255,159,28,0.55),0_0_220px_rgba(232,93,28,0.35)] will-change-transform"
        />
      </div>

      <div
        ref={palmBackLRef}
        className="pointer-events-none absolute -bottom-8 -left-[18%] w-[min(58vw,420px)] text-night/90 sm:-left-[8%]"
        aria-hidden
      >
        <PalmSilhouette className="h-auto w-full drop-shadow-[0_0_40px_rgba(0,0,0,0.45)]" />
      </div>
      <div
        ref={palmBackRRef}
        className="pointer-events-none absolute -bottom-6 -right-[20%] w-[min(56vw,400px)] text-night/85 sm:-right-[10%]"
        aria-hidden
      >
        <PalmSilhouetteMirror className="h-auto w-full drop-shadow-[0_0_40px_rgba(0,0,0,0.45)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(18,8,23,0.88)_100%)]"
        aria-hidden
      />

      <div
        ref={palmFrontLRef}
        className="pointer-events-none absolute -bottom-16 -left-[28%] w-[min(78vw,520px)] text-night sm:-left-[14%]"
        aria-hidden
      >
        <PalmSilhouette className="h-auto w-full opacity-95 drop-shadow-[0_30px_80px_rgba(0,0,0,0.65)]" />
      </div>
      <div
        ref={palmFrontRRef}
        className="pointer-events-none absolute -bottom-20 -right-[30%] w-[min(80vw,540px)] text-night sm:-right-[16%]"
        aria-hidden
      >
        <PalmSilhouetteMirror className="h-auto w-full opacity-95 drop-shadow-[0_30px_80px_rgba(0,0,0,0.65)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-28 sm:px-6 lg:px-8 lg:pb-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-glow/90 sm:text-sm">
            Cancún, México · Beach Club · Open Air
          </p>

          <h1
            id="hero-titulo"
            ref={headlineRef}
            lang="en"
            className="font-display text-[clamp(2.35rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-white drop-shadow-[0_12px_48px_rgba(0,0,0,0.55)]"
          >
            Where Cancún’s Sun Meets the Night
          </h1>

          <p
            ref={subRef}
            lang="en"
            className="max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            An open-air beach nightclub built for sunset sessions, tropical nights, and unforgettable music by the sea.
          </p>

          <div
            ref={metaRef}
            className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/65 sm:text-sm"
          >
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-md">
              Day &amp; Night Experience
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-md">
              Beach Club · Nightlife
            </span>
          </div>

          <div ref={ctaRef} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#reservaciones"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-glow px-8 text-sm font-bold uppercase tracking-wide text-night shadow-glow transition hover:brightness-105 focus-visible:outline-offset-4"
            >
              Reserve Now
            </a>
            <a
              href="#ubicacion"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition hover:border-glow/60 hover:text-glow focus-visible:outline-offset-4"
            >
              Explore Location
            </a>
          </div>
        </div>
      </div>

      <ScrollCue />
    </section>
  )
}
