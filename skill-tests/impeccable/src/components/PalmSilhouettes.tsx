import { useId } from 'react';

type PalmLayerProps = {
  className?: string;
  variant: 'back' | 'front';
};

/** Siluetas de palmeras estilizadas para capas de profundidad. */
export function PalmSilhouettes({ className, variant }: PalmLayerProps) {
  const uid = useId().replace(/:/g, '');
  const trunkGrad = `palm-trunk-${uid}`;
  const frondGrad = `palm-frond-${uid}`;
  const opacity = variant === 'back' ? 0.35 : 0.85;
  const blur = variant === 'back' ? 0.6 : 0;

  return (
    <svg
      className={className}
      viewBox="0 0 900 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ filter: blur ? `blur(${blur}px)` : undefined }}
    >
      <defs>
        <linearGradient id={trunkGrad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b030f" stopOpacity={opacity} />
          <stop offset="100%" stopColor="#050208" stopOpacity={opacity * 0.9} />
        </linearGradient>
        <linearGradient id={frondGrad} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#140818" stopOpacity={opacity} />
          <stop offset="100%" stopColor="#07030a" stopOpacity={opacity * 0.95} />
        </linearGradient>
      </defs>
      {/* Grupo izquierdo */}
      <g transform="translate(-40 20) scale(1.05)">
        <path
          d="M120 480 C118 380 125 300 140 220"
          stroke={`url(#${trunkGrad})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M140 240 C60 200 20 140 10 80 M140 250 C200 190 240 120 260 60 M135 260 C95 210 40 170 0 150 M145 270 C210 240 280 220 340 200"
          stroke={`url(#${frondGrad})`}
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M130 300 C70 280 30 250 5 230 M150 320 C220 300 290 290 360 285"
          stroke={`url(#${frondGrad})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>
      {/* Grupo derecho */}
      <g transform="translate(520 10) scale(1.15)">
        <path
          d="M220 490 C222 390 215 310 198 230"
          stroke={`url(#${trunkGrad})`}
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M198 250 C280 200 330 130 350 70 M195 260 C140 210 90 160 50 130 M200 270 C260 240 320 220 390 210 M188 285 C230 250 270 220 310 200"
          stroke={`url(#${frondGrad})`}
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M205 320 C270 300 340 290 410 285 M190 340 C130 320 70 300 20 290"
          stroke={`url(#${frondGrad})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>
      {/* Palmera central lejana */}
      <g transform="translate(360 40) scale(0.72)" opacity={variant === 'back' ? 0.9 : 0.55}>
        <path
          d="M120 470 C118 360 122 260 132 180"
          stroke={`url(#${trunkGrad})`}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M132 200 C70 170 30 120 15 70 M132 205 C190 170 235 120 255 75 M128 215 C90 190 50 170 20 160 M136 225 C200 210 260 200 310 195"
          stroke={`url(#${frondGrad})`}
          strokeWidth="16"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
