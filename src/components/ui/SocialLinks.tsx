import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { links, profile } from '@/data/profile';
import { cn } from '@/utils/cn';

const items = [
  { label: 'GitHub', href: links.github, Icon: FaGithub, external: true },
  { label: 'LinkedIn', href: links.linkedin, Icon: FaLinkedinIn, external: true },
  { label: 'X (Twitter)', href: links.x, Icon: FaXTwitter, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: FiMail, external: false },
];

/** Compact icon row: 36px targets on phones, 40px from `sm` up. */
export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul aria-label="Profiles" className={cn('flex items-center gap-2 sm:gap-3', className)}>
      {items.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={external ? `${label} (opens in a new tab)` : label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="flex size-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-ui hover:text-fg sm:size-10"
          >
            <Icon aria-hidden="true" className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
