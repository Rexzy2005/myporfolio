import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';
import { recognition } from '@/data/projects';

export default function RecognitionList() {
  return (
    <div className="mt-16 lg:mt-20">
      <Reveal>
        <h3 className="text-heading text-fg">Recognition</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {recognition.map((item) => (
            <li key={item.id} className="rounded-lg border border-line bg-surface p-5">
              <p className="font-mono text-micro uppercase text-accent-soft">{item.placement}</p>
              <p className="mt-2 text-body text-fg">{item.event}</p>
              <p className="mt-1 text-small text-fg-muted">
                {item.product} · {item.date}
              </p>
              <p className="mt-4 text-small">
                <TextLink href={item.href} external>
                  Event post<span className="sr-only">: {item.event}</span>
                </TextLink>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
