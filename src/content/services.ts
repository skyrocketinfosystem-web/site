export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  summary: string[];
  offerings: string[];
  stack: string[];
  facts: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom software development',
    short: 'Platforms built to fit an existing process instead of replacing it.',
    image: '/images/svc-custom.jpg',
    imageAlt: 'Two engineers reviewing code together on a desktop monitor',
    summary: [
      'Companies come to us when packaged software has started to dictate how they operate. Usually there is a spreadsheet holding the process together, a handful of integrations nobody wants to touch, and a team spending several hours a week on data entry that should be automatic.',
      'We take those systems on end to end: discovery, architecture, build, launch, and the on-call rota afterwards if you want it. You keep the repositories and the intellectual property throughout.',
    ],
    offerings: [
      'New product engineering, from discovery through to launch',
      'Legacy modernisation and gradual monolith decomposition',
      'Integrations across ERP, CRM, payment and logistics systems',
      'API design, versioning and internal developer documentation',
      'Back-office tooling and workflow automation',
      'Ongoing maintenance under a support retainer',
    ],
    stack: ['TypeScript', 'Node.js', 'Python', 'Java', '.NET', 'Go', 'PostgreSQL', 'GraphQL'],
    facts: [
      { label: 'Typical first release', value: '8 to 12 weeks' },
      { label: 'Sprint length', value: '2 weeks' },
      { label: 'Code ownership', value: 'Yours from commit one' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web application development',
    short: 'Web apps and sites that stay fast on a mid-range phone.',
    image: '/images/svc-web.jpg',
    imageAlt: 'Web design work in progress on a desktop and laptop screen',
    summary: [
      'Most performance problems we inherit come from the same places: unbounded JavaScript bundles, images served at full resolution, and a database query that grew a join. We measure on throttled connections and mid-tier Android hardware, because that is where a large share of Asia-Pacific traffic comes from.',
      'The work covers customer-facing sites, internal dashboards and multi-tenant SaaS products, with accessibility handled during the build rather than audited at the end.',
    ],
    offerings: [
      'SaaS dashboards and multi-tenant customer portals',
      'Headless commerce storefronts',
      'Progressive web apps with offline support',
      'Design system and component library builds',
      'Core Web Vitals and accessibility remediation',
      'Headless CMS integration and editorial workflows',
    ],
    stack: ['React', 'Next.js', 'Vue', 'Angular', 'Tailwind CSS', 'Node.js', 'Laravel', 'Django'],
    facts: [
      { label: 'Performance budget', value: 'LCP under 2.5s on 4G' },
      { label: 'Accessibility baseline', value: 'WCAG 2.2 AA' },
      { label: 'Browser support', value: 'Last two versions' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile app development',
    short: 'iOS and Android apps built for patchy networks and older devices.',
    image: '/images/svc-mobile.jpg',
    imageAlt: 'Person completing a payment on a mobile phone',
    summary: [
      'We use React Native or Flutter where a shared codebase saves money, and drop to Swift or Kotlin where the platform layer matters: background location, media pipelines, hardware peripherals, tight animation work.',
      'Release automation, crash reporting and staged rollouts go in during the first sprint, so the first store submission is a routine step rather than a scramble.',
    ],
    offerings: [
      'React Native and Flutter cross-platform apps',
      'Native Swift and Kotlin development',
      'Offline-first storage, sync and conflict resolution',
      'Push notifications, deep links and in-app purchases',
      'App Store and Play Store submission and review handling',
      'Release pipelines, crash analytics and phased rollouts',
    ],
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'Fastlane'],
    facts: [
      { label: 'Store submission', value: 'Handled by us' },
      { label: 'Crash-free target', value: '99.5% of sessions' },
      { label: 'Minimum OS support', value: 'iOS 15, Android 8' },
    ],
  },
  {
    slug: 'cloud-and-devops',
    title: 'Cloud and DevOps',
    short: 'Infrastructure defined in code, with bills you can explain.',
    image: '/images/svc-cloud.jpg',
    imageAlt: 'Engineers walking through a data centre aisle',
    summary: [
      'We treat infrastructure the same way as application code: reviewed, versioned and reproducible from an empty account. That applies whether you are moving off a single virtual machine or tuning a Kubernetes estate across three regions.',
      'A typical engagement starts with a cost and reliability review, because the fastest wins are usually oversized instances, forgotten storage and retry logic that amplifies an outage.',
    ],
    offerings: [
      'Cloud migration and landing zone design',
      'Kubernetes, containerisation and service networking',
      'Infrastructure as code with Terraform and Pulumi',
      'CI/CD pipelines and progressive delivery',
      'Monitoring, alerting and on-call runbooks',
      'Cost review and rightsizing',
    ],
    stack: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Grafana'],
    facts: [
      { label: 'Environments rebuildable', value: 'From code, end to end' },
      { label: 'Cost review finding', value: '20 to 40% typical' },
      { label: 'Deployment', value: 'On demand, no freeze windows' },
    ],
  },
  {
    slug: 'ai-and-data-engineering',
    title: 'AI and data engineering',
    short: 'Retrieval, extraction and analytics work that survives contact with real data.',
    image: '/images/svc-ai.jpg',
    imageAlt: 'Analytics dashboard showing traffic and conversion metrics',
    summary: [
      'The hard part of most AI projects is the data underneath: inconsistent formats, missing history, permissions that were never modelled. We build the pipeline first and add the model layer on top of something dependable.',
      'Every feature ships with an evaluation set, so when a prompt or a model version changes you can see whether quality moved. We stay vendor-neutral on model providers and design for swapping them.',
    ],
    offerings: [
      'LLM integration, retrieval-augmented generation and vector search',
      'Document processing and structured extraction',
      'Warehouses, lakehouses and ELT pipelines',
      'Analytics dashboards and self-serve reporting',
      'Forecasting and recommendation models',
      'Evaluation harnesses, guardrails and spend controls',
    ],
    stack: ['Python', 'PyTorch', 'LangChain', 'pgvector', 'Snowflake', 'dbt', 'Airflow', 'BigQuery'],
    facts: [
      { label: 'Every feature ships with', value: 'An evaluation set' },
      { label: 'Model providers', value: 'Interchangeable by design' },
      { label: 'Pipeline orchestration', value: 'Scheduled and monitored' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX design and product strategy',
    short: 'Research and interface work that reduces rebuilds later.',
    image: '/images/svc-design.jpg',
    imageAlt: 'Designer sketching interface wireframes next to a laptop',
    summary: [
      'Design at Skyrocket exists to cut engineering rework. We validate a flow with the people who will use it before the build starts, which is far cheaper than discovering the problem in week nine.',
      'Handover includes the states nobody enjoys drawing: empty, loading, error, permission-denied, and the long-text case that breaks the layout.',
    ],
    offerings: [
      'Discovery workshops and roadmapping',
      'User research, interviews and usability testing',
      'Wireframes, interface design and clickable prototypes',
      'Design systems with tokens and documented components',
      'Accessibility audits against WCAG 2.2',
      'Product identity and interface branding',
    ],
    stack: ['Figma', 'Design tokens', 'Storybook', 'Maze', 'Framer'],
    facts: [
      { label: 'Prototype before build', value: 'On every project' },
      { label: 'Research rounds', value: 'Two or more' },
      { label: 'Handover includes', value: 'All interface states' },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
