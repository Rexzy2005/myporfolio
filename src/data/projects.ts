export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  category: 'fullstack' | 'frontend' | 'web3' | 'backend';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'payflow',
    title: 'PayFlow — Web3 Payroll Platform',
    shortDescription: 'A decentralized payroll platform for Web3 teams and DAOs. Currently in development.',
    fullDescription: 'PayFlow is a blockchain-powered payroll management platform that enables DAOs and Web3 teams to manage salary payments securely and transparently. It removes the need for intermediaries by leveraging smart contracts to hold and distribute funds — making payroll trustless, auditable, and efficient.',
    problem: 'Managing payroll in decentralized organizations is complex and fragmented. Traditional payroll systems don\'t support crypto payments, and manual wallet transfers are error-prone, time-consuming, and lack transparency for team members.',
    approach: 'Designed a clean, intuitive dashboard that abstracts away blockchain complexity so administrators can onboard team members, set salaries, and execute payroll in just a few clicks. Smart contracts handle fund custody and distribution with built-in security measures to protect against common vulnerabilities.',
    outcome: 'Currently in active development. The platform supports one-click payroll execution, real-time payment tracking, and seamless wallet integration — positioning it as a go-to payroll solution for the growing Web3 workforce.',
    techStack: ['Next.js', 'TypeScript', 'Solidity', 'Ethers.js', 'Tailwind CSS', 'Framer Motion', 'OpenZeppelin'],
    features: ['One-click payroll execution for entire teams', 'On-chain transparency with full audit trail', 'Secure smart contract with reentrancy protection', 'Seamless MetaMask wallet integration', 'Team member dashboard with payment history', 'Multi-network support (Ethereum, Polygon, Sepolia)'],
    image: '/projects/payflow.png',
    liveUrl: 'https://pay-flow-five-delta.vercel.app/',
    category: 'web3',
    featured: true,
  },
  {
    id: 'script-bms',
    title: 'Script — Business Management System',
    shortDescription: 'An all-in-one business management platform built for Nigerian SMEs to manage sales, inventory, and customers.',
    fullDescription: 'Script is a smart business management system designed specifically for Nigerian small and medium enterprises. It provides a unified platform to manage sales, track inventory, monitor cash flow, and maintain customer relationships — all with local payment integrations and practical workflows tailored to the Nigerian market.',
    problem: 'Nigerian SMEs often rely on scattered tools, manual spreadsheets, or expensive foreign software that doesn\'t understand the local market. They need an affordable, reliable platform that supports local currencies, payment methods, and business workflows.',
    approach: 'Built a comprehensive, local-first platform with features like sales management, inventory tracking, advanced analytics, customer management, and team collaboration. Integrated Nigerian payment providers and optimized the app for low-bandwidth environments with offline-capable features.',
    outcome: 'Serving 500+ active businesses with over ₦2B tracked in sales. Maintains 99.9% uptime and provides 24/7 priority support. Affordable pricing at ₦200/month makes it accessible to businesses of all sizes.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Flutterwave'],
    features: ['Sales management with payment tracking', 'Real-time inventory tracking with reorder alerts', 'Advanced analytics and business insights', 'Customer relationship management', 'Team collaboration with role-based permissions', 'Nigerian bank & Flutterwave payment integration'],
    image: '/projects/script.png',
    liveUrl: 'https://scripttool.vercel.app/',
    category: 'fullstack',
    featured: true,
  },
];
