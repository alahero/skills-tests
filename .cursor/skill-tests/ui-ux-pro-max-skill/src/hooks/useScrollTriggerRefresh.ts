import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Refresca ScrollTrigger al redimensionar (debounce ligero). */
export function useScrollTriggerRefresh(): void {
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined

    const onResize = () => {
      if (t) clearTimeout(t)
      t = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 180)
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (t) clearTimeout(t)
    }
  }, [])
}
