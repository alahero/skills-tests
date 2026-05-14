import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

type AnimatedTextProps = {
  text: string
  className?: string
  as?: 'h2' | 'h3' | 'p'
  children?: ReactNode
  id?: string
}

/**
 * Revelado por palabras al entrar en vista (GSAP + ScrollTrigger).
 */
export function AnimatedText({
  text,
  className,
  as: Tag = 'h2',
  children,
  id,
}: AnimatedTextProps) {
  const rootRef = useRef<HTMLHeadingElement | HTMLParagraphElement>(null)
  const reduced = usePrefersReducedMotion()
  const words = text.split(' ').filter(Boolean)

  useEffect(() => {
    if (reduced) return
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const targets = root.querySelectorAll<HTMLElement>('[data-anim-word]')
      gsap.fromTo(
        targets,
        { yPercent: 108, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.82,
          stagger: 0.055,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            end: 'top 58%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [reduced, text])

  return (
    <Tag ref={rootRef} className={className} id={id}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="mr-[0.28em] inline-block overflow-hidden align-baseline last:mr-0"
        >
          <span
            data-anim-word
            className="inline-block translate-y-0 will-change-transform"
          >
            {word}
          </span>
        </span>
      ))}
      {children}
    </Tag>
  )
}
