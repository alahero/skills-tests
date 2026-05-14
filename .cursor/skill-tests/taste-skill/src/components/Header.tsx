import { useEffect, useId, useState } from 'react'
import { List, X } from '@phosphor-icons/react'

const navItems = [
  { label: 'Experience', href: '#inicio' },
  { label: 'Location', href: '#ubicacion' },
  { label: 'Sound', href: '#playlist' },
  { label: 'Reservations', href: '#contacto' },
] as const

/**
 * Barra superior fija con navegación y menú compacto en móvil.
 */
export function Header() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#120817]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          AUREA
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-club-muted md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe45e]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-[#ffe45e]/40 hover:bg-white/10 active:scale-[0.98]"
          >
            Reserve Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      <div
        id={panelId}
        className={`md:hidden border-t border-white/10 bg-[#120817]/95 backdrop-blur-2xl ${open ? 'block' : 'hidden'}`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-base font-medium"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-white/90 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 rounded-full bg-gradient-to-r from-[#e85d1c] to-[#ff9f1c] px-4 py-3 text-center text-sm font-semibold text-[#120817] active:scale-[0.99]"
            onClick={() => setOpen(false)}
          >
            Reserve Now
          </a>
        </nav>
      </div>
    </header>
  )
}
