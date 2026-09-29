import { FaGithub, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { links, profile } from '@/data/profile';

const channels = [
  { label: 'LinkedIn', detail: 'in/pererat-timothy-b33a51375', href: links.linkedin, Icon: FaLinkedinIn },
  { label: 'GitHub', detail: 'Rexzy2005', href: links.github, Icon: FaGithub },
  { label: 'X (Twitter)', detail: '@dev_rexzy', href: links.x, Icon: FaXTwitter },
  { label: 'WhatsApp', detail: 'Message me directly', href: links.whatsapp, Icon: FaWhatsapp },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" eyebrow="Contact" title="Let’s build something useful.">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-12">
        <Reveal className="lg:col-span-7">
          <p className="max-w-xl text-body-lg text-fg-muted">
            Open to senior systems and software engineering roles, technical leadership, and consulting
            engagements. Email is the quickest way to reach me.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block break-all text-heading text-fg underline decoration-line-ui decoration-1 underline-offset-8 transition-colors hover:text-accent-soft hover:decoration-accent-soft"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-x-2 gap-y-3 sm:gap-x-3">
            <ButtonLink
              href={links.resumePdf}
              download
              variant="primary"
              icon={<FiDownload aria-hidden="true" className="size-4" />}
            >
              Download résumé (PDF)
            </ButtonLink>
            <ButtonLink href={links.resumeWeb} variant="secondary">
              View résumé online
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={90}>
          <ul className="divide-y divide-line border-y border-line">
            {channels.map(({ label, detail, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent-soft"
                >
                  <span className="flex items-center gap-4">
                    <Icon aria-hidden="true" className="size-5 shrink-0 text-fg-muted transition-colors group-hover:text-accent-soft" />
                    <span>
                      <span className="block text-body text-fg group-hover:text-accent-soft">{label}</span>
                      <span className="block text-small text-fg-muted">{detail}</span>
                    </span>
                  </span>
                  <FiArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-fg-faint" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
