import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Hackathons from '@/sections/Hackathons';
import Experience from '@/sections/Experience';
import Resume from '@/sections/Resume';
import Contact from '@/sections/Contact';

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
