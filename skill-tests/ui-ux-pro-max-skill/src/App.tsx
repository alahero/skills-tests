import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocationSection } from './components/LocationSection'
import { PlaylistSection } from './components/PlaylistSection'
import { Footer } from './components/Footer'
import { useScrollTriggerRefresh } from './hooks/useScrollTriggerRefresh'

/** Composición principal del sitio promocional. */
export default function App() {
  useScrollTriggerRefresh()

  return (
    <div className="min-h-svh bg-night text-white">
      <a
        href="#contenido-principal"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-glow px-4 py-2 text-xs font-bold uppercase tracking-wide text-night shadow-glow transition focus:translate-y-0 focus:outline-none"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido-principal">
        <Hero />
        <LocationSection />
        <PlaylistSection />
      </main>

      <Footer />
    </div>
  )
}
