import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  glow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer select-none';

  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-500 active:bg-brand-700',
    secondary: 'bg-surface-800 text-white hover:bg-surface-700 border border-glass-border',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
    outline: 'bg-transparent border-2 border-brand-500 text-brand-400 hover:bg-brand-500/10',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-1.5',
    lg: 'px-6 py-3 text-base gap-2',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        glow && 'glow-sm hover:glow',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
