/**
 * Identity, positioning and external links. Single source of truth for the
 * hero, header, footer, contact section and structured data.
 *
 * Content rule for this whole folder: only state facts that exist in the repo,
 * the CV (public/Pererat-Timothy-Resume.pdf, public/resume.html) or the
 * owner's brief. If something is unknown, leave the field out — the UI hides
 * empty fields. Never invent metrics, employers, dates, or outcomes.
 */

export const profile = {
  name: 'Pererat Timothy',
  handle: 'Rexzy',
  domain: 'rexzy.dev',
  siteUrl: 'https://www.rexzy.dev',
  title: 'Software & Systems Engineer',
  lead: 'I design, build, and operate reliable software systems across applications, infrastructure, cloud environments, and distributed systems.',
  disciplines: [
    'Applications',
    'Distributed systems',
    'Cloud infrastructure',
    'Automation',
    'Reliability',
    'Architecture',
  ],
  location: 'Jos, Plateau State / Remote',
  availability: 'Open to opportunities',
  education: 'Nigerian Army University, Software Engineering (final year)',
  email: 'timothypererat2004@gmail.com',
} as const;

export const links = {
  github: 'https://github.com/Rexzy2005',
  linkedin: 'https://www.linkedin.com/in/pererat-timothy-b33a51375',
  x: 'https://x.com/dev_rexzy',
  whatsapp: 'https://wa.me/2348133153568',
  resumePdf: '/Pererat-Timothy-Resume.pdf',
  resumeWeb: '/resume.html',
} as const;

export const nav = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;
