import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { capabilities } from '@/data/capabilities';

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="01"
      eyebrow="Capabilities"
      title="Engineering disciplines"
      intro="Grouped by discipline, not by tool. Where the work is documented, it is linked."
    >
      <ul className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((group, i) => (
          <li key={group.id}>
            <Reveal delay={(i % 3) * 90} className="h-full">
              <article aria-labelledby={`cap-${group.id}`} className="h-full border-t border-line pt-6">
                <p aria-hidden="true" className="font-mono text-micro uppercase text-fg-faint">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 id={`cap-${group.id}`} className="mt-3 text-heading text-fg">
                  {group.title}
                </h3>
                <p className="mt-3 text-body text-fg-muted">{group.description}</p>
                <p className="mt-5 text-small text-fg">{group.items.join(', ')}.</p>

                {group.practice && (
                  <div className="mt-6 border-t border-line pt-4">
                    <p className="font-mono text-micro uppercase text-fg-faint">In practice</p>
                    <ul className="mt-3 space-y-2 text-small">
                      {group.practice.map((entry) => (
                        <li key={entry.label}>
                          <a
                            href={entry.href}
                            className="text-fg-muted underline decoration-line-ui decoration-1 underline-offset-[5px] transition-colors hover:text-accent-soft hover:decoration-accent-soft"
                          >
                            {entry.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
