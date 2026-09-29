import Reveal from '@/components/ui/Reveal';
import TextLink from '@/components/ui/TextLink';
import { projects } from '@/data/projects';

export default function MoreWork() {
  return (
    <div id="more-work" className="mt-8 lg:mt-12">
      <Reveal>
        <h3 className="text-heading text-fg">More work</h3>
        <p className="mt-3 max-w-2xl text-body text-fg-muted">
          Other products and systems, condensed. Status is listed for each; live products link out.
        </p>
      </Reveal>

      <ul className="mt-8 border-b border-line">
        {projects.map((project) => (
          <li key={project.id}>
            <Reveal className="grid gap-4 border-t border-line py-6 md:grid-cols-12 md:gap-x-10">
              <div className="md:col-span-3">
                <h4 className="text-body font-medium text-fg">{project.title}</h4>
                <p className="mt-1 font-mono text-micro uppercase text-fg-faint">
                  {[project.status, project.year].filter(Boolean).join(' · ')}
                </p>
                {project.role && <p className="mt-1 text-small text-fg-muted">{project.role}</p>}
              </div>
              <div className="md:col-span-6">
                <p className="text-body text-fg-muted">{project.summary}</p>
                {project.stack && (
                  <p className="mt-3 font-mono text-small text-fg-faint">{project.stack.join(' / ')}</p>
                )}
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-small md:col-span-3 md:justify-end">
                {project.liveUrl && (
                  <li>
                    <TextLink href={project.liveUrl} external>
                      Live<span className="sr-only">: {project.title}</span>
                    </TextLink>
                  </li>
                )}
                {project.sourceUrl && (
                  <li>
                    <TextLink href={project.sourceUrl} external>
                      Source<span className="sr-only">: {project.title}</span>
                    </TextLink>
                  </li>
                )}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
