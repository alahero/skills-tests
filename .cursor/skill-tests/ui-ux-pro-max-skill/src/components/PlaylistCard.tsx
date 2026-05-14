/** Mini ecualizador decorativo para tarjetas de playlist. */
export function EqualizerBars() {
  const delays = ['0ms', '120ms', '240ms', '160ms', '80ms']
  const heights = ['45%', '70%', '55%', '85%', '50%']

  return (
    <div className="flex h-10 items-end gap-1" aria-hidden>
      {delays.map((d, i) => (
        <span
          key={i}
          className="eq-bar w-[3px] rounded-full bg-gradient-to-t from-amber/40 to-glow"
          style={{ animationDelay: d, height: heights[i] }}
        />
      ))}
    </div>
  )
}

export type PlaylistCardProps = {
  title: string
  description: string
  stat: string
}

/** Tarjeta de categoría musical con vidrio y elevación al hover. */
export function PlaylistCard({ title, description, stat }: PlaylistCardProps) {
  return (
    <article
      data-playlist-card
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-card backdrop-blur-xl transition duration-300 will-change-transform hover:-translate-y-1 hover:border-glow/35 hover:shadow-glow"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,159,28,0.35),transparent_65%)] opacity-60 blur-2xl transition group-hover:opacity-90"
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-3">
          <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">{title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{description}</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-glow/90">{stat}</p>
        </div>
        <EqualizerBars />
      </div>
    </article>
  )
}
