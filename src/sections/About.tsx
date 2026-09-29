import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { profile } from '@/data/profile';

const facts = [
  ['Based in', profile.location],
  ['Education', profile.education],
  ['Availability', profile.availability],
  [
    'Interested in',
    'Senior systems and software engineering roles, technical leadership, and consulting engagements',
  ],
] as const;

export default function About() {
  return (
    <Section
      id="about"
      index="04"
      eyebrow="About"
      title="Practical, reliable products and the infrastructure behind them"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
        <Reveal className="lg:col-span-4">
          <figure>
            <img
              src="/images/portrait-480.webp"
              srcSet="/images/portrait-480.webp 480w, /images/portrait-960.webp 960w"
              sizes="(min-width: 1024px) 320px, 70vw"
              width={480}
              height={600}
              alt="Portrait of Pererat Timothy, smiling, in a white traditional outfit and a red and green cap."
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full max-w-xs rounded-lg border border-line object-cover"
            />
          </figure>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={90}>
          <div className="max-w-2xl space-y-5 text-body-lg text-fg-muted">
            <p>
              I am a software and systems engineer focused on building practical, reliable products and the
              infrastructure they run on. My work spans application development, system architecture, cloud
              infrastructure, automation, and distributed systems, along with Web3 and blockchain systems and
              product engineering.
            </p>
            <p>
              Frontend engineering remains a core part of how I work: interfaces that are fast, accessible, and easy
              to maintain. As a co-founder and CTO I make architecture and technical-direction decisions across
              products, and I mentor other developers in frontend engineering.
            </p>
          </div>

          <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-micro uppercase text-fg-faint">{label}</dt>
                <dd className="mt-1.5 text-body text-fg">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
