import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLMotionProps<'div'> {
  hover?: boolean;
  children: React.ReactNode;
}

export default function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { backgroundColor: '#272735', transition: { duration: 0.2 } } : undefined}
      className={cn(
        'p-6 bg-midnight-slate border border-lead/20 rounded-none transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
