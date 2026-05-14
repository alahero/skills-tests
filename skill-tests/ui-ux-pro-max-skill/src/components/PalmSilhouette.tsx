type PalmProps = {
  className?: string
  'aria-hidden'?: boolean
}

/** Silueta de palmera compuesta (capas decorativas). */
export function PalmSilhouette({ className = '', ...rest }: PalmProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 520"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M104 520h14V232c-1-78 10-142 34-190 26-52 66-86 108-104-38 12-72 38-98 78-28 44-44 102-44 168V520Z" />
        <path
          opacity="0.92"
          d="M112 228c-24-78-8-146 52-206 26-28 58-48 94-58-44 16-80 46-102 88-22 40-30 90-26 142l-18 34Z"
        />
        <path
          opacity="0.88"
          d="M98 248C66 168 78 98 138 46c16-12 34-20 54-24-46 18-84 54-102 102-16 42-12 88 4 128l4 96Z"
        />
        <path opacity="0.9" d="M118 210c28-86 86-140 156-152-54 14-98 50-124 98-22 40-30 86-26 134l-6 30Z" />
      </g>
    </svg>
  )
}

/** Variante espejo para composición bilateral. */
export function PalmSilhouetteMirror(props: PalmProps) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 220 520"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden={props['aria-hidden']}
    >
      <g transform="scale(-1 1) translate(-220 0)" fill="currentColor">
        <path d="M104 520h14V232c-1-78 10-142 34-190 26-52 66-86 108-104-38 12-72 38-98 78-28 44-44 102-44 168V520Z" />
        <path
          opacity="0.92"
          d="M112 228c-24-78-8-146 52-206 26-28 58-48 94-58-44 16-80 46-102 88-22 40-30 90-26 142l-18 34Z"
        />
        <path
          opacity="0.88"
          d="M98 248C66 168 78 98 138 46c16-12 34-20 54-24-46 18-84 54-102 102-16 42-12 88 4 128l4 96Z"
        />
        <path opacity="0.9" d="M118 210c28-86 86-140 156-152-54 14-98 50-124 98-22 40-30 86-26 134l-6 30Z" />
      </g>
    </svg>
  )
}
