import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, type RefObject } from 'react';

/** Refresca ScrollTrigger tras cambios de tamaño para evitar saltos en layout. */
export function useScrollTriggerSafeRefresh() {
  useEffect(() => {
    let timeoutId = 0;

    const scheduleRefresh = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 140);
    };

    window.addEventListener('resize', scheduleRefresh);
    window.addEventListener('orientationchange', scheduleRefresh);

    return () => {
      window.removeEventListener('resize', scheduleRefresh);
      window.removeEventListener('orientationchange', scheduleRefresh);
      window.clearTimeout(timeoutId);
    };
  }, []);
}

/** Pulso ligero del sol sin depender de layout (respeta reduced motion afuera). */
export function useSunAmbientMotion(
  sunRef: RefObject<HTMLElement | null>,
  glowRef: RefObject<HTMLElement | null>,
  active: boolean
) {
  useEffect(() => {
    if (!active || !sunRef.current || !glowRef.current) return;

    const sun = sunRef.current;
    const glow = glowRef.current;

    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } });
    tl.to(sun, { scale: 1.045, duration: 5.8 }, 0).to(glow, { opacity: 0.72, duration: 4.9 }, 0);

    return () => {
      tl.kill();
      gsap.set([sun, glow], { clearProps: 'scale,opacity' });
    };
  }, [active, sunRef, glowRef]);
}
