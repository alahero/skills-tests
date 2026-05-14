type PalmProps = {
  className?: string
  mirror?: boolean
}

/**
 * Palmera estilizada (silueta) para composición del héroe.
 */
export function PalmSilhouette({ className, mirror }: PalmProps) {
  return (
    <svg
      className={`${className ?? ''} ${mirror ? 'scale-x-[-1]' : ''} text-[#06020a]`}
      viewBox="0 0 120 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="palmSolid" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#050208" />
          <stop offset="1" stopColor="#1b0b2e" />
        </linearGradient>
      </defs>
      <g fill="url(#palmSolid)">
        <path d="M56 218c2-18 4-36 6-54 2-18 4-36 6-52-8-6-14-14-18-24-4-10-6-22-6-36 0-14 4-28 12-42 8-14 20-28 36-42-18 8-32 18-42 30-10 12-16 26-16 42 0 16 6 30 16 42 10 12 24 22 42 30Z" />
        <ellipse cx="24" cy="46" rx="34" ry="11" transform="rotate(-42 24 46)" />
        <ellipse cx="92" cy="52" rx="34" ry="11" transform="rotate(38 92 52)" />
        <ellipse cx="58" cy="28" rx="40" ry="12" transform="rotate(-6 58 28)" />
        <ellipse cx="34" cy="78" rx="30" ry="10" transform="rotate(-68 34 78)" />
        <ellipse cx="86" cy="82" rx="30" ry="10" transform="rotate(62 86 82)" />
        <ellipse cx="60" cy="64" rx="36" ry="11" />
        <rect x="54" y="96" width="12" height="124" rx="5" />
      </g>
    </svg>
  )
}

/**
 * Palmera más suave para capa posterior (atmósfera lejana).
 */
export function PalmSilhouetteSoft({ className, mirror }: PalmProps) {
  return (
    <svg
      className={`${className ?? ''} ${mirror ? 'scale-x-[-1]' : ''}`}
      viewBox="0 0 120 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="palmSoftFill" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#120817" stopOpacity="0.15" />
          <stop offset="1" stopColor="#1b0b2e" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <g fill="url(#palmSoftFill)">
        <ellipse cx="58" cy="36" rx="44" ry="13" transform="rotate(-8 58 36)" />
        <ellipse cx="26" cy="58" rx="32" ry="11" transform="rotate(-48 26 58)" />
        <ellipse cx="92" cy="60" rx="32" ry="11" transform="rotate(44 92 60)" />
        <ellipse cx="58" cy="74" rx="38" ry="12" />
        <rect x="54" y="88" width="10" height="132" rx="5" />
      </g>
    </svg>
  )
}
