import type { ReactNode } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { cn } from '@/utils/cn';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
  icon?: ReactNode;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill border font-medium leading-tight transition-colors duration-150';

const sizes = {
  // Compact on phones, roomier from `sm` up.
  md: 'px-4 py-3 text-[0.8125rem] sm:px-6 sm:py-3.5 sm:text-[0.9375rem]',
  sm: 'px-4 py-2 text-small',
};

const variants = {
  primary: 'border-transparent bg-accent text-white hover:bg-accent-hover',
  secondary: 'border-line-ui text-fg hover:border-fg-muted hover:bg-surface-2',
};

/** Pill-shaped link styled as a button. Use for navigation and downloads (real anchors, not JS handlers). */
export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  external,
  download,
  onClick,
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      download={download ? '' : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {icon}
      {children}
      {external && (
        <>
          <FiArrowUpRight aria-hidden="true" className="size-4" />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
