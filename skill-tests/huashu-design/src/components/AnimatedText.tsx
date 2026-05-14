import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  text: string
  level?: 2 | 3
  className?: string
}

/**
 * Título con revelado al scroll (palabras escalonadas).
 */
export default function AnimatedText({ text, level = 2, className }: Props) {
  const rootRef = useRef<HTMLHeadingElement>(null)
  const words = text.split(' ')

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = root.querySelectorAll<HTMLElement>('[data-anim-word]')

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })
    }, root)

    return () => ctx.revert()
  }, [text])

  const Tag = level === 2 ? 'h2' : 'h3'

  return (
    <Tag ref={rootRef} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.28em] inline-block last:mr-0">
          <span data-anim-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
