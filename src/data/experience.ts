export type ExperienceGroup = 'leadership' | 'engineering' | 'additional';

export interface Experience {
  id: string;
  group: ExperienceGroup;
  role: string;
  org: string;
  /** Omitted when unknown. Never guess a date. */
  period?: string;
  location?: string;
  summary?: string;
  points?: string[];
}

export const groupLabels: Record<ExperienceGroup, string> = {
  leadership: 'Technical leadership',
  engineering: 'Engineering',
  additional: 'Additional roles',
};

/**
 * Titles follow the owner's brief, which is deliberately conservative
 * ("do not inflate job titles"). Two places differ from the older CV/site and
 * need the owner's confirmation:
 *   - ClearSig: CV says "Head of Product Engineering / Frontend Lead";
 *     the brief says "Frontend Engineer / Software Engineering contributor".
 *   - GeoPonix: CV says "Co-founder & CTO"; the brief says "Co-founder, COO & CTO".
 * DETALINK and nHub Foundation come from the brief only (no dates in any
 * source). They may overlap with "Deta Wallet" and "NHUD Foundation" from the
 * CV; they are kept separate until the owner confirms.
 */
export const experiences: Experience[] = [
  {
    id: 'geoponix',
    group: 'leadership',
    role: 'Co-founder, COO & CTO',
    org: 'GeoPonix',
    period: '2026 to present',
    location: 'Remote',
    summary:
      'Technical and product direction for an agricultural intelligence company built on geospatial data and AI.',
    points: [
      'Define product and engineering direction for the core platform.',
      'Lead technical decisions, architecture, and product execution.',
      'Connect business goals to technical delivery.',
    ],
  },
  {
    id: 'kenule',
    group: 'leadership',
    role: 'Co-founder & CTO',
    org: 'Kenule Africa',
    period: '2026 to present',
    location: 'Remote',
    summary: 'Technical vision and product engineering direction for the company’s digital products.',
    points: [
      'Lead technical planning and execution across the company’s digital products.',
      'Translate product vision into scalable, maintainable engineering decisions.',
    ],
  },
  {
    id: 'clearsig',
    group: 'engineering',
    role: 'Frontend Engineer / Software Engineering contributor',
    org: 'ClearSig',
    period: 'May 2026 to present',
    location: 'Remote',
    summary: 'Building a policy-governed shared treasury and multi-chain wallet.',
    points: [
      'Handled the complete frontend implementation for the ClearSig hackathon build.',
      'Helped the team secure 2nd place at the Ika hackathon.',
      'Collaborate across wallet logic, security messaging, onboarding, and approval interactions.',
    ],
  },
  {
    id: 'deta-wallet',
    group: 'engineering',
    role: 'Senior Frontend Developer',
    org: 'Deta Wallet',
    period: 'Jan 2026 to present',
    location: 'Remote',
    summary: 'Consumer wallet product for a fintech startup.',
    points: [
      'Lead frontend architecture and development.',
      'Implement secure, responsive interfaces for financial transaction and wallet flows.',
      'Collaborate with backend and blockchain teams to integrate wallet functionality.',
    ],
  },
  {
    id: 'nhud',
    group: 'engineering',
    role: 'Frontend Developer (Intern)',
    org: 'NHUD Foundation',
    period: 'Aug 2025 to Jan 2026',
    location: 'On-site',
    points: [
      'Developed and maintained responsive web interfaces for the foundation’s projects.',
      'Improved page load performance and accessibility across multiple pages.',
      'Collaborated with designers and backend developers to deliver features on schedule.',
    ],
  },
  {
    id: 'detalink',
    group: 'additional',
    role: 'Core Developer',
    org: 'DETALINK',
  },
  {
    id: 'nhub',
    group: 'additional',
    role: 'Frontend Mentor',
    org: 'nHub Foundation',
    summary: 'Mentoring in frontend engineering.',
  },
];
