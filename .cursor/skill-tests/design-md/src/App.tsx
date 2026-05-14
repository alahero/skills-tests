import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocationSection } from './components/LocationSection'
import { PlaylistSection } from './components/PlaylistSection'
import { Footer } from './components/Footer'
import { useScrollTriggerRefresh } from './hooks/useScrollTriggerRefresh'

/**
 * Landing principal: club nocturno tropical con secciones y animación GSAP.
 */
function App() {
  useScrollTriggerRefresh()

  return (
    <>
      <a
        href="#experience"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-block focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-nowrap focus:rounded-lg focus:bg-accent-yellow focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-night-950 focus:shadow-lg"
      >
        Skip to content
      </a>
      <div className="grain" aria-hidden />
      <Header />
      <main>
        <Hero />
        <LocationSection />
        <PlaylistSection />
      </main>
      <Footer />
    </>
  )
}

export default App
