import { useState } from 'react';

const navItems = [
  { href: '#top', label: 'Home' },
  { href: '#location', label: 'Location' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#contact', label: 'Contact' },
] as const;

/** Barra superior fija con navegación adaptable a móvil. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night-950/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-baseline gap-2 font-display text-lg font-semibold tracking-tight text-snow"
        >
          <span className="relative">
            Solstice Shore
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-yellow transition-all duration-500 group-hover:w-full" />
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-muted sm:inline">
            Cancún
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-snow"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reservations"
            className="rounded-full bg-accent-yellow px-4 py-2 text-sm font-semibold text-night-950 shadow-[0_0_24px_rgba(255,228,94,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Book
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-snow md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-6 rounded-full bg-snow transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-6 rounded-full bg-snow transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-6 rounded-full bg-snow transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-night-950/95 px-4 py-4 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-snow"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#reservations"
            className="rounded-full bg-accent-yellow px-4 py-3 text-center text-sm font-semibold text-night-950"
            onClick={() => setOpen(false)}
          >
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
