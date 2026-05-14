import { useReducedMotion } from '../hooks/useReducedMotion'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Tag = 'h1' | 'h2' | 'h3' | 'p'

type AnimatedTextProps = {
  as?: Tag
  children: string
  className?: string
  id?: string
}

/**
 * Título con revelado por palabras al entrar en vista (GSAP + ScrollTrigger).
 */
export function AnimatedText({
  as: Tag = 'h2',
  children,
  className = '',
  id,
}: AnimatedTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    const inners = root.querySelectorAll<HTMLElement>('[data-anim-word]')
    gsap.set(inners, { yPercent: 108, opacity: 0.01 })

    const tween = gsap.to(inners, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.045,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: root,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [children, reduced])

  if (reduced) {
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    )
  }

  const words = children.split(' ').filter(Boolean)

  return (
    <Tag id={id} className={className}>
      <span ref={rootRef} className="contents">
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="inline-block overflow-hidden align-top">
            <span
              data-anim-word
              className="inline-block will-change-transform [backface-visibility:hidden]"
            >
              {w}
              {i < words.length - 1 ? '\u00A0' : ''}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  )
}
