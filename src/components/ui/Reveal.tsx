import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

const canObserve = typeof IntersectionObserver !== 'undefined';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in ms. */
  delay?: number;
}

/**
 * Fades content in once, when it first scrolls into view. CSS-only motion
 * (see .reveal in index.css); disabled under prefers-reduced-motion.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!canObserve);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canObserve) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -6% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      className={cn('reveal', className)}
    >
      {children}
    </div>
  );
}
