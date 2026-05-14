type PlaylistCardProps = {
  title: string;
  description: string;
  meta: string;
  accent: 'amber' | 'magenta' | 'violet' | 'ember' | 'gold';
  className?: string;
};

const accentMap: Record<
  PlaylistCardProps['accent'],
  { ring: string; glow: string; chip: string }
> = {
  amber: {
    ring: 'border-sunset-amber/35',
    glow: 'shadow-[0_0_48px_rgba(255,159,28,0.18)]',
    chip: 'bg-sunset-amber/15 text-sunset-amber',
  },
  magenta: {
    ring: 'border-fuchsia-500/35',
    glow: 'shadow-[0_0_48px_rgba(217,70,239,0.16)]',
    chip: 'bg-fuchsia-500/15 text-fuchsia-200',
  },
  violet: {
    ring: 'border-violet-500/35',
    glow: 'shadow-[0_0_48px_rgba(139,92,246,0.16)]',
    chip: 'bg-violet-500/15 text-violet-100',
  },
  ember: {
    ring: 'border-sunset-deep/40',
    glow: 'shadow-[0_0_48px_rgba(232,93,28,0.2)]',
    chip: 'bg-sunset-deep/15 text-sunset-amber',
  },
  gold: {
    ring: 'border-accent-yellow/35',
    glow: 'shadow-[0_0_48px_rgba(255,228,94,0.18)]',
    chip: 'bg-accent-yellow/12 text-accent-yellow',
  },
};

/** Tarjeta de categoría musical con micro animación tipo ecualizador. */
export function PlaylistCard({ title, description, meta, accent, className }: PlaylistCardProps) {
  const a = accentMap[accent];

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border ${a.ring} bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 ${a.glow} backdrop-blur-xl transition-transform duration-500 will-change-transform hover:-translate-y-1 ${className ?? ''}`}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
        style={{
          background:
            accent === 'magenta'
              ? 'radial-gradient(circle, rgba(244,114,182,0.45), transparent 70%)'
              : accent === 'violet'
                ? 'radial-gradient(circle, rgba(167,139,250,0.45), transparent 70%)'
                : 'radial-gradient(circle, rgba(255,159,28,0.45), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${a.chip}`}>
            Mood
          </p>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-snow">{title}</h3>
        </div>
        <div className="flex h-12 items-end gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="eq-bar w-1 rounded-full bg-gradient-to-t from-sunset-deep to-accent-yellow"
              style={{ height: `${10 + i * 5}px`, animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-snow/70">{meta}</p>
    </article>
  );
}
