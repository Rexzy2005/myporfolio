import type { ReactNode } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { cn } from '@/utils/cn';

interface TextLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  download?: boolean;
  className?: string;
}

/** Inline underlined link. External links open in a new tab and say so to screen readers. */
export default function TextLink({ href, children, external, download, className }: TextLinkProps) {
  return (
    <a
      href={href}
      download={download ? '' : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-1 text-fg underline decoration-line-ui decoration-1 underline-offset-[5px] transition-colors hover:text-accent-soft hover:decoration-accent-soft',
        className,
      )}
    >
      {children}
      {external && (
        <>
          <FiArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
