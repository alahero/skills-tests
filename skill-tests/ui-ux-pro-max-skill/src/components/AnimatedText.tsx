import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  text: string
  className?: string
  delay?: number
  id?: string
  /** Idioma del título para lectores y tipografía */
  lang?: string
}

/**
 * Título con revelado por palabras al hacer scroll.
 * Respeta prefers-reduced-motion.
 */
export function AnimatedText({ text, className = '', delay = 0, id, lang = 'en' }: Props) {
  const rootRef = useRef<HTMLHeadingElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const words = root.querySelectorAll<HTMLElement>('[data-word]')
    if (!words.length) return

    if (reduced) {
      gsap.set(words, { clearProps: 'all' })
      return
    }

    gsap.set(words, { opacity: 0, y: 48, rotateX: -8, transformOrigin: '50% 100%' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top 82%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.to(words, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.045,
      delay,
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [text, delay, reduced])

  const parts = text.split(' ').filter(Boolean)

  return (
    <h2 ref={rootRef} id={id} lang={lang} className={className}>
      <span className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1">
        {parts.map((w, i) => (
          <span key={`${w}-${i}`} data-word className="inline-block will-change-transform">
            {w}
          </span>
        ))}
      </span>
    </h2>
  )
}
