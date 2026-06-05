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
  sourceUrl?: string;
  role?: string;
  year?: string;
  status?: string;
  category: 'fullstack' | 'frontend' | 'web3' | 'backend';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'clearsig',
    title: 'ClearSig Shared Wallet',
    shortDescription: 'A Web3 shared wallet where groups can create requests, review activity, and approve transactions without one person handling keys alone.',
    fullDescription: 'ClearSig is a shared wallet product for friends, families, and teams. It makes group money movement transparent by letting everyone see the request, approve actions, and work through a safer shared-control flow before real value moves.',
    problem: 'Shared crypto wallets are often difficult to coordinate and risky when one person controls the keys. Teams need a clearer approval experience that reduces trust assumptions and keeps wallet activity understandable.',
    approach: 'Handled the complete frontend experience for the hackathon build, translating the product flow into responsive screens, wallet states, request views, and approval interactions. Worked closely with the team on product decisions while keeping the app usable during a fast shipping cycle.',
    outcome: 'Helped the team place 2nd at the Ika hackathon and continued into the Head of Product Engineering role for ClearSig after the build.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web3 UX', 'Solana Devnet', 'Product Engineering'],
    features: ['Shared wallet onboarding and workspace flow', 'Transaction request and approval interface', 'Transparent activity and review states', 'Responsive frontend built for fast demos and ongoing iteration', 'Security-conscious wallet messaging and user flows'],
    image: '/projects/clearsig.xyz_.png',
    liveUrl: 'https://clearsig.xyz/',
    sourceUrl: 'https://github.com/clear-msig/clear-msig',
    role: 'Frontend Lead and Head of Product Engineering',
    year: '2026',
    status: 'Pre-alpha',
    category: 'web3',
    featured: true,
  },
  {
    id: 'fyb-studio',
    title: 'FYB Studio',
    shortDescription: 'A design-led studio for final-year students to personalize templates, preview designs live, and export polished PNG assets.',
    fullDescription: 'FYB Studio is a full-stack application that helps final-year students create clean celebration visuals without waiting on a designer. The product focuses on ready-made templates, guided personalization, live preview, account flows, and fast PNG export for class campaigns and graduation moments.',
    problem: 'Final-year student groups often need campaign and celebration designs quickly, but custom design work can be slow, inconsistent, or expensive for students.',
    approach: 'Built a focused full-stack product experience around template discovery, fast editing, responsive previews, user flows, and export-ready visuals. The interface keeps students close to the final output from the first interaction.',
    outcome: 'Created a practical creative tool that turns student design requests into a self-serve workflow with polished output.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Full-Stack Architecture', 'Image Export'],
    features: ['Template browsing for final-year designs', 'Personalized design inputs', 'Live preview workflow', 'PNG export for social and print use', 'Mobile-friendly student experience'],
    image: '/projects/fybstudio.jpg',
    liveUrl: 'https://www.fybstudio.app/',
    role: 'Full-Stack Product Engineer',
    year: '2026',
    status: 'Live',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'winview-mfb',
    title: 'WinView Microfinance Bank',
    shortDescription: 'A digital-first microfinance banking website for a licensed MFB serving cooperatives, SMEs, and individuals in Nigeria.',
    fullDescription: 'WinView Microfinance Bank is a customer-facing banking platform for a microfinance bank in Abuja. The website presents account opening, cooperative banking, SME banking, loans, digital banking, support channels, and branch information in a modern, trust-focused experience.',
    problem: 'Financial institutions need clear public digital touchpoints that communicate trust, licensing, product offerings, and support access without overwhelming customers.',
    approach: 'Worked on a professional web experience with strong responsive layout, product storytelling, CBN and NDIC trust signals, app download prompts, contact routes, and conversion-focused calls to action.',
    outcome: 'Delivered a polished digital presence that positions WinView as a secure, rapid, and tailored microfinance institution for Nigerian customers.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design', 'Fintech UX'],
    features: ['Banking product landing experience', 'CBN and NDIC trust-signal presentation', 'Account opening and app download prompts', 'Support, helpline, and location sections', 'Mobile-first fintech interface'],
    image: '/projects/www.winviewmfb.com_.png',
    liveUrl: 'https://www.winviewmfb.com/',
    role: 'Frontend Developer',
    year: '2026',
    status: 'Live',
    category: 'frontend',
    featured: true,
  },
  {
    id: 'ocassia-events',
    title: 'Ocassia Event Marketplace',
    shortDescription: 'A comprehensive marketplace connecting event hosts with service providers and venues, featuring secure escrow payments and ticketing.',
    fullDescription: 'Ocassia is an all-in-one event marketplace and management platform designed to bridge the gap between event hosts, service providers, and venue owners. It provides a secure ecosystem where hosts can discover and book vendors, manage event ticketing, and handle logistics, while giving service providers and venues the tools they need to manage bookings, increase visibility, and guarantee payment security through an integrated escrow system.',
    problem: 'Organizing an event typically involves dealing with multiple unverified vendors, insecure payment methods, and scattered communication. Event hosts struggle to find reliable service providers and venues, while vendors face issues with delayed payments, double bookings, and lack of market visibility.',
    approach: 'Architected a multi-sided marketplace platform with distinct dashboards for hosts, service providers, and venue owners. Integrated a secure escrow payment system to build trust between parties, ensuring funds are only released when services are delivered. Built a comprehensive booking engine that handles availability, ticketing, and vendor management in one unified interface.',
    outcome: 'Created a trust-based ecosystem that significantly reduces the friction of event planning. The platform streamlines the entire process from vendor discovery to final payment, providing peace of mind for hosts and a reliable business management tool for event professionals.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Payment Gateway (Escrow)'],
    features: ['Multi-vendor marketplace for event services and venues', 'Secure escrow payment system for guaranteed transactions', 'Event ticketing and attendee management', 'Dedicated dashboards for hosts, vendors, and venues', 'Real-time booking and availability management', 'Vendor discovery and verified review system'],
    image: '/projects/ocassia.png',
    liveUrl: 'https://ocassia-six.vercel.app/',
    role: 'Full-Stack Developer',
    year: '2025',
    status: 'Live',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'payflow',
    title: 'PayFlow Web3 Payroll',
    shortDescription: 'A decentralized payroll platform for Web3 teams and DAOs. Currently in development.',
    fullDescription: 'PayFlow is a blockchain-powered payroll management platform that enables DAOs and Web3 teams to manage salary payments securely and transparently. It removes the need for intermediaries by leveraging smart contracts to hold and distribute funds, making payroll trustless, auditable, and efficient.',
    problem: 'Managing payroll in decentralized organizations is complex and fragmented. Traditional payroll systems don\'t support crypto payments, and manual wallet transfers are error-prone, time-consuming, and lack transparency for team members.',
    approach: 'Designed a clean, intuitive dashboard that abstracts away blockchain complexity so administrators can onboard team members, set salaries, and execute payroll in just a few clicks. Smart contracts handle fund custody and distribution with built-in security measures to protect against common vulnerabilities.',
    outcome: 'Currently in active development. The platform supports one-click payroll execution, real-time payment tracking, and seamless wallet integration, positioning it as a go-to payroll solution for the growing Web3 workforce.',
    techStack: ['Next.js', 'TypeScript', 'Solidity', 'Ethers.js', 'Tailwind CSS', 'Framer Motion', 'OpenZeppelin'],
    features: ['One-click payroll execution for entire teams', 'On-chain transparency with full audit trail', 'Secure smart contract with reentrancy protection', 'Seamless MetaMask wallet integration', 'Team member dashboard with payment history', 'Multi-network support (Ethereum, Polygon, Sepolia)'],
    image: '/projects/payflow.png',
    liveUrl: 'https://pay-flow-five-delta.vercel.app/',
    role: 'Product Engineer',
    year: '2025',
    status: 'In development',
    category: 'web3',
    featured: true,
  },
  {
    id: 'script-bms',
    title: 'Script Business Management',
    shortDescription: 'An all-in-one business management platform built for Nigerian SMEs to manage sales, inventory, and customers.',
    fullDescription: 'Script is a smart business management system designed specifically for Nigerian small and medium enterprises. It provides a unified platform to manage sales, track inventory, monitor cash flow, and maintain customer relationships with local payment integrations and practical workflows tailored to the Nigerian market.',
    problem: 'Nigerian SMEs often rely on scattered tools, manual spreadsheets, or expensive foreign software that doesn\'t understand the local market. They need an affordable, reliable platform that supports local currencies, payment methods, and business workflows.',
    approach: 'Built a comprehensive, local-first platform with features like sales management, inventory tracking, advanced analytics, customer management, and team collaboration. Integrated Nigerian payment providers and optimized the app for low-bandwidth environments with offline-capable features.',
    outcome: 'Placed 5th at HackJos 2025 and shaped a practical SME management product around sales, inventory, customer management, and analytics.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    features: ['Sales management with payment tracking', 'Real-time inventory tracking with reorder alerts', 'Advanced analytics and business insights', 'Customer relationship management', 'Team collaboration with role-based permissions', 'Nigerian bank & Flutterwave payment integration'],
    image: '/projects/script.png',
    liveUrl: 'https://scripttool.vercel.app/',
    role: 'Product Engineer',
    year: '2025',
    status: 'Hackathon build',
    category: 'fullstack',
    featured: true,
  },
];
