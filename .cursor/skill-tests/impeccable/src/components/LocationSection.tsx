import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { AnimatedText } from './AnimatedText';

gsap.registerPlugin(ScrollTrigger);

/** Sección de ubicación con tarjeta tipo mapa premium. */
export function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      gsap.from([cardRef.current, asideRef.current].filter(Boolean), {
        y: 48,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.16,
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-night-950 via-night-900 to-night-950 py-24 sm:py-28"
      aria-labelledby="location-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(232,93,28,0.18), transparent 45%), radial-gradient(circle at 80% 10%, rgba(99,102,241,0.12), transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <AnimatedText
            as="h2"
            id="location-title"
            text="Located by the Caribbean Shore"
            className="font-display text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-snow"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Steps from the water, surrounded by palms, warm air, and the pulse of Cancún’s nightlife.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent-yellow shadow-[0_0_12px_rgba(255,228,94,0.55)]" />
              Open deck, sea breeze, and a sound system tuned for the shoreline.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunset-amber shadow-[0_0_12px_rgba(255,159,28,0.45)]" />
              Sunset-facing lounge pockets that shift into late-night dance energy.
            </li>
          </ul>
        </div>

        <div ref={asideRef} className="relative">
          <div
            ref={cardRef}
            className="relative overflow-hidden rounded-[28px] border border-white/12 bg-night-800/70 p-1 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="rounded-[24px] bg-gradient-to-br from-night-800 to-night-950 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-yellow">Stylized map</p>
                  <p className="mt-2 font-display text-xl font-semibold text-snow">Zona Hotelera</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted">
                  Cancún
                </span>
              </div>

              <div
                className="relative mt-6 aspect-[16/11] overflow-hidden rounded-2xl border border-white/10"
                role="img"
                aria-label="Ilustración estilizada de la costa y el hotel zone"
              >
                <div
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,93,28,0.35),rgba(27,11,46,0.85))]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night-950 via-night-950/40 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-6 top-8 h-16 w-16 rounded-full bg-accent-yellow/25 blur-2xl"
                  aria-hidden="true"
                />
                <div className="absolute inset-6 rounded-xl border border-dashed border-white/25 bg-white/5" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">Dirección</p>
                    <p className="mt-2 text-sm font-medium leading-snug text-snow">
                      Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-accent-yellow/60 bg-accent-yellow/15 shadow-[0_0_24px_rgba(255,228,94,0.35)]" />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">Simulated coordinates · experience preview</p>
                <a
                  href="https://maps.app.goo.gl/"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-snow transition-colors hover:border-accent-yellow/60 hover:text-accent-yellow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
