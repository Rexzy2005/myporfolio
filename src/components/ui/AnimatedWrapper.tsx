import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

const directionVariants = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function AnimatedWrapper({
  children,
  delay = 0,
  direction = 'up',
  className,
  once = true,
}: AnimatedWrapperProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const initialOffset = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
