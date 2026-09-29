import { useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import About from '@/sections/About';
import Capabilities from '@/sections/Capabilities';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Work from '@/sections/Work';

export default function App() {
  // The page is rendered client-side, so the browser cannot honour a #section
  // deep link on first load (the target does not exist yet). Do it once mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-small focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Capabilities />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
