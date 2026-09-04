export type Job = {
  slug: string;
  title: string;
  team: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

// TODO: keep this list current. Delete the array contents to show the "no open roles" state.
export const jobs: Job[] = [
  {
    slug: 'senior-full-stack-engineer',
    salary: 'US$65k – US$95k',
    title: 'Senior Full-Stack Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote (GMT+5:30 to GMT+10)',
    experience: '5+ years',
    posted: '2026-08-18',
    summary:
      'You will own delivery on one or two client products at a time — architecture, implementation and the production behaviour of what you ship. You will be the senior voice on those accounts and make the architectural calls.',
    responsibilities: [
      'Build features end to end across the frontend, API and data layers',
      'Act as the technical point of contact for your client, translating business goals into a workable plan',
      'Review code and raise the standard of the codebases you work in',
      'Take production responsibility for what you ship, including incidents during your working hours',
      'Mentor mid-level engineers through pairing and design review',
    ],
    requirements: [
      'Five or more years building and operating production web applications',
      'Depth in TypeScript and a modern React framework, plus a server-side language of your choice',
      'Solid relational data modelling and an instinct for where queries go wrong',
      'Experience being responsible for a service in production, including its failures',
      'Clear written English, since most of our collaboration is asynchronous',
    ],
    niceToHave: [
      'Agency or consulting background across multiple client contexts',
      'Kubernetes or Terraform experience',
      'Public open-source contributions or technical writing',
    ],
  },
  {
    slug: 'react-native-developer',
    salary: 'US$45k – US$70k',
    title: 'React Native Developer',
    team: 'Mobile',
    type: 'Full-time',
    location: 'Remote (Asia-Pacific)',
    experience: '3+ years',
    posted: '2026-08-25',
    summary:
      'Build cross-platform apps for clients in healthcare, logistics and field services, where a mid-range Android phone on a weak connection is the normal case.',
    responsibilities: [
      'Ship features across iOS and Android from a shared React Native codebase',
      'Write native modules in Swift or Kotlin when the cross-platform layer runs out',
      'Own offline behaviour, sync and conflict resolution for the apps you work on',
      'Maintain release pipelines and manage store submissions',
      'Investigate crash and performance reports and close the loop on them',
    ],
    requirements: [
      'Three or more years of React Native in production, with apps live in both stores',
      'Able to read and write Swift or Kotlin when the cross-platform layer runs out',
      'Practical experience with offline-first data and background sync',
      'Familiar with mobile performance profiling and crash analytics',
    ],
    niceToHave: ['Flutter experience', 'WebRTC or realtime media', 'Accessibility on mobile platforms'],
  },
  {
    slug: 'devops-engineer',
    salary: 'US$60k – US$90k',
    title: 'DevOps Engineer',
    team: 'Platform',
    type: 'Full-time',
    location: 'Remote (GMT+1 to GMT+8)',
    experience: '4+ years',
    posted: '2026-07-30',
    summary:
      'Own the infrastructure layer across three or four client environments at a time, covering AWS, Azure and Google Cloud. You will also share the on-call rota.',
    responsibilities: [
      'Build and maintain infrastructure as code across AWS, Azure and Google Cloud',
      'Run Kubernetes clusters and the deployment pipelines that feed them',
      'Set up observability so that failures are visible before customers report them',
      'Lead incident response and write the postmortems that stop repeats',
      'Review cloud spend and cut what is not earning its cost',
    ],
    requirements: [
      'Four or more years in DevOps, SRE or platform engineering',
      'Strong Terraform and Kubernetes, and at least one cloud provider in depth',
      'CI/CD pipeline design, including release strategies more involved than a single deploy step',
      'Scripting in Python, Go or Bash',
      'Comfortable leading an incident and writing the postmortem afterwards',
    ],
    niceToHave: ['Security or compliance work (SOC 2, ISO 27001)', 'Service mesh', 'FinOps experience'],
  },
  {
    slug: 'product-designer',
    salary: 'US$45k – US$72k',
    title: 'Product Designer (UI/UX)',
    team: 'Design',
    type: 'Full-time',
    location: 'Remote (Asia-Pacific)',
    experience: '4+ years',
    posted: '2026-08-11',
    summary:
      'Work across two or three client products at a time, from discovery research through to a documented design system that our engineers build against.',
    responsibilities: [
      'Run discovery workshops and user research with client stakeholders',
      'Produce wireframes, high-fidelity interfaces and interactive prototypes',
      'Build and maintain design systems with real tokens, states and edge cases',
      'Test designs with users and iterate on what the tests actually show',
      'Work alongside engineers through implementation, not just at handover',
    ],
    requirements: [
      'Four or more years designing digital products, with a portfolio of shipped work',
      'Expert in Figma including components, variables and auto layout',
      'Able to run a user interview and synthesise what came out of it',
      'Working knowledge of accessibility standards and how to meet them',
      'Able to present and defend design decisions to non-designers',
    ],
    niceToHave: ['Front-end coding ability', 'Motion or interaction design', 'Design systems at scale'],
  },
  {
    slug: 'qa-automation-engineer',
    salary: 'US$38k – US$58k',
    title: 'QA Automation Engineer',
    team: 'Quality',
    type: 'Full-time',
    location: 'Remote (Asia-Pacific)',
    experience: '3+ years',
    posted: '2026-08-29',
    summary:
      'Set up and maintain automated test coverage across several client projects, and help the engineers on them write code that is easier to test.',
    responsibilities: [
      'Design and maintain automated test suites across web and mobile',
      'Integrate tests into CI so failures block merges rather than surface later',
      'Build API and contract tests alongside end-to-end coverage',
      'Run performance and load testing ahead of known traffic peaks',
      'Coach engineers on testable design',
    ],
    requirements: [
      'Three or more years in test automation',
      'Playwright, Cypress or a comparable end-to-end framework',
      'Comfortable writing TypeScript or Python test code',
      'API testing and mocking experience',
      'Bug reports precise enough that a developer can reproduce the issue first try',
    ],
    niceToHave: ['Mobile test automation (Detox, Appium)', 'k6 or JMeter', 'Accessibility testing'],
  },
];

export const jobBySlug = (slug: string) => jobs.find((j) => j.slug === slug);
