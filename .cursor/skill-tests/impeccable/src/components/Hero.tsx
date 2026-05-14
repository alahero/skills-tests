import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useSunAmbientMotion } from '../hooks/useScrollTriggerSafeRefresh';
import { PalmSilhouettes } from './PalmSilhouettes';

gsap.registerPlugin(ScrollTrigger);

/** Hero inmersivo con sol, palmeras y energía de atardecer. */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const sunGlowRef = useRef<HTMLDivElement>(null);
  const palmBackRef = useRef<HTMLDivElement>(null);
  const palmFrontRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);

  const reduced = usePrefersReducedMotion();
  useSunAmbientMotion(sunRef, sunGlowRef, !reduced);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reduced) {
      gsap.set(
        [headlineRef.current, subRef.current, metaRef.current, ctaRef.current].filter(Boolean),
        { clearProps: 'all' }
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(headlineRef.current, { y: 54, opacity: 0, duration: 1.05 }, 0.12)
        .from(subRef.current, { y: 36, opacity: 0, duration: 0.9 }, 0.38)
        .from(metaRef.current, { y: 22, opacity: 0, duration: 0.75 }, 0.52)
        .from(ctaRef.current?.children ?? [], { y: 26, opacity: 0, duration: 0.78, stagger: 0.12 }, 0.62);

      const stCommon = {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.75,
      } as const;

      gsap.fromTo(
        palmBackRef.current,
        { yPercent: 0 },
        { yPercent: 10, scrollTrigger: { ...stCommon, scrub: 0.9 } }
      );
      gsap.fromTo(
        palmFrontRef.current,
        { yPercent: 0 },
        { yPercent: -14, scrollTrigger: { ...stCommon, scrub: 0.55 } }
      );
      gsap.fromTo(
        sunRef.current,
        { yPercent: 0, scale: 1 },
        { yPercent: -8, scale: 1.12, scrollTrigger: { ...stCommon, scrub: 1.05 } }
      );
      gsap.fromTo(
        orbARef.current,
        { xPercent: 0, yPercent: 0 },
        { xPercent: -6, yPercent: 10, scrollTrigger: { ...stCommon, scrub: 1.2 } }
      );
      gsap.fromTo(
        orbBRef.current,
        { xPercent: 0, yPercent: 0 },
        { xPercent: 8, yPercent: -8, scrollTrigger: { ...stCommon, scrub: 0.85 } }
      );
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
      aria-label="Presentación principal"
    >
      {/* Fondo atmosférico */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(232,93,28,0.55)_0%,rgba(255,159,28,0.22)_32%,transparent_58%),linear-gradient(180deg,rgba(27,11,46,0.2)_0%,#120817_68%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,77,27,0.35)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night-950 via-night-950/80 to-transparent"
        aria-hidden="true"
      />

      {/* Orbes de luz */}
      <div
        ref={orbARef}
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full blur-3xl sm:left-10"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        ref={orbBRef}
        className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full blur-3xl sm:right-6"
        style={{ background: 'radial-gradient(circle, rgba(255,159,28,0.28) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Sol */}
      <div className="pointer-events-none absolute left-1/2 top-[10%] z-0 -translate-x-1/2 sm:top-[12%]" aria-hidden="true">
        <div
          ref={sunGlowRef}
          className="absolute left-1/2 top-1/2 h-[min(78vw,520px)] w-[min(78vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(255,159,28,0.75) 0%, rgba(232,93,28,0.35) 38%, transparent 68%)',
            filter: 'blur(8px)',
          }}
        />
        <div
          ref={sunRef}
          className="relative h-[min(52vw,380px)] w-[min(52vw,380px)] rounded-full sm:h-[min(44vw,420px)] sm:w-[min(44vw,420px)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #ffe45e 0%, #ff9f1c 28%, #e85d1c 58%, rgba(200,77,27,0.55) 78%, transparent 100%)',
            boxShadow:
              '0 0 80px rgba(255,159,28,0.55), 0 0 140px rgba(232,93,28,0.35), inset 0 0 60px rgba(255,255,255,0.25)',
          }}
        />
      </div>

      {/* Palmeras fondo */}
      <div
        ref={palmBackRef}
        className="pointer-events-none absolute -bottom-8 left-1/2 z-[1] w-[140%] max-w-none -translate-x-1/2 sm:-bottom-12 sm:w-[125%]"
        aria-hidden="true"
      >
        <PalmSilhouettes variant="back" className="w-full opacity-90" />
      </div>

      {/* Palmeras frente */}
      <div
        ref={palmFrontRef}
        className="pointer-events-none absolute -bottom-14 left-1/2 z-[2] w-[155%] max-w-none -translate-x-1/2 sm:-bottom-20 sm:w-[135%]"
        aria-hidden="true"
      >
        <PalmSilhouettes variant="front" className="w-full" />
      </div>

      {/* Viñeta para contraste */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(18,8,23,0.55)_70%,rgba(18,8,23,0.92)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-[4] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent-yellow/90">
            Cancún, México · Beach Club · Nightlife · Open Air
          </p>
          <h1
            ref={headlineRef}
            className="font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-snow [text-shadow:0_18px_60px_rgba(0,0,0,0.55)]"
          >
            Where Cancún’s Sun Meets the Night
          </h1>
          <p
            ref={subRef}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            An open-air beach nightclub built for sunset sessions, tropical nights, and unforgettable music by the sea.
          </p>

          <div
            ref={metaRef}
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted"
          >
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-snow/90">
              Day &amp; Night Experience
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/35 sm:inline" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] text-snow/70">Golden hour to sunrise energy</span>
          </div>

          <div ref={ctaRef} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#reservations"
              className="inline-flex items-center justify-center rounded-full bg-accent-yellow px-8 py-3 text-center text-sm font-semibold text-night-950 shadow-[0_0_40px_rgba(255,228,94,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Reserve Now
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-center text-sm font-semibold text-snow backdrop-blur-md transition-colors hover:border-accent-yellow/60 hover:text-accent-yellow"
            >
              Explore Location
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 text-xs text-muted">
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-accent-yellow/70 to-transparent" aria-hidden="true" />
          <span className="uppercase tracking-[0.28em]">Scroll</span>
          <span
            className="inline-block h-8 w-px bg-gradient-to-b from-accent-yellow/80 to-transparent motion-safe:animate-pulse"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
