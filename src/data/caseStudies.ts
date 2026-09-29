import type { DiagramSpec } from '@/components/diagrams/LayerDiagram';

export interface ExternalItem {
  label: string;
  href: string;
}

export interface Decision {
  title: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  tagline: string;

  /** Facts column. Omit anything unknown; empty fields are not rendered. */
  role?: string;
  period?: string;
  status?: string;
  context?: string;
  direction?: string;
  recognition?: string;
  links?: ExternalItem[];

  /** Narrative blocks, rendered in this order when present. */
  problem?: string;
  system?: string[];
  image?: { src: string; srcSet?: string; sizes?: string; alt: string; width: number; height: number; caption: string };
  architecture?: { summary: string; diagram?: DiagramSpec };
  decisions?: Decision[];
  focus?: string[];
  infrastructure?: string;
  reliability?: string[];
  result?: string[];
  contribution?: string[];
  stack?: string[];
}

/**
 * Priority engineering case studies.
 *
 * CONTENT STATUS (for the site owner — not rendered):
 *  - ClearSig: built from projects.ts, the CV, the hackathon poster
 *    ("cross-chain multisig, built on Ika"), the brief's stack notes, and the
 *    public product site (clearsig.xyz), which states the pipeline, agent
 *    lanes and threshold recovery. Those are product-level facts, kept
 *    separate from "My contribution".
 *  - GeoPonix and Nakama: the repo contains no project write-ups, so these
 *    contain only what the brief and the CV state. Add `problem`, `decisions`,
 *    `infrastructure`, `result`, `period`, `links` and real detail when
 *    available — the UI renders new fields automatically.
 *  - Diagrams are simplified overviews derived from the stack/components named
 *    in the brief. Verify them against the real architecture.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: 'clearsig',
    index: '01',
    title: 'ClearSig',
    tagline: 'Policy-governed shared treasury and multi-chain wallet for teams, DAOs, businesses, and AI agents.',
    role: 'Frontend engineer and software engineering contributor',
    period: '2026',
    status: 'Pre-alpha',
    recognition: '2nd place, Ika hackathon (May 2026)',
    links: [
      { label: 'Live product', href: 'https://clearsig.xyz/' },
      { label: 'Source', href: 'https://github.com/clear-msig/clear-msig' },
      { label: 'Hackathon announcement', href: 'https://x.com/ikadotxyz/status/2060346329881084034?s=20' },
    ],
    problem:
      'Shared crypto wallets are hard to coordinate and risky when one person controls the keys. Typical wallet prompts also show opaque transaction data (an unknown program, a hidden destination, no visible policy), so approvers end up approving and hoping.',
    system: [
      'A policy-governed shared treasury and multi-chain wallet. Every action follows the same path: an intent enters, policy checks it, owners approve, and ClearSig executes.',
      'Approvals become readable signing receipts that show the action, policy, owners, and route before money moves. Built on Ika as a cross-chain multisig: “one wallet, every chain, no bridges.”',
    ],
    image: {
      src: '/images/clearsig-app.webp',
      srcSet: '/images/clearsig-app-640.webp 640w, /images/clearsig-app.webp 1200w',
      sizes: '(min-width: 1024px) 536px, calc(100vw - 3rem)',
      alt: 'ClearSig landing page with the headline “Send money with people you trust.”',
      width: 1200,
      height: 689,
      caption: 'An earlier version of the clearsig.xyz landing page; the product positioning has since evolved.',
    },
    architecture: {
      summary:
        'A web client talks to a Rust service layer, which coordinates with the chain integrations. The service layer streams state to the client over server-sent events (SSE).',
      diagram: {
        title: 'System overview',
        layers: [
          { label: 'Client', nodes: ['Next.js', 'React'] },
          { label: 'Service layer', nodes: ['Rust', 'Axum'] },
          { label: 'Chains', nodes: ['Ika', 'Solana'] },
        ],
        links: ['requests · live updates (SSE)', 'transaction intents'],
        caption: 'Simplified overview based on the product’s stack.',
      },
    },
    decisions: [
      {
        title: 'One path for every action',
        body: 'Intent, policy check, owner approval, execution. Approvals are collective, so no one person moves funds alone.',
      },
      {
        title: 'Readable intents instead of raw transaction data',
        body: 'Approvers see the amount, route, and destination in plain language rather than opaque hex, which removes blind-signing.',
      },
      {
        title: 'One treasury across chains',
        body: 'Built on Ika, with Solana integration (Devnet in pre-alpha). The product site lists native routes for Solana, Ethereum, Bitcoin, Zcash, and Hyperliquid under one approval surface.',
      },
    ],
    reliability: [
      'Policy is enforced before signing: limits, expiry, and device checks run first, and anything outside policy never reaches signing.',
      'Agents are bounded: an owner-approved lane (market, size, stop loss, approvals) grants permission, not custody. An agent can request actions but never holds the wallet.',
      'Recovery without a seed phrase: a personal vault splits a signing key across devices and recovers with a threshold (devnet pre-alpha).',
      'Maturity is stated plainly: the product is pre-alpha and runs against devnet.',
    ],
    result: ['2nd place at the Ika hackathon (May 2026).', 'Continued as a pre-alpha product after the hackathon.'],
    contribution: [
      'Complete frontend implementation for the hackathon build, working with the team on product decisions during a fast shipping cycle.',
      'Continuing on the product as a frontend engineer and software engineering contributor.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Rust', 'Axum', 'SSE', 'Ika', 'Solana'],
  },
  {
    id: 'geoponix',
    index: '02',
    title: 'GeoPonix',
    tagline: 'Agricultural intelligence built on geospatial data and AI, at plot level.',
    role: 'Co-founder, COO & CTO',
    period: '2026 to present',
    direction: 'B2B and B2G',
    system: [
      'Agricultural intelligence built on geospatial systems and AI, delivering plot-level insight into soil, terrain, and rainfall.',
    ],
    architecture: {
      summary:
        'I define the software and system architecture for the platform, including how field hardware integrates with it.',
    },
    focus: [
      'Geospatial systems',
      'Plot-level soil, terrain, and rainfall intelligence',
      'AI',
      'Field and hardware integration',
      'Product and system architecture',
    ],
    contribution: [
      'Define product and engineering direction for the core platform.',
      'Lead technical decisions, architecture, and product execution.',
      'Connect business goals to technical delivery.',
    ],
    stack: ['Next.js', 'React', 'TypeScript'],
  },
  {
    id: 'nakama',
    index: '03',
    title: 'Nakama Academic Digital Systems',
    tagline: 'Offline-first academic systems for school environments.',
    context: 'Christian Royal College',
    system: [
      'Academic digital systems designed to keep working without reliable internet: LAN-based computer-based testing (CBT) on local school infrastructure, with AI-assisted tutoring, OCR and content processing, teacher dashboards, and school-level analytics.',
    ],
    architecture: {
      summary:
        'Offline-first by design. Assessment and content run on local infrastructure over the school network, and a synchronization layer connects local activity to the wider platform.',
      diagram: {
        title: 'System overview',
        layers: [
          { label: 'Learners & staff', nodes: ['Student devices (school LAN)', 'Teacher dashboards'] },
          { label: 'Local infrastructure', nodes: ['LAN-based CBT', 'Offline-first data'] },
          {
            label: 'Platform services',
            nodes: ['AI-assisted tutoring', 'OCR / content processing', 'School-level analytics'],
          },
        ],
        links: ['school network', 'synchronization'],
        caption: 'Simplified overview based on the system’s components.',
      },
    },
    decisions: [
      {
        title: 'Offline-first',
        body: 'Assessments and learning content keep working without an internet connection, so connectivity is not a dependency for running an exam.',
      },
      {
        title: 'LAN-based CBT on local infrastructure',
        body: 'Computer-based tests are served over the school network from local infrastructure rather than from a remote service.',
      },
      {
        title: 'Synchronization architecture',
        body: 'Local activity is synchronized with the wider platform when a connection is available.',
      },
    ],
  },
];
