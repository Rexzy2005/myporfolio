import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-[12px] font-[400] tracking-[0.24px] text-silver border border-lead/40 rounded-[4px] bg-graphite/40',
        className
      )}
    >
      {children}
    </span>
  );
}
