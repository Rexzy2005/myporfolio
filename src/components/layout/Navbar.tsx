import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '@/data/constants';
import { cn } from '@/utils/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.href.replace('#', ''));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-deep-space/92 backdrop-blur-md border-b border-lead/15'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="text-[17px] font-[480] text-starlight tracking-[0.01em] hover:text-pure-white transition-colors"
          >
            DevRex
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={cn(
                  'text-[13px] font-[400] tracking-[0.26px] transition-colors duration-150',
                  activeSection === link.href.replace('#', '')
                    ? 'text-starlight'
                    : 'text-lead hover:text-starlight'
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2 text-[13px] font-[480] tracking-[0.26px] text-starlight bg-graphite/60 hover:bg-graphite border border-lead/25 hover:border-lead/50 transition-colors duration-150"
              style={{ borderRadius: '40px' }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-lead hover:text-starlight transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <div className="absolute inset-0 bg-deep-space/80 backdrop-blur-sm" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[260px] max-w-[85vw] px-6 pt-20 pb-8 bg-midnight-slate border-l border-lead/15 flex flex-col"
            >
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={cn(
                      'py-4 text-[17px] font-[300] tracking-[0.01em] border-b border-lead/15 transition-colors',
                      activeSection === link.href.replace('#', '')
                        ? 'text-starlight'
                        : 'text-lead hover:text-starlight'
                    )}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-8">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-3 text-[14px] font-[480] tracking-[0.26px] text-pure-white bg-mercury-blue hover:bg-[#4456d6] transition-colors"
                  style={{ borderRadius: '32px' }}
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
