import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const footerNav = [
  { href: '#experience', label: 'Experience' },
  { href: '#location', label: 'Location' },
  { href: '#sound', label: 'Sound' },
  { href: '#contact', label: 'Contact' },
]

const legal = [
  { href: '#privacy', label: 'Privacy Policy' },
  { href: '#terms', label: 'Terms & Conditions' },
  { href: '#cookies', label: 'Cookie Policy' },
  { href: '#reservations-policy', label: 'Reservations Policy' },
]

const social = [
  { href: 'https://instagram.com/', label: 'Instagram', icon: 'ig' },
  { href: 'https://tiktok.com/', label: 'TikTok', icon: 'tt' },
  { href: 'https://open.spotify.com/', label: 'Spotify', icon: 'sp' },
] as const

/**
 * Pie de página con marca, enlaces legales simulados y redes sociales.
 */
export function Footer() {
  const innerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const inner = innerRef.current
    if (!inner || reduced) return

    const blocks = inner.querySelectorAll<HTMLElement>('[data-footer-block]')
    gsap.set(blocks, { opacity: 0, y: 28 })

    const tween = gsap.to(blocks, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: inner,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced])

  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 border-t border-white/10 bg-night-950 pb-12 pt-16 sm:pb-16 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-yellow/40 to-transparent"
        aria-hidden
      />
      <div ref={innerRef} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div data-footer-block>
            <p className="font-display text-2xl font-bold tracking-tight text-white">
              SOLIS
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Outdoor beach nightclub on the Caribbean — golden hour cocktails,
              resident DJs, and open-air energy until the stars take over.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-accent-yellow/50 hover:bg-accent-yellow/15 hover:text-accent-yellow"
                  aria-label={s.label}
                >
                  <SocialGlyph kind={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div data-footer-block>
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-accent-yellow">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@solisbeach.mx"
                  className="text-sm text-muted transition hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-sm text-muted transition hover:text-white"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#reserve"
                  className="text-sm text-muted transition hover:text-white"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          <div data-footer-block>
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-accent-yellow">
              Legal
            </h2>
            <ul className="mt-4 space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-white/45">
              Phone placeholder: +52 (998) 000-0000 · concierge@solisbeach.mx
            </p>
          </div>
        </div>

        <div
          data-footer-block
          className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Solis Beach Club. Cancún, México.</p>
          <p className="max-w-md sm:text-right">
            Mockup site for portfolio — not a real venue. Links are placeholders.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialGlyph({ kind }: { kind: string }) {
  if (kind === 'ig') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    )
  }
  if (kind === 'tt') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.5 3h-2.2c.2 2.2-1.2 4.3-3.5 5v2.4c2-.2 3.8-1 5-2.4V15c0 3.3-2.7 6-6 6-1.6 0-3.1-.6-4.2-1.7l1.4-1.4c.8.8 1.9 1.3 3.1 1.3 2.5 0 4.5-2 4.5-4.5V9.5c-1.3 1.5-3.2 2.4-5.3 2.5V9.6c2.4-.9 4-3.1 4.2-5.6H12v-.1z" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-.641-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.561 8.52-1.141 11.64 1.32.42.18.479.659.301 1.02z" />
    </svg>
  )
}
