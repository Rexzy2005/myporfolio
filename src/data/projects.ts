export interface Project {
  id: string;
  title: string;
  /** One line on what it is, phrased around the engineering rather than the pitch. */
  summary: string;
  stack?: string[];
  status: 'Live' | 'In development' | 'Pre-alpha';
  role?: string;
  year?: string;
  liveUrl?: string;
  sourceUrl?: string;
}

/**
 * Other real projects. Text is condensed from the previous site data; nothing
 * here is new. The three priority systems live in caseStudies.ts.
 */
export const projects: Project[] = [
  {
    id: 'ocassia',
    title: 'Ocassia',
    summary:
      'Multi-sided event marketplace with escrow payments, ticketing, and booking and availability management for hosts, vendors, and venues.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Payment gateway (escrow)'],
    status: 'Live',
    role: 'Full-stack developer',
    year: '2025',
    liveUrl: 'https://ocassia-six.vercel.app/',
  },
  {
    id: 'payflow',
    title: 'PayFlow',
    summary:
      'Web3 payroll for DAOs and teams. Smart contracts hold and distribute funds, with reentrancy protection and an on-chain audit trail.',
    stack: ['Next.js', 'TypeScript', 'Solidity', 'Ethers.js', 'OpenZeppelin'],
    status: 'In development',
    role: 'Product engineer',
    year: '2025',
    liveUrl: 'https://pay-flow-five-delta.vercel.app/',
  },
  {
    id: 'soilsense',
    title: 'SoilSense',
    summary:
      'Offline-first Flutter app that pairs with a custom Bluetooth (BLE) soil-testing device, stores readings locally, and recommends crop-specific fertilizer plans.',
    stack: ['Flutter', 'Dart', 'Riverpod', 'Drift', 'SQLite', 'BLE'],
    status: 'In development',
    role: 'Mobile product engineer',
    year: '2025',
    sourceUrl: 'https://github.com/DevRex-X-Spectre/fertilizer_recomendation_system',
  },
  {
    id: 'nsl-translator',
    title: 'NSL Translator',
    summary:
      'On-device Nigerian Sign Language translation: MediaPipe landmarks, a custom model, and TensorFlow Lite inference in a Flutter app.',
    stack: ['Flutter', 'Dart', 'Python', 'MediaPipe', 'TensorFlow Lite'],
    status: 'In development',
    role: 'Mobile and machine learning engineer',
    year: '2025',
    sourceUrl: 'https://github.com/Rexzy2005/NSL_Translator',
  },
  {
    id: 'script',
    title: 'Script',
    summary:
      'Business management platform for SMEs covering sales, inventory, customers, analytics, and local-first workflows. Built at HackJos 2025.',
    status: 'Live',
    role: 'Product engineer',
    year: '2025',
    liveUrl: 'https://scripttool.vercel.app/',
  },
  {
    id: 'fyb-studio',
    title: 'FYB Studio',
    summary:
      'Design tool for final-year students: template browsing, guided personalization, live preview, account flows, and PNG export.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    role: 'Full-stack product engineer',
    year: '2026',
    liveUrl: 'https://www.fybstudio.app/',
  },
  {
    id: 'winview-mfb',
    title: 'WinView Microfinance Bank',
    summary:
      'Customer-facing site for a licensed microfinance bank in Abuja: products, trust signals, account-opening prompts, and support routes.',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    status: 'Live',
    role: 'Frontend developer',
    year: '2026',
    liveUrl: 'https://www.winviewmfb.com/',
  },
];

export interface Recognition {
  id: string;
  placement: string;
  event: string;
  date: string;
  product: string;
  href: string;
}

export const recognition: Recognition[] = [
  {
    id: 'ika',
    placement: '2nd place',
    event: 'Ika Hackathon',
    date: 'May 2026',
    product: 'ClearSig',
    href: 'https://x.com/ikadotxyz/status/2060346329881084034?s=20',
  },
  {
    id: 'hackjos',
    placement: '5th place',
    event: 'HackJos 2025, by nHub',
    date: 'November 11 to 13, 2025',
    product: 'Script Business Management',
    href: 'https://x.com/nHubNG/status/1979566196417769617?s=20',
  },
];
