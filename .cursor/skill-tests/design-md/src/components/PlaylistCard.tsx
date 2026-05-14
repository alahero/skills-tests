import type { CSSProperties, ReactNode } from 'react'

type PlaylistCardProps = {
  title: string
  description: string
  meta: string
  accent?: string
  /** Contenido opcional encima del título (p. ej. ícono) */
  adornment?: ReactNode
}

/**
 * Tarjeta de categoría musical con barras decorativas tipo ecualizador.
 */
export function PlaylistCard({
  title,
  description,
  meta,
  accent = 'from-sunset-deep/30 to-night-800/80',
  adornment,
}: PlaylistCardProps) {
  return (
    <article
      className={`playlist-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1 hover:border-accent-yellow/25 hover:shadow-[0_20px_50px_-20px_rgba(232,93,28,0.45)] sm:p-7`}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-yellow/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {adornment}
          <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {title}
          </h3>
        </div>
        <EqualizerBars />
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted sm:text-[15px]">
        {description}
      </p>
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-yellow/90">
        {meta}
      </p>
    </article>
  )
}

function EqualizerBars() {
  return (
    <div
      className="flex h-10 shrink-0 items-end gap-0.5 opacity-80"
      aria-hidden
    >
      {[0.35, 0.55, 0.85, 0.5, 0.7, 0.4, 0.9, 0.45].map((h, i) => (
        <span
          key={i}
          className="eq-bar w-[3px] rounded-full bg-accent-yellow/80"
          style={
            {
              height: `${h * 100}%`,
              animationDelay: `${i * 0.08}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
