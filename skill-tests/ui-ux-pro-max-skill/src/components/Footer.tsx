import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

function IconInstagram(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m5.5-3.5a1.2 1.2 0 0 1 1.2 1.2 1.2 1.2 0 0 1-1.2 1.2 1.2 1.2 0 0 1-1.2-1.2 1.2 1.2 0 0 1 1.2-1.2Z"
      />
    </svg>
  )
}

function IconTikTok(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
      <path
        fill="currentColor"
        d="M14.5 3h3.2c.2 1.6.9 2.8 2.3 3.4V9c-1.1-.2-2.1-.7-2.9-1.4v7.1A5.4 5.4 0 1 1 8 9.1h2.2a3.2 3.2 0 1 0 4.3 3V3Z"
      />
    </svg>
  )
}

function IconSpotify(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.64 14.36a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.56-1.16a.75.75 0 0 1-.35-1.46c4.56-1.04 8.46-.6 11.64 1.3.35.21.46.66.25 1.02Zm1.23-2.74a.94.94 0 0 1-1.29.31c-3.23-1.98-8.16-2.55-11.97-1.4a.94.94 0 0 1-.55-1.8c4.35-1.32 9.74-.68 13.5 1.58a.94.94 0 0 1 .31 1.31Zm.11-2.86c-3.87-2.3-10.27-2.51-13.97-1.39a1.12 1.12 0 1 1-.65-2.15c4.26-1.29 11.35-1.05 15.73 1.55a1.12 1.12 0 0 1-1.11 1.99Z"
      />
    </svg>
  )
}

const legal = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
  { href: '#', label: 'Cookie Policy' },
  { href: '#', label: 'Reservations Policy' },
] as const

const explore = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#reservaciones', label: 'Reservaciones' },
] as const

/** Pie de página con enlaces legales y redes. */
export function Footer() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const blocks = root.querySelectorAll<HTMLElement>('[data-footer-block]')
      if (!blocks.length) return

      if (reduced) {
        gsap.set(blocks, { clearProps: 'all' })
        return
      }

      gsap.set(blocks, { opacity: 0, y: 22 })
      gsap.to(blocks, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: root,
          start: 'top 92%',
          toggleActions: 'play none none reverse',
        },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <footer ref={rootRef} className="relative border-t border-white/10 bg-night pb-10 pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay bg-grain-noise" aria-hidden />

      <div className="relative mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <div
          id="reservaciones"
          tabIndex={-1}
          className="scroll-mt-28 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 shadow-card backdrop-blur-xl outline-none sm:p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div data-footer-block className="max-w-xl space-y-3">
              <p className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">ORILLA</p>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Open-air beach nightclub in Cancún’s Hotel Zone — sunset sessions, curated cocktails, and a sound
                system tuned for the sea breeze.
              </p>
            </div>
            <a
              href="mailto:reservas@orilla.mx"
              className="inline-flex min-h-12 items-center justify-center self-start rounded-full bg-glow px-8 text-sm font-bold uppercase tracking-wide text-night shadow-glow transition hover:brightness-105 focus-visible:outline-offset-4 lg:self-end"
            >
              Solicitar mesa
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div data-footer-block className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-glow/90">Explorar</p>
            <ul className="space-y-2 text-sm text-white/75">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-footer-block className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-glow/90">Contacto</p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="tel:+529988000000" className="transition hover:text-white">
                  +52 998 800 0000
                </a>
              </li>
              <li>
                <a href="mailto:hola@orilla.mx" className="transition hover:text-white">
                  hola@orilla.mx
                </a>
              </li>
              <li className="text-white/60">Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.</li>
            </ul>
          </div>

          <div data-footer-block className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-glow/90">Legal</p>
            <ul className="space-y-2 text-sm text-white/75">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-footer-block className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-glow/90">Redes</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de ORILLA"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-glow/50 hover:text-glow"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok de ORILLA"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-glow/50 hover:text-glow"
              >
                <IconTikTok className="h-5 w-5" />
              </a>
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify de ORILLA"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-glow/50 hover:text-glow"
              >
                <IconSpotify className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          data-footer-block
          className="flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} ORILLA Beach Nightclub. Cancún, México.</p>
          <p className="text-white/45">Proyecto demo — enlaces y datos son ilustrativos.</p>
        </div>
      </div>
    </footer>
  )
}
