import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'glass' | 'solid' | 'glow';
  hover?: boolean;
  children: React.ReactNode;
}

export default function Card({
  variant = 'glass',
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    glass: 'glass',
    solid: 'bg-surface-800 border border-surface-700',
    glow: 'glass border-brand-500/20 hover:border-brand-500/40',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        variants[variant],
        hover && 'glass-hover',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
