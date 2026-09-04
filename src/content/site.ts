export const site = {
  name: 'Skyrocket InfoSystem',
  shortName: 'Skyrocket',
  description:
    'Skyrocket InfoSystem is a software development agency registered in Singapore. Since 2019 we have built web, mobile, cloud and data products for startups, scale-ups and enterprises across Asia-Pacific.',
  founded: 2019,

  // TODO: replace every value in this block before launch.
  url: 'https://skyrocketinfosystem.com',
  email: 'contact@skyrocketinfosystem.com',
  careersEmail: 'careers@skyrocketinfosystem.com',
  phone: '+65 6812 4400',
  legalEntity: 'Skyrocket InfoSystem Pte. Ltd.',
  uen: '201914728K',
  address: {
    line1: '68 Circular Road',
    line2: '#02-01',
    city: 'Singapore',
    postal: '049422',
    country: 'Singapore',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/skyrocket-infosystem',
    github: 'https://github.com/skyrocket-infosystem',
    x: 'https://x.com/skyrocketinfo',
  },
  legalUpdated: '1 September 2026',
} as const;

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/case-studies/', label: 'Case studies' },
  { href: '/clients/', label: 'Clients' },
  { href: '/about/', label: 'About' },
  { href: '/careers/', label: 'Careers' },
] as const;
