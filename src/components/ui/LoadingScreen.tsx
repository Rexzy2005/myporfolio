import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    let current = 0;
    const updateProgress = () => {
      current += (Math.random() * 2 + 1);
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 1200);
        }, 500);
      } else {
        setProgress(current);
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
    return () => { document.body.style.overflow = ''; };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient Glows */}
          <motion.div
            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-500/10 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 w-full max-w-4xl px-8 md:px-16 flex flex-col justify-center items-center">
            {/* Unique Split Typography Loading */}
            <div className="flex gap-4 items-end overflow-hidden pb-4">
              <motion.div
                className="text-brand-500 font-mono text-sm tracking-widest uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                DevRex
              </motion.div>
              <div className="w-[1px] h-4 bg-white/20" />
              <motion.div
                className="text-slate-400 font-mono text-sm tracking-widest uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Portfolio Initialization
              </motion.div>
            </div>

            <div className="relative mt-12 w-full flex items-center justify-center">
              {/* Massive center text expanding */}
              <div className="text-[12vw] md:text-[8vw] font-black text-white/5 tracking-tighter tabular-nums leading-none">
                {Math.floor(progress).toString().padStart(3, '0')}
              </div>

              {/* Central Glowing Orb that expands based on progress */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/50 bg-brand-500/5 backdrop-blur-md shadow-[0_0_50px_rgba(var(--brand-500),0)]"
                animate={{
                  width: `${progress * 1.5 + 20}px`,
                  height: `${progress * 1.5 + 20}px`,
                  boxShadow: `0 0 ${progress}px rgba(var(--brand-500), ${progress / 200})`
                }}
                transition={{ type: "spring", damping: 20 }}
              />
            </div>
          </div>

          {/* Reveal Circle Expansion */}
          {progress === 100 && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500 z-[110] pointer-events-none"
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ width: "300vw", height: "300vw", opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            />
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
