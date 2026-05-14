import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createElement, useLayoutEffect, useRef, type ElementType, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

type AnimatedTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
};

/**
 * Revelado por palabras al entrar en viewport.
 * Respeta prefers-reduced-motion dejando el texto visible sin animación.
 */
export function AnimatedText({ text, as: Tag = 'h2', className, delay = 0, id }: AnimatedTextProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const words = root.querySelectorAll<HTMLElement>('[data-anim-word]');

    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 110, opacity: 0 });
      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.055,
        delay,
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, root);

    return () => ctx.revert();
  }, [text, reduced, delay]);

  const pieces = text.split(' ');

  const children: ReactNode = pieces.map((word, index) => (
    <span key={`${word}-${index}`} className="inline-block overflow-hidden align-baseline">
      <span data-anim-word className="inline-block will-change-transform">
        {word}
        {index < pieces.length - 1 ? '\u00a0' : ''}
      </span>
    </span>
  ));

  return createElement(Tag, { ref: rootRef, className, id }, children);
}
