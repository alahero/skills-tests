import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import LocationSection from './components/LocationSection.tsx'
import PlaylistSection from './components/PlaylistSection.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  useEffect(() => {
    // Refresco de triggers tras cambios de layout (resize, fuentes, etc.)
    const onResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="relative z-10 min-h-screen bg-night">
      <a
        href="#main-content"
        className="absolute left-[-9999px] top-4 z-[70] rounded-full bg-white px-4 py-2 text-sm font-semibold text-night shadow-lg transition focus:left-4 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-accent"
      >
        Skip to main content
      </a>
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <Hero />
        <LocationSection />
        <PlaylistSection />
      </main>
      <Footer />
    </div>
  )
}
