import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import ButtonLink from '@/components/ui/ButtonLink';
import { links, nav } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';

const sectionIds = ['home', ...nav.map((item) => item.href.slice(1))];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 8);
  const active = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the mobile menu is open: Escape closes it (focus returns to the
  // toggle); so does any in-page navigation or growing to the desktop breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 64rem)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    const onHashChange = () => setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onChange);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onChange);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled || open ? 'border-line bg-ink/95' : 'border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          aria-label="rexzy.dev, back to top"
          className="font-mono text-[0.9375rem] tracking-tight text-fg"
        >
          rexzy<span className="text-accent-soft">.dev</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href.slice(1) ? 'location' : undefined}
                  className="text-small text-fg-muted transition-colors hover:text-fg aria-[current=location]:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={links.resumePdf}
            download
            variant="secondary"
            size="sm"
            icon={<FiDownload aria-hidden="true" className="size-3.5" />}
            className="hidden sm:inline-flex"
          >
            Resume
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-md text-fg lg:hidden"
          >
            {open ? <FiX aria-hidden="true" className="size-5" /> : <FiMenu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-rise border-t border-line bg-ink lg:hidden">
          <div className="container-page pb-6 pt-2">
            <ul className="divide-y divide-line">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.href.slice(1) ? 'location' : undefined}
                    className="block py-4 text-body-lg text-fg-muted aria-[current=location]:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2">
              <ButtonLink href="#contact" variant="primary" onClick={() => setOpen(false)}>
                Contact
              </ButtonLink>
              <ButtonLink
                href={links.resumePdf}
                download
                variant="secondary"
                icon={<FiDownload aria-hidden="true" className="size-3.5" />}
              >
                Resume (PDF)
              </ButtonLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
