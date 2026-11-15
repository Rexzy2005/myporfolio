export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  date: string;
  placement: string;
  product: string;
  track?: string;
  productUrl: string;
  eventUrl: string;
  role: string;
  summary: string;
  highlights: string[];
  image: string;
  imageFit?: 'cover' | 'contain';
}

export const hackathons: Hackathon[] = [
  {
    id: 'hackjos-2026-jari',
    name: 'HackJos 2026',
    organizer: 'nHub',
    date: 'November 4 to 6, 2026',
    placement: '4th place',
    product: 'Jari',
    track: 'Agri-Finance & Inclusion',
    productUrl: 'https://jari-jet.vercel.app/',
    eventUrl: 'https://www.hackjos.com.ng/',
    role: 'Product Engineer',
    summary: 'Built Jari on the Agri-Finance & Inclusion track: a poultry farm intelligence platform that brings farm operations and financial records together to help farmers present a clearer profile for finance and insurance opportunities.',
    highlights: [
      'Built for HackJos 2026’s Agri-Finance & Inclusion track',
      'Connected farm, flock, health, production, and financial records in one platform',
      'Placed 4th at the agriculture-focused hackathon',
    ],
    image: '/projects/hackjos2026.png',
    imageFit: 'cover',
  },
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
  },
];
