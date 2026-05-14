export type PlaylistItem = {
  title: string
  description: string
  stat: string
}

type PlaylistCardProps = {
  item: PlaylistItem
  className?: string
}

/**
 * Tarjeta de categoría musical con barras tipo ecualizador decorativas.
 */
export function PlaylistCard({ item, className = '' }: PlaylistCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_70px_rgba(0,0,0,0.35)] transition will-change-transform hover:-translate-y-1 hover:border-[#ffe45e]/25 ${className}`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e85d1c]/20 blur-3xl transition group-hover:bg-[#ff9f1c]/25"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-club-muted sm:text-base">
            {item.description}
          </p>
        </div>

        <div
          className="eq-bars flex h-14 w-10 shrink-0 items-end justify-center gap-1 rounded-2xl border border-white/10 bg-black/25 px-2 py-2"
          aria-hidden
        >
          <span className="h-10 w-[3px]" />
          <span className="h-10 w-[3px]" />
          <span className="h-10 w-[3px]" />
          <span className="h-10 w-[3px]" />
          <span className="h-10 w-[3px]" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
        <span>{item.stat}</span>
        <span className="text-[#ffe45e]/90">Aurea mix</span>
      </div>
    </article>
  )
}
