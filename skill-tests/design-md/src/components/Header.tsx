import { useState } from 'react'

const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#location', label: 'Location' },
  { href: '#sound', label: 'Sound' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Barra de navegación fija con estética glass y menú móvil accesible.
 */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night-950/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#experience"
          className="font-display text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          SOLIS
          <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-accent-yellow/90 sm:text-xs">
            Beach
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reserve"
            className="rounded-full bg-accent-yellow px-4 py-2 text-sm font-semibold text-night-950 shadow-[0_0_24px_rgba(255,228,94,0.35)] transition hover:bg-white"
          >
            Reserve
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/5 bg-night-950/95 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reserve"
            className="mt-2 rounded-full bg-accent-yellow px-4 py-3 text-center text-sm font-semibold text-night-950"
            onClick={() => setOpen(false)}
          >
            Reserve
          </a>
        </nav>
      </div>
    </header>
  )
}
