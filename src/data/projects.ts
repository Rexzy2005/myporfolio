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
  {
    id: 'nexus-ecommerce',
    title: 'Nexus E-Commerce Platform',
    shortDescription: 'A full-stack e-commerce platform with real-time inventory, Stripe payments, and admin dashboard.',
    fullDescription: 'Built a scalable e-commerce platform serving 10,000+ monthly active users with real-time inventory tracking, secure checkout, and a comprehensive admin panel.',
    problem: 'The client needed a modern, performant e-commerce solution that could handle high traffic during flash sales while maintaining real-time inventory accuracy across multiple warehouses.',
    approach: 'Architected a React + Next.js frontend with server-side rendering for SEO, paired with a Node.js/Express backend. Implemented WebSocket connections for real-time inventory updates and Redis caching for product catalogs.',
    outcome: 'Reduced page load times by 60%, achieved 99.9% uptime during peak sales events, and increased conversion rates by 35% compared to the previous platform.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Tailwind CSS'],
    features: ['Real-time inventory tracking', 'Stripe payment integration', 'Admin dashboard with analytics', 'Responsive product catalog', 'Order management system', 'Email notifications'],
    image: '/projects/nexus-ecommerce.jpg',
    liveUrl: 'https://example.com',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'defi-swap',
    title: 'DeFi Token Swap dApp',
    shortDescription: 'A decentralized exchange interface for swapping ERC-20 tokens with liquidity pool management.',
    fullDescription: 'Developed a decentralized application enabling users to swap tokens, provide liquidity, and earn yield through automated market maker (AMM) mechanics.',
    problem: 'Users needed a user-friendly way to interact with complex DeFi smart contracts without understanding the underlying blockchain mechanics.',
    approach: 'Created intuitive React interfaces that abstract away blockchain complexity. Wrote Solidity smart contracts with comprehensive test coverage and built a real-time price feed using Chainlink oracles.',
    outcome: 'Processed over $2M in total value locked (TVL) within the first 3 months. Achieved zero critical security vulnerabilities across 3 independent audits.',
    techStack: ['React', 'TypeScript', 'Solidity', 'Ethers.js', 'Hardhat', 'Tailwind CSS', 'The Graph'],
    features: ['Token swap with price impact preview', 'Liquidity pool management', 'Wallet integration (MetaMask, WalletConnect)', 'Transaction history', 'Real-time price charts', 'Slippage protection'],
    image: '/projects/defi-swap.jpg',
    liveUrl: 'https://example.com',
    category: 'web3',
    featured: true,
  },
  {
    id: 'taskflow-pm',
    title: 'TaskFlow Project Manager',
    shortDescription: 'A collaborative project management tool with real-time updates, Kanban boards, and team analytics.',
    fullDescription: 'Built an end-to-end project management SaaS application with real-time collaboration features, automated workflows, and detailed team productivity analytics.',
    problem: 'Remote teams struggled with fragmented tools that didn\'t integrate well. They needed a unified platform for task tracking, communication, and performance insights.',
    approach: 'Developed a React SPA with WebSocket-powered real-time sync. Backend built with Node.js and MongoDB, featuring role-based access control, automated email notifications, and a GraphQL API for flexible data querying.',
    outcome: 'Adopted by 15+ teams within the first month. Reduced average task completion time by 25% and improved team visibility into project progress by 40%.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Socket.io', 'Tailwind CSS'],
    features: ['Drag-and-drop Kanban boards', 'Real-time collaboration', 'Sprint planning tools', 'Team analytics dashboard', 'Automated notifications', 'File attachments & comments'],
    image: '/projects/taskflow.jpg',
    liveUrl: 'https://example.com',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 'portfolio-builder',
    title: 'PortfolioGen — AI Portfolio Builder',
    shortDescription: 'A drag-and-drop portfolio builder with AI-generated content suggestions and one-click deployment.',
    fullDescription: 'Created a no-code portfolio builder that uses AI to help developers generate professional content and deploy their portfolios instantly.',
    problem: 'Many developers have strong technical skills but struggle to create compelling portfolio sites that showcase their work effectively.',
    approach: 'Built a drag-and-drop editor with React and used OpenAI\'s API for content generation. Implemented a template system with customizable themes and one-click Vercel deployment via their API.',
    outcome: 'Over 500 portfolios generated in the beta phase. Featured on Product Hunt with 200+ upvotes. Average portfolio creation time: 15 minutes.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Vercel API', 'Firebase'],
    features: ['Drag-and-drop editor', 'AI content generation', 'Custom theme builder', 'One-click deployment', 'Analytics dashboard', 'Custom domain support'],
    image: '/projects/portfolio-builder.jpg',
    liveUrl: 'https://example.com',
    category: 'frontend',
    featured: true,
  },
  {
    id: 'healthtrack-api',
    title: 'HealthTrack REST API',
    shortDescription: 'A comprehensive health metrics API with JWT auth, rate limiting, and webhook integrations.',
    fullDescription: 'Designed and built a production-ready REST API for a health tracking application, handling user authentication, data aggregation, and third-party integrations.',
    problem: 'The health-tech startup needed a robust, secure API that could handle sensitive health data while integrating with wearable devices and third-party health platforms.',
    approach: 'Built a Node.js/Express API with PostgreSQL, implementing HIPAA-inspired security practices. Added rate limiting, request validation, comprehensive logging, and webhook support for real-time data sync with wearable devices.',
    outcome: 'Successfully handled 100K+ daily API requests with 99.95% uptime. Zero data breaches across 12 months of production use.',
    techStack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Jest', 'AWS'],
    features: ['JWT authentication & refresh tokens', 'Rate limiting & throttling', 'Webhook integrations', 'Data aggregation & analytics', 'Comprehensive API documentation', 'Automated testing pipeline'],
    image: '/projects/healthtrack.jpg',
    category: 'backend',
    featured: false,
  },
];
