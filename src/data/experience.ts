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
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'Deta Wallet',
    location: 'Remote',
    startDate: 'Jan 2026',
    endDate: 'Present',
    description: 'Building a consumer wallet application as the senior frontend developer for a fintech startup.',
    achievements: [
      'Leading frontend architecture and development of the consumer wallet product',
      'Implementing secure, responsive UI components for financial transactions',
      'Collaborating with backend and blockchain teams to integrate wallet functionality',
      'Establishing frontend coding standards and component library for the team',
    ],
    techUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Web3.js', 'REST APIs'],
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
    role: 'Senior Frontend Developer',
    company: 'Uphouse',
    location: 'Remote',
    startDate: '2024',
    endDate: '2025',
    description: 'Served as senior frontend developer building and shipping web products for clients.',
    achievements: [
      'Led frontend development across multiple client projects with fast delivery cycles',
      'Architected reusable component libraries and design systems',
      'Mentored junior developers through code reviews and pair programming sessions',
      'Delivered performant, accessible interfaces with 95+ Lighthouse scores',
    ],
    techUsed: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
  },
  {
    id: '4',
    role: 'Software Engineering Student',
    company: 'Nigerian Army University',
    location: 'On-site',
    startDate: '2023',
    endDate: 'Present',
    description: 'Pursuing a degree in Software Engineering, currently in final year.',
    achievements: [
      'Studying software engineering principles, data structures, and algorithms',
      'Building personal and academic projects using modern web technologies',
      'Participating in coding competitions and tech community events',
      'Combining academic knowledge with real-world professional experience',
    ],
    techUsed: ['Python', 'Java', 'C++', 'React', 'Data Structures', 'Algorithms'],
  },
];
