import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const explore = [
  { href: '#top', label: 'Home' },
  { href: '#location', label: 'Location' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#reserve', label: 'Reservations' },
]

const legal = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
  { href: '#', label: 'Cookie Policy' },
  { href: '#', label: 'Reservations Policy' },
]

const social = [
  { href: 'https://instagram.com/', label: 'Instagram', abbr: 'IG' },
  { href: 'https://www.tiktok.com/', label: 'TikTok', abbr: 'TT' },
  { href: 'https://open.spotify.com/', label: 'Spotify', abbr: 'SP' },
]

/**
 * Pie de página con enlaces mock y animación suave al entrar en vista.
 */
export default function Footer() {
  const rootRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const blocks = root.querySelectorAll<HTMLElement>('[data-footer-block]')

    if (reduced) {
      gsap.set(blocks, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(blocks, {
        opacity: 0,
        y: 26,
        duration: 0.75,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: root,
          start: 'top 92%',
          toggleActions: 'play none none reverse',
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={rootRef}
      id="footer"
      className="relative border-t border-white/10 bg-gradient-to-b from-night via-deepPurple to-[#0b040f] pb-10 pt-16"
    >
      <div id="reserve" className="sr-only">
        Reservations anchor
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,159,28,0.12),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div data-footer-block>
            <p className="font-display text-lg font-semibold uppercase tracking-[0.28em] text-white">
              Solstice Shores
            </p>
            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted">
              A premium open-air beach nightclub on Cancún’s Caribbean edge—sunset rituals, curated
              sound, and nightlife that stays elegant even when the bass gets heavy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label={item.label}
                >
                  <span aria-hidden="true">{item.abbr}</span>
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <nav data-footer-block aria-label="Explore">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent/90">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {explore.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div data-footer-block>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent/90">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>
                  <a
                    href="mailto:hello@solsticeshores.mx"
                    className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    hello@solsticeshores.mx
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+529981234567"
                    className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    +52 998 123 4567
                  </a>
                </li>
                <li>Concierge · 4:00 PM — 4:00 AM</li>
              </ul>
            </div>

            <nav data-footer-block aria-label="Legal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent/90">
                Legal
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {legal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div
          data-footer-block
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Solstice Shores. All rights reserved.</p>
          <p className="text-white/35">Mock content for presentation purposes.</p>
        </div>
      </div>
    </footer>
  )
}
