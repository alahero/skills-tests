import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocationSection } from './components/LocationSection';
import { PlaylistSection } from './components/PlaylistSection';
import { useScrollTriggerSafeRefresh } from './hooks/useScrollTriggerSafeRefresh';

export default function App() {
  useScrollTriggerSafeRefresh();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-night-950">
      <div className="grain-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <LocationSection />
        <PlaylistSection />
      </main>
      <Footer />
    </div>
  );
}
