import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocationSection } from './components/LocationSection'
import { PlaylistSection } from './components/PlaylistSection'

/**
 * Raíz de la landing: registra ScrollTrigger y refresca en resize.
 */
export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const onResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="relative min-h-dvh bg-[#120817] font-sans text-white antialiased">
      <div className="grain-overlay" aria-hidden />
      <Header />
      <main>
        <Hero />
        <LocationSection />
        <PlaylistSection />
      </main>
      <Footer />
    </div>
  )
}
