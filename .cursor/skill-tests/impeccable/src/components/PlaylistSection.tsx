import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { AnimatedText } from './AnimatedText';
import { PlaylistCard } from './PlaylistCard';

gsap.registerPlugin(ScrollTrigger);

const playlists = [
  {
    title: 'Sunset House',
    description: 'Warm pads, rolling bass, and coastal percussion for golden hour.',
    meta: 'Approx. 2h 10m · 28 tracks',
    accent: 'amber' as const,
  },
  {
    title: 'Latin Tech',
    description: 'Percussion-forward grooves with modern tension and club polish.',
    meta: 'Approx. 1h 45m · 22 tracks',
    accent: 'ember' as const,
  },
  {
    title: 'Afro House',
    description: 'Deep polyrhythms, soulful vocals, and wide-open dancefloor drama.',
    meta: 'Approx. 2h 35m · 31 tracks',
    accent: 'magenta' as const,
  },
  {
    title: 'Beach Club Anthems',
    description: 'Big moments, singalong hooks, and peak-time energy without the cheese.',
    meta: 'Approx. 1h 55m · 24 tracks',
    accent: 'gold' as const,
  },
  {
    title: 'Late Night Energy',
    description: 'Driving kicks, neon tension, and the switch from sand to strobes.',
    meta: 'Approx. 3h 05m · 36 tracks',
    accent: 'violet' as const,
  },
];

/** Identidad sonora con tarjetas y CTA hacia streaming. */
export function PlaylistSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const cards = grid.querySelectorAll<HTMLElement>('[data-playlist-card]');

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 56,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: grid,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      });

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 32,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="playlist"
      ref={sectionRef}
      className="relative scroll-mt-24 border-t border-white/10 bg-night-950 py-24 sm:py-28"
      aria-labelledby="playlist-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(255,159,28,0.2), transparent 55%), radial-gradient(circle at 80% 40%, rgba(139,92,246,0.12), transparent 45%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatedText
            as="h2"
            id="playlist-title"
            text="Soundtrack for Sunset & After Dark"
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-snow"
          />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Curated sets that mirror the arc of the night: warm, rhythmic, then relentless. Press play before you arrive.
          </p>
        </div>

        <div ref={gridRef} className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {playlists.map((item) => (
            <div key={item.title} data-playlist-card>
              <PlaylistCard {...item} />
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-muted">
            Follow the club playlist for monthly refreshes, guest DJ spotlights, and private event recordings.
          </p>
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent-yellow px-7 py-3 text-sm font-semibold text-night-950 shadow-[0_0_36px_rgba(255,228,94,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
