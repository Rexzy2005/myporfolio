export interface PracticeLink {
  label: string;
  href: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  items: string[];
  /** Where this shows up in real work. Only add entries that are true. */
  practice?: PracticeLink[];
}

/**
 * Engineering disciplines, grouped by discipline rather than by tool.
 *
 * EVIDENCE STATUS (for the site owner — not rendered):
 *  - Supported by repo/CV/brief: software engineering, web3, and the
 *    architecture & leadership items (CTO roles, mentoring), AWS/Docker/
 *    GitHub Actions/Vercel (from the previous skills data), LAN/local
 *    infrastructure (Nakama).
 *  - Listed because the owner's brief lists them, but with NO supporting
 *    evidence anywhere in the repo or CV: Linux, Red Hat, Azure, Ansible,
 *    monitoring, observability, system hardening, reliability engineering,
 *    networking beyond the LAN-based CBT work. They carry no `practice`
 *    links on purpose. Confirm, add real examples, or remove before publishing.
 */
export const capabilities: Capability[] = [
  {
    id: 'software',
    title: 'Software engineering',
    description: 'Production applications and the services behind them, from interface to API.',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Rust',
      'API development',
      'Distributed systems',
      'PostgreSQL',
      'MongoDB',
      'Flutter',
      'Telegram bots',
    ],
    practice: [
      { label: 'ClearSig: Next.js, React, Rust (Axum)', href: '#clearsig' },
      { label: 'Ocassia: React, Node.js, PostgreSQL', href: '#more-work' },
    ],
  },
  {
    id: 'web3',
    title: 'Web3 & blockchain',
    description: 'Wallets, treasuries, and payment flows where key custody and approval logic matter.',
    items: ['Solana', 'Ika', 'Solidity', 'Smart contracts', 'Wallet integrations', 'Transaction-approval flows'],
    practice: [
      { label: 'ClearSig: policy-governed multi-chain treasury on Ika', href: '#clearsig' },
      { label: 'PayFlow: smart-contract payroll', href: '#more-work' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems & infrastructure',
    description: 'The operating systems, networks, and environments that software depends on.',
    items: [
      'Linux',
      'Red Hat',
      'Networking',
      'System administration',
      'Infrastructure architecture',
      'Enterprise environments',
    ],
    practice: [{ label: 'Nakama: LAN-based CBT on local school infrastructure', href: '#nakama' }],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Making software repeatable to build, ship, and run.',
    items: [
      'AWS (S3, EC2, Lambda, CloudFront, Route 53)',
      'Azure',
      'Docker',
      'Ansible',
      'CI/CD',
      'GitHub Actions',
      'Infrastructure automation',
      'Deployment',
    ],
    practice: [{ label: 'Live deployments on Vercel: Ocassia, PayFlow, Script', href: '#more-work' }],
  },
  {
    id: 'reliability',
    title: 'Reliability & security',
    description: 'Keeping systems observable, performant, and safe to operate.',
    items: [
      'Monitoring',
      'Observability',
      'Performance',
      'Secure system design',
      'System hardening',
      'Reliability engineering',
    ],
    practice: [
      { label: 'ClearSig: policy checks before signing, bounded agent access', href: '#clearsig' },
      { label: 'PayFlow: reentrancy-protected contracts', href: '#more-work' },
      { label: 'Offline-first design: Nakama, SoilSense', href: '#nakama' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & leadership',
    description: 'Turning product needs into system design, and guiding the team that builds it.',
    items: [
      'System architecture',
      'Technical design',
      'Product architecture',
      'Engineering leadership',
      'Technical documentation',
      'Team mentorship',
    ],
    practice: [
      { label: 'Co-founder and CTO roles: GeoPonix, Kenule Africa', href: '#experience' },
      { label: 'Frontend mentor: nHub Foundation', href: '#experience' },
    ],
  },
];
