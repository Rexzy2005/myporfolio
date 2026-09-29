import { FiArrowUpRight } from 'react-icons/fi';
import ButtonLink from '@/components/ui/ButtonLink';
import SocialLinks from '@/components/ui/SocialLinks';
import TextLink from '@/components/ui/TextLink';
import { links, profile } from '@/data/profile';

/** Short pointers into the case studies. Roles mirror data/experience.ts. */
const systems = [
  {
    href: '#clearsig',
    tag: 'Software engineering',
    name: 'ClearSig',
    blurb: 'Policy-governed shared treasury and multi-chain wallet.',
  },
  {
    href: '#geoponix',
    tag: 'Co-founder, COO & CTO',
    name: 'GeoPonix',
    blurb: 'Geospatial agricultural intelligence at plot level.',
  },
  {
    href: '#nakama',
    tag: 'Offline-first systems',
    name: 'Nakama Academic Digital Systems',
    blurb: 'Academic systems for schools that keep working offline.',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-20 lg:pt-44"
    >
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

      <div className="container-page relative">
        <div className="animate-rise flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-micro uppercase text-fg-muted">
          <p>
            {profile.name} · {profile.handle}
          </p>
          <p className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
            {profile.availability}
          </p>
        </div>

        <h1
          id="hero-title"
          className="animate-rise mt-6 max-w-[9.6em] text-balance text-display text-fg"
          style={{ animationDelay: '80ms' }}
        >
          Software <span className="text-accent-soft">&amp;</span> Systems Engineer
        </h1>

        <div className="mt-10 grid gap-12 sm:mt-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="animate-rise lg:col-span-7" style={{ animationDelay: '160ms' }}>
            <p className="max-w-xl text-body-lg text-fg-muted">{profile.lead}</p>
            <p className="mt-5 max-w-xl font-mono text-micro uppercase text-fg-faint">
              {profile.disciplines.join(' · ')}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 sm:gap-x-3">
              <ButtonLink href="#work" variant="primary">
                View selected work
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-small">
              <TextLink href="#experience">View experience</TextLink>
              <TextLink href={links.resumePdf} download>
                Resume (PDF)
              </TextLink>
            </div>

            <SocialLinks className="mt-8" />
          </div>

          <aside
            aria-labelledby="hero-systems"
            className="animate-rise lg:col-span-5"
            style={{ animationDelay: '240ms' }}
          >
            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <p
                id="hero-systems"
                className="border-b border-line px-5 py-3 font-mono text-micro uppercase text-fg-faint"
              >
                Selected systems
              </p>
              <ul className="divide-y divide-line">
                {systems.map((system) => (
                  <li key={system.href}>
                    <a
                      href={system.href}
                      className="group flex items-start justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-2"
                    >
                      <span className="min-w-0">
                        <span className="block font-mono text-micro uppercase text-accent-soft">{system.tag}</span>
                        <span className="mt-1.5 block text-body text-fg">{system.name}</span>
                        <span className="mt-0.5 block text-small text-fg-muted">{system.blurb}</span>
                      </span>
                      <FiArrowUpRight
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-fg-faint transition-colors group-hover:text-fg"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
