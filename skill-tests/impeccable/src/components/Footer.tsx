import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const primaryLinks = [
  { href: '#top', label: 'Home' },
  { href: '#location', label: 'Location' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#reservations', label: 'Reservations' },
] as const;

const socialLinks = [
  { href: 'https://instagram.com/', label: 'Instagram', external: true },
  { href: 'https://www.tiktok.com/', label: 'TikTok', external: true },
  { href: 'https://open.spotify.com/', label: 'Spotify', external: true },
] as const;

const legalLinks = [
  { href: '#privacy', label: 'Privacy Policy' },
  { href: '#terms', label: 'Terms & Conditions' },
  { href: '#cookies', label: 'Cookie Policy' },
  { href: '#reservations-policy', label: 'Reservations Policy' },
] as const;

/** Pie de página con marca, enlaces y aviso legal simulado. */
export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const blocks = footer.querySelectorAll<HTMLElement>('[data-footer-block]');

    const ctx = gsap.context(() => {
      gsap.from(blocks, {
        y: 28,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: footer,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-night-950 via-night-900 to-black pb-12 pt-16 text-snow sm:pb-16 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 0%, rgba(255,159,28,0.18), transparent 45%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div data-footer-block>
            <p className="font-display text-2xl font-semibold tracking-tight">Solstice Shore</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Outdoor beach nightclub on the Caribbean edge of Cancún. Sunset warmth, midnight voltage, and sound that
              carries over the tide.
            </p>
            <div id="reservations" className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-yellow">Reservations desk</p>
              <p className="mt-2 text-snow/90">+52 (998) 000 0000 · concierge@solsticeshore.mx</p>
              <p className="mt-1 text-xs text-muted">Hours shift with season, weather, and private buyouts.</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div data-footer-block>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-snow/70">Explore</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-snow">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div data-footer-block>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-snow/70">Social</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-snow"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="mailto:hello@solsticeshore.mx" className="transition-colors hover:text-snow">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#location" className="transition-colors hover:text-snow">
                    Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          data-footer-block
          className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Solstice Shore. Cancún, México.</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Legal">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-snow">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
