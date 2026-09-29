import type { ReactNode } from 'react';
import LayerDiagram from '@/components/diagrams/LayerDiagram';
import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';
import type { CaseStudy } from '@/data/caseStudies';

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-3 border-t border-line pt-7 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
      <dt className="font-mono text-micro uppercase text-fg-faint sm:pt-1">{label}</dt>
      <dd className="min-w-0 space-y-3 text-body text-fg-muted">{children}</dd>
    </div>
  );
}

const bullets = 'list-disc space-y-1.5 pl-5 marker:text-line-ui';

/** One engineering case study. Renders only the fields that exist, so thin write-ups stay honest. */
export default function CaseStudyBlock({ study }: { study: CaseStudy }) {
  const facts = (
    [
      ['Role', study.role],
      ['Period', study.period],
      ['Status', study.status],
      ['Context', study.context],
      ['Direction', study.direction],
      ['Recognition', study.recognition],
    ] as const
  ).flatMap(([label, value]) => (value ? [[label, value] as const] : []));

  return (
    <article
      id={study.id}
      aria-labelledby={`${study.id}-title`}
      className="border-t border-line py-14 first:border-t-0 first:pt-0 lg:py-20 lg:first:pt-0"
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-12">
          <header className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <p className="font-mono text-micro uppercase text-fg-faint">
              <span className="text-accent-soft">{study.index}</span> · Case study
            </p>
            <h3 id={`${study.id}-title`} className="mt-3 text-balance text-heading text-fg">
              {study.title}
            </h3>
            <p className="mt-3 text-body text-fg-muted">{study.tagline}</p>

            {facts.length > 0 && (
              <dl className="mt-6 space-y-3 text-small">
                {facts.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="pt-0.5 font-mono text-micro uppercase text-fg-faint">{label}</dt>
                    <dd className="text-fg">{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {study.links && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-small">
                {study.links.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href} external>
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            )}
          </header>

          <dl className="space-y-7 lg:col-span-8">
            {study.problem && (
              <Block label="Problem">
                <p>{study.problem}</p>
              </Block>
            )}

            {study.system && (
              <Block label="System">
                {study.system.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {study.image && (
                  <figure className="!mt-5 overflow-hidden rounded-lg border border-line bg-surface">
                    <img
                      src={study.image.src}
                      srcSet={study.image.srcSet}
                      sizes={study.image.sizes}
                      alt={study.image.alt}
                      width={study.image.width}
                      height={study.image.height}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full"
                    />
                    <figcaption className="border-t border-line px-4 py-2 text-small text-fg-faint">
                      {study.image.caption}
                    </figcaption>
                  </figure>
                )}
              </Block>
            )}

            {study.architecture && (
              <Block label="Architecture">
                <p>{study.architecture.summary}</p>
                {study.architecture.diagram && (
                  <div className="!mt-5 max-w-lg">
                    <LayerDiagram {...study.architecture.diagram} />
                  </div>
                )}
              </Block>
            )}

            {study.decisions && (
              <Block label="Engineering decisions">
                <ol className="space-y-5">
                  {study.decisions.map((decision) => (
                    <li key={decision.title}>
                      <p className="text-fg">{decision.title}</p>
                      <p className="mt-1">{decision.body}</p>
                    </li>
                  ))}
                </ol>
              </Block>
            )}

            {study.focus && (
              <Block label="Engineering focus">
                <ul className={bullets}>
                  {study.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            )}

            {study.infrastructure && (
              <Block label="Infrastructure">
                <p>{study.infrastructure}</p>
              </Block>
            )}

            {study.reliability && (
              <Block label="Reliability & security">
                <ul className={bullets}>
                  {study.reliability.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            )}

            {study.result && (
              <Block label="Result">
                <ul className={bullets}>
                  {study.result.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            )}

            {study.contribution && (
              <Block label="My contribution">
                <ul className={bullets}>
                  {study.contribution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            )}

            {study.stack && (
              <Block label="Stack">
                <p className="font-mono text-small text-fg">{study.stack.join(' / ')}</p>
              </Block>
            )}
          </dl>
        </div>
      </Reveal>
    </article>
  );
}
