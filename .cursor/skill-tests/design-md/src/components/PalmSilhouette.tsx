type PalmProps = {
  className?: string
  /** Variante visual para capas distintas */
  variant?: 'dense' | 'sparse'
  'aria-hidden'?: boolean
}

/**
 * Silueta de palmera decorativa (SVG inline, sin imagen externa).
 */
export function PalmSilhouette({
  className = '',
  variant = 'dense',
  'aria-hidden': ariaHidden = true,
}: PalmProps) {
  if (variant === 'sparse') {
    return (
      <svg
        className={className}
        viewBox="0 0 200 420"
        fill="currentColor"
        aria-hidden={ariaHidden}
        focusable="false"
      >
        <path d="M100 418c-2-120 8-200 32-280C88 60 40 20 8 4c8 36 52 88 92 120-40-72-48-132-44-176 28 40 60 100 76 156 12-80 8-160-4-220 24 48 40 120 44 196 20-56 28-112 24-168 16 56 20 128 8 208 36-40 64-92 72-140-24 72-60 132-100 176 24 48 36 108 40 168-28-52-56-88-88-104-4 64-12 132-28 200h-4z" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 220 440"
      fill="currentColor"
      aria-hidden={ariaHidden}
      focusable="false"
    >
      <path d="M110 436c-4-140 12-228 40-312-48-52-92-120-100-188 36 28 72 76 96 128C118 88 82 32 44 0c12 52 48 120 80 184-8-72-4-148 12-212 20 64 36 140 40 220 24-68 36-140 32-208 24 72 32 152 24 232 32-48 56-104 64-156-16 80-48 148-88 204 16 56 24 120 24 184-32-60-68-100-104-116-8 72-20 148-40 224h-18z" />
    </svg>
  )
}
