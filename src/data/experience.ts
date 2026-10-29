export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  techUsed: string[];
}

export const experiences: Experience[] = [
  {
    id: 'clearsig',
    role: 'Senior Frontend Engineer',
    company: 'DETALINKS TECHNOLOGY',
    location: 'Remote',
    startDate: 'Jan 2026',
    endDate: 'Present',
    description: 'Building frontend experiences for DETALINKS TECHNOLOGY products ClearSig, a shared Web3 wallet, and Deta Wallet, a consumer wallet. My work spans frontend architecture, wallet onboarding and transaction flows, ClearSig request and approval experiences, integrations with backend and blockchain services, and responsive interface standards.',
    achievements: [
      'Handled the complete frontend implementation for the ClearSig hackathon build',
      'Helped the team secure 2nd place at the Ika hackathon',
      'Lead frontend architecture and development for the Deta Wallet consumer product',
      'Build secure, responsive interfaces for wallet onboarding and financial transactions',
      'Collaborate with backend and blockchain teams to integrate wallet functionality',
      'Guide product direction, security messaging, and shared wallet approval experiences',
    ],
    techUsed: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web3.js', 'REST APIs', 'Product Engineering'],
  },
  {
    id: '2',
    role: 'Frontend Developer (Intern)',
    company: 'NHUD Foundation',
    location: 'On-site',
    startDate: 'Aug 2025',
    endDate: 'Jan 2026',
    description: 'Completed a hands-on internship building frontend interfaces for the foundation\'s digital platforms.',
    achievements: [
      'Developed and maintained responsive web interfaces for the foundation\'s projects',
      'Collaborated with designers and backend developers to deliver features on schedule',
      'Improved page load performance and accessibility across multiple pages',
      'Gained practical experience working in a professional team environment',
    ],
    techUsed: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git'],
  },
  {
    id: '3',
    role: 'Co-founder, COO & CTO',
    company: 'GeoPonix',
    location: 'Remote',
    startDate: '2026',
    endDate: 'Present',
    description: 'Co-leading GeoPonix as COO and CTO while serving as Hardware Engineer and Mobile Developer. Build precision-agriculture and agro-intelligence solutions by connecting field hardware, mobile software, and practical farming workflows.',
    achievements: [
      'Guide company, product, and engineering direction for precision-agriculture solutions',
      'Develop mobile experiences and integrate field hardware for agricultural data collection',
      'Connect hardware and mobile workflows to support useful agro-intelligence products',
      'Build scalable, user-centered systems that support the company’s long-term vision',
    ],
    techUsed: ['Hardware Engineering', 'Flutter', 'Dart', 'IoT', 'Bluetooth Low Energy', 'Precision Agriculture', 'Product Strategy'],
  },
  {
    id: '4',
    role: 'Co-founder & CTO',
    company: 'Kenule Africa',
    location: 'Remote',
    startDate: '2026',
    endDate: 'Present',
    description: 'Driving the technical vision and product engineering direction for Kenule Africa while helping shape the company’s digital growth and platform experience.',
    achievements: [
      'Lead technical planning and execution across the company’s digital products',
      'Design and implement user-facing systems that support business growth',
      'Translate product vision into scalable and maintainable engineering decisions',
      'Build a strong technical foundation for the company’s startup roadmap',
    ],
    techUsed: ['React', 'TypeScript', 'Next.js', 'Product Engineering', 'Leadership', 'Architecture'],
  },
  {
    id: '5',
    role: 'BSc Software Engineering',
    company: 'Nigerian Army University',
    location: 'On-site',
    startDate: '2023',
    endDate: '2026',
    description: 'Graduated with a Bachelor of Science in Software Engineering.',
    achievements: [
      'Completed studies in software engineering principles, data structures, and algorithms',
      'Built academic projects using modern web technologies',
      'Participated in coding competitions and tech community events',
      'Applied academic knowledge to real-world professional work',
    ],
    techUsed: ['Python', 'Java', 'C++', 'React', 'Data Structures', 'Algorithms'],
  },
];
