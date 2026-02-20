import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'neon';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface-800 text-slate-300 border-surface-700',
    brand: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
    neon: 'bg-neon/10 text-neon border-neon/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border transition-colors',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
