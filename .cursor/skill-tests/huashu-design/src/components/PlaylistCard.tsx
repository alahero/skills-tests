import type { ComponentPropsWithoutRef } from 'react'

type Props = {
  title: string
  description: string
  meta: string
  bars?: number
} & ComponentPropsWithoutRef<'article'>

/**
 * Tarjeta de playlist con mini-ecualizador decorativo.
 */
export default function PlaylistCard({
  title,
  description,
  meta,
  bars = 5,
  className,
  ...rest
}: Props) {
  const heightsPx = [14, 22, 12, 26, 18]

  return (
    <article
      {...rest}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-glow-sm ${className ?? ''}`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/15 blur-3xl transition group-hover:bg-accent/20" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        </div>
        <div className="flex h-12 items-end gap-1" aria-hidden="true">
          {Array.from({ length: bars }).map((_, i) => (
            <span
              key={i}
              className="eq-bar w-1 rounded-full bg-gradient-to-t from-ember to-accent"
              style={{
                animationDelay: `${i * 0.12}s`,
                height: `${heightsPx[i % heightsPx.length]}px`,
              }}
            />
          ))}
        </div>
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">{meta}</p>
    </article>
  )
}
