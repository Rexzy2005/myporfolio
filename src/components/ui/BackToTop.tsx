import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronUp, FiTerminal } from 'react-icons/fi';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 520);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed bottom-5 right-5 z-40 group flex h-[46px] items-center gap-2 border border-mercury-blue/35 bg-black/88 px-3.5 text-[12px] font-[500] text-starlight shadow-[0_18px_48px_rgba(0,0,0,0.55)] backdrop-blur-md hover:border-mercury-blue hover:bg-mercury-blue transition-colors sm:bottom-7 sm:right-7 sm:h-[50px] sm:px-4"
          style={{ borderRadius: '8px' }}
        >
          <FiTerminal size={15} className="text-mercury-blue group-hover:text-pure-white transition-colors" />
          <span className="flex h-6 w-6 items-center justify-center border border-lead/20 bg-graphite/60 group-hover:border-pure-white/20 group-hover:bg-pure-white/10 transition-colors" style={{ borderRadius: '6px' }}>
            <FiChevronUp size={15} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
