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
    company: 'TechFlow Inc.',
    location: 'Remote',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: 'Leading frontend architecture and development for a SaaS platform serving enterprise clients.',
    achievements: [
      'Architected and led migration from legacy jQuery codebase to React + TypeScript, improving performance by 40%',
      'Established frontend coding standards, component library, and CI/CD pipelines for the team',
      'Mentored 4 junior developers through code reviews, pair programming, and tech talks',
      'Implemented micro-frontend architecture to enable independent team deployments',
    ],
    techUsed: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Jest'],
  },
  {
    id: '2',
    role: 'Full-Stack Developer',
    company: 'StartupLab',
    location: 'Remote',
    startDate: 'Mar 2022',
    endDate: 'Dec 2023',
    description: 'Built and maintained multiple web applications for various startup clients with fast delivery cycles.',
    achievements: [
      'Delivered 8+ full-stack projects on time and within budget for diverse startup clients',
      'Built a real-time collaborative project management tool used by 15+ teams',
      'Implemented CI/CD pipelines reducing deployment time from 30 minutes to 5 minutes',
      'Optimized database queries resulting in 60% improvement in API response times',
    ],
    techUsed: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'PixelCraft Studio',
    location: 'Hybrid',
    startDate: 'Jun 2021',
    endDate: 'Feb 2022',
    description: 'Crafted responsive, animated web interfaces for creative agency clients across multiple industries.',
    achievements: [
      'Developed 12+ responsive websites with complex animations using GSAP and Framer Motion',
      'Achieved 95+ Lighthouse scores consistently across all delivered projects',
      'Collaborated directly with design team to establish a reusable component library',
      'Reduced average project delivery time by 20% through workflow automation',
    ],
    techUsed: ['React', 'Vue.js', 'SCSS', 'GSAP', 'Framer Motion', 'Figma'],
  },
  {
    id: '4',
    role: 'Junior Web Developer',
    company: 'WebCraft Agency',
    location: 'On-site',
    startDate: 'Jan 2021',
    endDate: 'May 2021',
    description: 'Started professional career building websites and gaining foundational full-stack skills.',
    achievements: [
      'Built and deployed 6 client websites using React and Node.js',
      'Implemented responsive designs that worked across all major browsers',
      'Learned agile development practices and version control workflows',
      'Contributed to the company\'s internal component library',
    ],
    techUsed: ['React', 'JavaScript', 'Node.js', 'CSS', 'Git', 'Firebase'],
  },
];
