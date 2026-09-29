import type { ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';

interface SectionProps {
  id: string;
  /** Two-digit section number, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

/** Page section with the shared editorial header (4/8 column split on desktop). */
export default function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-[var(--section-y)]">
      <div className="container-page">
        <Reveal>
          <header className="mb-12 grid gap-4 lg:mb-16 lg:grid-cols-12 lg:gap-x-12">
            <p className="font-mono text-micro uppercase text-fg-muted lg:col-span-4 lg:pt-3">
              <span className="text-accent-soft">{index}</span>
              <span aria-hidden="true"> / </span>
              <span className="sr-only">, </span>
              {eyebrow}
            </p>
            <div className="lg:col-span-8">
              <h2 id={`${id}-title`} className="max-w-3xl text-balance text-title text-fg">
                {title}
              </h2>
              {intro && <p className="mt-5 max-w-2xl text-body-lg text-fg-muted">{intro}</p>}
            </div>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
