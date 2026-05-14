import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { PalmSilhouette, PalmSilhouetteSoft } from './PalmDecor.tsx'

const headlineWords = ['Where', "Cancún's", 'Sun', 'Meets', 'the', 'Night']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const sunWrapRef = useRef<HTMLDivElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const glowARef = useRef<HTMLDivElement>(null)
  const glowBRef = useRef<HTMLDivElement>(null)
  const palmBackLeftRef = useRef<HTMLDivElement>(null)
  const palmBackRightRef = useRef<HTMLDivElement>(null)
  const palmFrontLeftRef = useRef<HTMLDivElement>(null)
  const palmFrontRightRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('[data-hero-word]', { opacity: 1, y: 0 })
        gsap.set('[data-hero-sub]', { opacity: 1, y: 0 })
        gsap.set('[data-hero-cta]', { opacity: 1, y: 0 })
        gsap.set('[data-hero-meta]', { opacity: 1, y: 0 })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero-word]', {
        opacity: 0,
        y: 48,
        duration: 0.85,
        stagger: 0.06,
      })
        .from(
          '[data-hero-sub]',
          { opacity: 0, y: 28, duration: 0.75 },
          '-=0.45',
        )
        .from(
          '[data-hero-cta] > *',
          { opacity: 0, y: 22, duration: 0.55, stagger: 0.08 },
          '-=0.35',
        )
        .from(
          '[data-hero-meta] > *',
          { opacity: 0, y: 14, duration: 0.45, stagger: 0.06 },
          '-=0.35',
        )

      gsap.to(sunRef.current, {
        scale: 1.06,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(glowARef.current, {
        x: 18,
        y: -12,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(glowBRef.current, {
        x: -22,
        y: 16,
        duration: 6.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(palmBackLeftRef.current, {
        rotate: -1.2,
        transformOrigin: '50% 100%',
        duration: 6.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(palmBackRightRef.current, {
        rotate: 1.1,
        transformOrigin: '50% 100%',
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(palmFrontLeftRef.current, {
        rotate: 1.4,
        transformOrigin: '50% 100%',
        duration: 5.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(palmFrontRightRef.current, {
        rotate: -1.3,
        transformOrigin: '50% 100%',
        duration: 5.9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(sunWrapRef.current, {
        y: 110,
        scale: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      })

      gsap.to(palmBackLeftRef.current, {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      })
      gsap.to(palmBackRightRef.current, {
        y: 55,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
      gsap.to(palmFrontLeftRef.current, {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.85,
        },
      })
      gsap.to(palmFrontRightRef.current, {
        y: 140,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.75,
        },
      })

      gsap.to(glowARef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.3,
        },
      })
      gsap.to(glowBRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to(contentRef.current, {
        y: -36,
        autoAlpha: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-night"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(232,93,28,0.55)_0%,rgba(255,159,28,0.18)_38%,rgba(42,15,51,0.45)_62%,rgba(18,8,23,0.96)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-plum/30 via-transparent to-night"
        aria-hidden="true"
      />

      <div
        ref={sunWrapRef}
        className="pointer-events-none absolute left-1/2 top-[18%] h-[min(72vw,520px)] w-[min(72vw,520px)] -translate-x-1/2"
        aria-hidden="true"
      >
        <div
          ref={sunRef}
          className="h-full w-full rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffe45e_0%,#ff9f1c_22%,#e85d1c_48%,rgba(232,93,28,0)_72%)] opacity-95 shadow-glow blur-[0.5px]"
        />
      </div>

      <div
        ref={glowARef}
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gradient-to-tr from-ember/35 via-amber/20 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        ref={glowBRef}
        className="pointer-events-none absolute -right-16 top-[22%] h-80 w-80 rounded-full bg-gradient-to-bl from-accent/25 via-amber/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={palmBackLeftRef}
        className="pointer-events-none absolute -left-[8%] bottom-[-6%] w-[min(52vw,420px)] max-w-none opacity-90 sm:-left-[4%] sm:bottom-0"
        aria-hidden="true"
      >
        <PalmSilhouetteSoft className="h-auto w-full" />
      </div>
      <div
        ref={palmBackRightRef}
        className="pointer-events-none absolute -right-[10%] bottom-[-4%] w-[min(48vw,380px)] max-w-none opacity-90 sm:-right-[6%]"
        aria-hidden="true"
      >
        <PalmSilhouetteSoft className="h-auto w-full" mirror />
      </div>

      <div
        ref={palmFrontLeftRef}
        className="pointer-events-none absolute -left-[14%] bottom-[-12%] w-[min(64vw,520px)] max-w-none sm:-left-[10%]"
        aria-hidden="true"
      >
        <PalmSilhouette className="h-auto w-full drop-shadow-[0_0_40px_rgba(0,0,0,0.55)]" />
      </div>
      <div
        ref={palmFrontRightRef}
        className="pointer-events-none absolute -right-[18%] bottom-[-14%] w-[min(58vw,480px)] max-w-none sm:-right-[12%]"
        aria-hidden="true"
      >
        <PalmSilhouette className="h-auto w-full drop-shadow-[0_0_40px_rgba(0,0,0,0.55)]" mirror />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-night via-night/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(27,11,46,0.55),transparent_55%)]"
        aria-hidden="true"
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24"
      >
        <div className="max-w-3xl">
          <p className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent/90 sm:text-xs">
            <span>Cancún, México</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline" aria-hidden="true" />
            <span className="hidden sm:inline">Beach Club · Nightlife · Open Air</span>
          </p>

          <h1 className="font-display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white">
            {headlineWords.map((word) => (
              <span key={word} className="mr-[0.28em] inline-block last:mr-0">
                <span data-hero-word className="inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero-sub
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            An open-air beach nightclub built for sunset sessions, tropical nights, and unforgettable
            music by the sea.
          </p>

          <div
            data-hero-cta
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#reserve"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-ember via-amber to-accent px-8 text-sm font-semibold uppercase tracking-[0.18em] text-night shadow-glow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Reserve Now
            </a>
            <a
              href="#location"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Explore Location
            </a>
          </div>

          <div
            data-hero-meta
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.22em] text-white/55"
          >
            <span>Day &amp; Night Experience</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="sm:hidden">Beach Club · Open Air</span>
            <span className="hidden sm:inline">Ocean breeze · DJ sunsets</span>
          </div>
        </div>

        <a
          href="#location"
          className="mt-14 hidden flex-col items-center gap-2 self-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45 transition hover:text-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:flex"
          aria-label="Scroll to location section"
        >
          <span className="h-10 w-px bg-gradient-to-b from-transparent via-white/35 to-white/70" />
          <span>Scroll</span>
        </a>
      </div>
    </section>
  )
}
