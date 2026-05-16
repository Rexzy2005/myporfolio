import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'header' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const base = 'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap';

  const variants = {
    /* Mercury Blue — strictly for primary CTAs */
    primary: 'bg-mercury-blue text-pure-white hover:bg-[#4456d6] rounded-[32px]',
    /* Translucent Ghost Blue — secondary actions in header */
    header: 'bg-ghost-blue/20 text-starlight hover:bg-ghost-blue/30 rounded-[40px]',
    /* Text-only ghost link */
    ghost: 'bg-transparent text-starlight hover:text-silver transition-colors',
  };

  const sizes = {
    sm: 'px-5 py-2 text-[14px] tracking-[0.28px]',
    md: 'px-6 py-3 text-[16px] tracking-[0.16px]',
    lg: 'px-8 py-4 text-[16px] tracking-[0.16px]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
