export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  placement: string;
  product: string;
  productUrl: string;
  eventUrl: string;
  role: string;
  summary: string;
  highlights: string[];
  image: string;
  tags: string[];
}

export const hackathons: Hackathon[] = [
  {
    id: 'ika-clearsig',
    name: 'Ika Hackathon',
    organizer: 'Ika',
    date: 'May 2026',
    placement: '2nd place',
    product: 'ClearSig',
    productUrl: 'https://clearsig.xyz/',
    eventUrl: 'https://x.com/ikadotxyz/status/2060346329881084034?s=20',
    role: 'Frontend Lead and Head of Product Engineering',
    summary: 'Built ClearSig, a shared wallet product for friends, families, and teams where everyone can see requests, approve actions, and reduce single-person key control.',
    highlights: [
      'Owned the full frontend for the hackathon product',
      'Designed and implemented shared wallet request and approval flows',
      'Continued with the product as Head of Product Engineering after the hackathon',
    ],
    image: '/projects/clearsig.png',
    tags: ['Web3', 'Shared Wallet', 'Product Engineering', 'Frontend'],
  },
  {
    id: 'hackjos-script',
    name: 'HackJos 2025',
    organizer: 'nHub',
    date: 'November 11 to 13, 2025',
    placement: '5th place',
    product: 'Script Business Management',
    productUrl: 'https://scripttool.vercel.app/',
    eventUrl: 'https://x.com/nHubNG/status/1979566196417769617?s=20',
    role: 'Product Engineer',
    summary: 'Built Script, an SME business management platform for sales, inventory, customers, analytics, and local-first business workflows.',
    highlights: [
      'Shipped a functional product during the HackJos build window',
      'Focused the product around practical Nigerian SME operations',
      'Helped the team finish 5th at the hackathon',
    ],
    image: '/projects/hackjosHackathon.png',
    tags: ['SME Tools', 'Inventory', 'Sales', 'HackJos'],
  },
];
