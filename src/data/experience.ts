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
    role: 'Head of Product Engineering / Frontend Lead',
    company: 'ClearSig',
    location: 'Remote',
    startDate: 'May 2026',
    endDate: 'Present',
    description: 'Leading product engineering for ClearSig, a Web3 shared wallet product for teams, families, and groups that need transparent transaction approval.',
    achievements: [
      'Handled the complete frontend implementation for the ClearSig hackathon build',
      'Helped the team secure 2nd place at the Ika hackathon',
      'Own product direction, frontend architecture, and user experience for shared wallet flows',
      'Collaborate across wallet logic, security messaging, onboarding, and approval interactions',
    ],
    techUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web3 UX', 'Product Engineering'],
  },
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
    role: 'Co-founder & CTO',
    company: 'Geoponix',
    location: 'Remote',
    startDate: '2026',
    endDate: 'Present',
    description: 'Leading technical strategy and product engineering for Geoponix, shaping the platform architecture and user experience for the company’s digital product.',
    achievements: [
      'Define product and engineering direction for the core platform',
      'Lead frontend architecture and product execution for high-impact user experiences',
      'Collaborate on technical decisions that connect business goals with product delivery',
      'Build scalable, user-centered systems that support the company’s long-term vision',
    ],
    techUsed: ['React', 'TypeScript', 'Next.js', 'Product Strategy', 'Architecture', 'Team Leadership'],
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
