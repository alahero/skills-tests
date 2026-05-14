import { useEffect, useRef, useState } from 'react'

const nav = [
  { href: '#location', label: 'Location' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#footer', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) firstLinkRef.current?.focus()
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-night/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span
            className="inline-flex h-2 w-2 rounded-full bg-accent shadow-glow-sm"
            aria-hidden="true"
          />
          Solstice Shores
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reserve"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-inner shadow-white/5 transition hover:border-accent/60 hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Reserve
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#reserve"
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            Reserve
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <span aria-hidden="true" className="flex flex-col gap-1">
              <span
                className={`block h-0.5 w-5 origin-center rounded bg-white transition ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 rounded bg-white transition ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 origin-center rounded bg-white transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? 'pointer-events-auto max-h-64 opacity-100' : 'pointer-events-none max-h-0 opacity-0'} overflow-hidden border-b border-white/10 bg-night/95 backdrop-blur-xl transition-[max-height,opacity] duration-300`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile primary">
          {nav.map((item, i) => (
            <a
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
