import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  SpotifyLogo,
  TiktokLogo,
} from '@phosphor-icons/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const footerNav = [
  { label: 'Experience', href: '#inicio' },
  { label: 'Location', href: '#ubicacion' },
  { label: 'Sound', href: '#playlist' },
  { label: 'Reservations', href: '#contacto' },
] as const

const legal = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
  { label: 'Reservations Policy', href: '#reservations-policy' },
] as const

const social = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: InstagramLogo,
  },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: TiktokLogo },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/',
    icon: SpotifyLogo,
  },
] as const

/**
 * Pie de página con enlaces legales simulados y datos de contacto.
 */
export function Footer() {
  const reduced = usePrefersReducedMotion()
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (reduced) return
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll('[data-footer-block]'),
      )
      gsap.fromTo(
        blocks,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <footer
      id="contacto"
      ref={rootRef}
      className="relative border-t border-white/10 bg-gradient-to-b from-[#120817] to-[#0b040f] pb-10 pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            'radial-gradient(800px 420px at 20% 0%, rgba(232,93,28,0.18), transparent 55%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-footer-block className="lg:col-span-5">
            <p className="font-display text-2xl font-extrabold tracking-tight text-white">
              AUREA
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-club-muted sm:text-base">
              A premium open-air beach nightclub in Cancún—where sunset light, palm
              silhouettes, and deep bass meet the Caribbean night.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#ffe45e]/35 hover:bg-white/10 active:scale-[0.98]"
                  aria-label={label}
                >
                  <Icon size={20} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          <div
            data-footer-block
            className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Navigate
              </p>
              <ul className="mt-4 space-y-3 text-sm text-club-muted">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe45e]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-club-muted">
                <li className="flex items-start gap-2">
                  <EnvelopeSimple
                    className="mt-0.5 shrink-0 text-[#ff9f1c]"
                    size={18}
                    weight="duotone"
                  />
                  <a
                    href="mailto:concierge@aurea-beach.mx"
                    className="transition hover:text-white"
                  >
                    concierge@aurea-beach.mx
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 shrink-0 text-[#ff9f1c]"
                    size={18}
                    weight="duotone"
                  />
                  <span>Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.</span>
                </li>
                <li>
                  <a
                    href="#ubicacion"
                    className="font-semibold text-white/90 underline decoration-white/20 underline-offset-4 transition hover:decoration-[#ffe45e]/70"
                  >
                    Location details
                  </a>
                </li>
                <li>
                  <a
                    href="#inicio"
                    className="font-semibold text-white/90 underline decoration-white/20 underline-offset-4 transition hover:decoration-[#ffe45e]/70"
                  >
                    Reservations desk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Legal
              </p>
              <ul className="mt-4 space-y-3 text-sm text-club-muted">
                {legal.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe45e]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurea Beach Club. All rights reserved.</p>
          <p className="max-w-xl leading-relaxed">
            Mock links are placeholders for production routing and third-party
            destinations.
          </p>
        </div>
      </div>
    </footer>
  )
}
