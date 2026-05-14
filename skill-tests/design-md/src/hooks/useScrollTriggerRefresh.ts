import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Refresca ScrollTrigger en resize para evitar desalineaciones. */
export function useScrollTriggerRefresh() {
  useEffect(() => {
    let frame: number
    const onResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => ScrollTrigger.refresh())
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [])
}
