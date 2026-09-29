import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { experiences, groupLabels, type ExperienceGroup } from '@/data/experience';

const groups: ExperienceGroup[] = ['leadership', 'engineering', 'additional'];

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title="Where I have worked"
      intro="Engineering, leadership, and mentoring roles, from frontend delivery to system architecture and technical direction."
    >
      <div className="space-y-16">
        {groups.map((group) => {
          const roles = experiences.filter((item) => item.group === group);
          if (roles.length === 0) return null;
          return (
            <div key={group}>
              <Reveal>
                <h3 className="font-mono text-micro uppercase text-fg-muted">{groupLabels[group]}</h3>
              </Reveal>
              <ul className="mt-4 border-b border-line">
                {roles.map((role) => (
                  <li key={role.id}>
                    <Reveal className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-x-12">
                      <div className="md:col-span-3">
                        {role.period && <p className="font-mono text-micro uppercase text-fg-muted">{role.period}</p>}
                        {role.location && (
                          <p className="mt-1 font-mono text-micro uppercase text-fg-faint">{role.location}</p>
                        )}
                      </div>
                      <div className="md:col-span-9">
                        <h4 className="text-body-lg text-fg">{role.role}</h4>
                        <p className="text-body text-fg-muted">{role.org}</p>
                        {role.summary && <p className="mt-3 max-w-2xl text-body text-fg-muted">{role.summary}</p>}
                        {role.points && (
                          <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-body text-fg-muted marker:text-line-ui">
                            {role.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
