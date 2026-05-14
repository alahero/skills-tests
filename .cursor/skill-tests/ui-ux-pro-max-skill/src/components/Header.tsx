const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#reservaciones', label: 'Reservaciones' },
]

/** Barra superior con navegación y estética glass sutil. */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-plum/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="font-display text-lg font-extrabold tracking-[-0.04em] text-white sm:text-xl"
        >
          ORILLA
          <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.35em] text-glow/90 sm:inline">
            Cancún
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-glow focus-visible:outline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservaciones"
          className="rounded-full bg-gradient-to-r from-ember to-amber px-4 py-2 text-xs font-semibold uppercase tracking-wide text-night shadow-glow transition hover:brightness-110 sm:text-sm"
        >
          Reservar
        </a>
      </div>

      <nav
        aria-label="Principal móvil"
        className="flex max-w-6xl flex-wrap gap-x-4 gap-y-2 border-t border-white/5 px-4 py-2 sm:px-6 md:hidden"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs font-semibold uppercase tracking-wide text-white/75 hover:text-glow"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
