export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  imageAlt: string;
  services: string[];
  year: string;
  duration: string;
  teamSize: string;
  region: string;
  excerpt: string;
  challenge: string[];
  solution: string[];
  stack: string[];
  results: { metric: string; label: string }[];
  quote?: { text: string; author: string; role: string };
};

// TODO: replace these with real, client-approved case studies before launch.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'cross-border-payments-platform',
    image: '/images/cs-payments.jpg',
    imageAlt: 'Contactless card payment being taken at a retail counter',
    title: 'Cutting settlement time from days to minutes for a cross-border payments platform',
    client: 'Regional fintech (name withheld)',
    industry: 'Fintech',
    services: ['Custom Software Development', 'Cloud & DevOps'],
    year: '2025',
    duration: '9 months',
    teamSize: '7 engineers',
    region: 'Southeast Asia',
    excerpt:
      'A batch-based settlement engine was capping growth at 40,000 transactions a day. We rebuilt it as an event-driven ledger with idempotent replay.',
    challenge: [
      'Settlement ran as an overnight batch job, so merchants waited up to three days for funds and the operations team spent mornings reconciling failures by hand.',
      'The ledger lived in a single write-heavy database that had already been vertically scaled twice, and a failed batch meant reprocessing the entire day.',
      'A new licence obligation required a full, immutable audit trail with per-transaction traceability — something the existing schema could not produce.',
    ],
    solution: [
      'We modelled the ledger as an append-only event store with derived read projections, so balances became a materialised view rather than a mutable row.',
      'Every settlement step was made idempotent and independently replayable, which turned a failed batch from a full-day rerun into a targeted retry.',
      'Processing moved onto a partitioned queue with per-corridor consumers, letting throughput scale by adding consumers instead of resizing the database.',
      'We shipped the audit trail as a first-class product surface with a compliance-facing export and a searchable transaction timeline.',
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Kafka', 'Kubernetes', 'Terraform', 'AWS', 'Grafana'],
    results: [
      { metric: '2 min', label: 'Median settlement time, down from 3 days' },
      { metric: '11×', label: 'Peak daily transaction throughput' },
      { metric: '92%', label: 'Reduction in manual reconciliation hours' },
    ],
    quote: {
      text: 'They understood our regulatory constraints better than the consultants we had before them. The audit trail alone paid for the project.',
      author: 'Head of Engineering',
      role: 'Cross-border payments platform',
    },
  },
  {
    slug: 'telemedicine-mobile-app',
    image: '/images/cs-telemedicine.jpg',
    imageAlt: 'Clinician using a mobile phone while wearing a white coat and stethoscope',
    title: 'A telemedicine app that works on a 3G connection in a rural clinic',
    client: 'Private healthcare group',
    industry: 'Healthcare',
    services: ['Mobile App Development', 'UI/UX Design & Product Strategy'],
    year: '2024',
    duration: '6 months',
    teamSize: '5 engineers, 1 designer',
    region: 'Singapore & Malaysia',
    excerpt:
      'Consultations kept dropping outside major cities. We rebuilt the client offline-first and made the video layer degrade gracefully instead of failing.',
    challenge: [
      'The existing app assumed a stable connection. In the regional clinics that needed it most, consultations dropped mid-call and notes were lost.',
      'Clinicians were re-entering patient history because the app could not queue writes while offline.',
      'Patient data handling had to satisfy healthcare privacy requirements across two jurisdictions with different consent rules.',
    ],
    solution: [
      'We moved to an offline-first architecture with a local encrypted store, queued mutations and last-write-wins resolution on a per-field basis.',
      'The video layer now steps down from HD video to audio-only to an asynchronous voice note rather than dropping the session outright.',
      'Consent was modelled per jurisdiction as data, so adding a third market became a configuration change rather than a release.',
      'We ran two rounds of usability testing with clinicians and cut the consultation flow from eleven screens to four.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'WebRTC', 'Node.js', 'Azure'],
    results: [
      { metric: '99.6%', label: 'Crash-free sessions' },
      { metric: '−64%', label: 'Consultations abandoned mid-call' },
      { metric: '4.7★', label: 'Average store rating post-launch' },
    ],
  },
  {
    slug: 'ecommerce-replatform',
    image: '/images/cs-ecommerce.jpg',
    imageAlt: 'Retail team packing and processing online orders',
    title: 'Replatforming a 40,000-SKU retailer without a traffic dip',
    client: 'Multi-brand retail group',
    industry: 'Retail & E-commerce',
    services: ['Web Application Development', 'Cloud & DevOps'],
    year: '2025',
    duration: '7 months',
    teamSize: '6 engineers',
    region: 'APAC',
    excerpt:
      'A decade-old monolith was taking eleven seconds to render a category page. We moved to headless commerce and migrated traffic route by route.',
    challenge: [
      'Category pages took over eleven seconds on mobile, and organic traffic had been declining for six consecutive quarters.',
      'The storefront and the order management system were the same application, so any frontend change risked fulfilment.',
      'A big-bang cutover was unacceptable — the site carried the majority of the group’s revenue.',
    ],
    solution: [
      'We introduced a headless storefront in front of the existing commerce backend and migrated one route group at a time behind a proxy.',
      'Product and category pages became statically generated with incremental revalidation, so catalogue updates propagate without a rebuild.',
      'Search moved to a dedicated index with faceting, replacing the SQL `LIKE` queries that had been driving database load.',
      'We ran both stacks in parallel for eight weeks with traffic split by route, so any regression was a routing change away from rollback.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'Elasticsearch', 'Redis', 'Vercel Edge', 'AWS'],
    results: [
      { metric: '1.4s', label: 'Largest Contentful Paint, down from 11s' },
      { metric: '+38%', label: 'Organic search traffic in six months' },
      { metric: '0', label: 'Minutes of downtime during migration' },
    ],
    quote: {
      text: 'The route-by-route migration is what sold us. We were never more than one config change away from rolling back.',
      author: 'Digital Director',
      role: 'Multi-brand retail group',
    },
  },
  {
    slug: 'fleet-tracking-logistics',
    image: '/images/cs-logistics.jpg',
    imageAlt: 'Warehouse aisles stacked with palletised freight',
    title: 'Live fleet visibility for 2,300 vehicles across six countries',
    client: 'Regional logistics operator',
    industry: 'Logistics & Supply Chain',
    services: ['Custom Software Development', 'AI & Data Engineering'],
    year: '2024',
    duration: '10 months',
    teamSize: '8 engineers',
    region: 'Southeast Asia',
    excerpt:
      'Dispatchers were phoning drivers for ETAs. We built a telemetry pipeline and a routing model that beat their manual estimates by 22 minutes.',
    challenge: [
      'Vehicle telemetry arrived from four different hardware vendors in four different formats, and none of it reached the dispatch team in real time.',
      'ETAs were estimated by phone. Customer service had no answer to "where is my shipment" other than to call the driver.',
      'Cross-border routes added customs dwell time that no off-the-shelf routing engine accounted for.',
    ],
    solution: [
      'We normalised every vendor feed into a single telemetry schema at ingest, so downstream consumers never learn about vendor quirks.',
      'A streaming pipeline aggregates position, speed and dwell events into a live fleet view with sub-ten-second latency.',
      'We trained an ETA model on two years of historical route data, including border-crossing dwell times by checkpoint and hour of day.',
      'Customers got a self-serve tracking page, which removed the majority of inbound status calls.',
    ],
    stack: ['Python', 'Go', 'Kafka', 'TimescaleDB', 'scikit-learn', 'Airflow', 'Kubernetes', 'Google Cloud'],
    results: [
      { metric: '22 min', label: 'More accurate ETAs than manual estimates' },
      { metric: '−71%', label: 'Inbound "where is my shipment" calls' },
      { metric: '<10s', label: 'Telemetry-to-dashboard latency' },
    ],
  },
  {
    slug: 'saas-analytics-dashboard',
    image: '/images/cs-analytics.jpg',
    imageAlt: 'Product analytics dashboard showing usage charts',
    title: 'Turning a reporting bottleneck into a self-serve analytics product',
    client: 'B2B SaaS scale-up',
    industry: 'SaaS',
    services: ['AI & Data Engineering', 'Web Application Development'],
    year: '2025',
    duration: '5 months',
    teamSize: '4 engineers',
    region: 'Singapore & Australia',
    excerpt:
      'Two analysts were spending most of their week building customer reports by hand. We shipped a self-serve layer and gave them their week back.',
    challenge: [
      'Every customer report was assembled manually from three systems, which capped the company at roughly forty reports a month.',
      'Enterprise prospects were asking for analytics in sales calls, and the answer was a spreadsheet emailed a week later.',
      'The production database was being queried directly for reporting, causing latency spikes during business hours.',
    ],
    solution: [
      'We built an ELT pipeline into a warehouse with modelled, tested and documented metrics, so a number means the same thing everywhere.',
      'Reporting reads moved off production entirely, which removed the query contention that had been causing the spikes.',
      'A self-serve dashboard lets customers filter, compare periods and schedule their own exports.',
      'A natural-language query layer sits on top of the modelled metrics — constrained to the semantic layer, so it cannot invent a number.',
    ],
    stack: ['Next.js', 'TypeScript', 'Python', 'dbt', 'Snowflake', 'Airflow', 'DuckDB'],
    results: [
      { metric: '90%', label: 'Of reports now self-serve' },
      { metric: '2 FTE', label: 'Analyst capacity returned to the business' },
      { metric: '−80%', label: 'Peak database query latency' },
    ],
  },
  {
    slug: 'edtech-learning-platform',
    image: '/images/cs-education.jpg',
    imageAlt: 'Students seated in a university lecture theatre',
    title: 'Scaling a learning platform from 4,000 to 90,000 concurrent learners',
    client: 'Education technology provider',
    industry: 'Education',
    services: ['Cloud & DevOps', 'Web Application Development'],
    year: '2024',
    duration: '8 months',
    teamSize: '6 engineers',
    region: 'India & Singapore',
    excerpt:
      'Exam weeks brought the platform down every term. We rearchitected around the actual traffic shape: quiet for weeks, then a wall.',
    challenge: [
      'Traffic was extraordinarily spiky — near-idle for weeks, then 20× load during exam periods, and the platform failed every term.',
      'Video delivery was served from the origin, so bandwidth costs scaled linearly with enrolment.',
      'Assessment submissions were lost during peaks, which is the single worst possible failure for an exam platform.',
    ],
    solution: [
      'Submissions were decoupled behind a durable queue and acknowledged the moment they were persisted, so a slow grader never loses a student’s work.',
      'Video moved to a CDN with adaptive bitrate, cutting origin bandwidth and improving playback on constrained connections.',
      'Autoscaling was rebuilt around scheduled pre-warming for known exam windows rather than reactive scaling that arrived too late.',
      'We added load testing to CI at realistic peak volumes, so capacity regressions are caught before the term starts.',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Kubernetes', 'CloudFront', 'AWS'],
    results: [
      { metric: '90k', label: 'Concurrent learners supported' },
      { metric: '0', label: 'Lost submissions since launch' },
      { metric: '−58%', label: 'Infrastructure cost per active learner' },
    ],
    quote: {
      text: 'Three exam cycles without an incident. Before this project that sentence would have been unthinkable.',
      author: 'Chief Technology Officer',
      role: 'Education technology provider',
    },
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const industries = [...new Set(caseStudies.map((c) => c.industry))].sort();
