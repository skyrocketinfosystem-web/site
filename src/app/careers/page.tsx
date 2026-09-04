import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow, Button, Card, PageHero, Section, SectionHeading, Tag } from '@/components/ui';
import { jobs } from '@/content/jobs';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Remote engineering, design and QA roles at Skyrocket InfoSystem, a Singapore-registered agency with people in Singapore, India, Vietnam and Australia.',
};

const perks = [
  {
    title: 'Remote, with no head office',
    body: 'We gave up the lease in 2021. There is no location where the real decisions happen, because there is no location.',
  },
  {
    title: 'Few meetings',
    body: 'A weekly team call and a client ceremony or two. Everything else is written, so you are not expected online outside your own hours.',
  },
  {
    title: 'You talk to the client',
    body: 'Engineers join scoping calls and present their own work. Nobody translates your estimate into something optimistic before it reaches the client.',
  },
  {
    title: 'US$1,500 learning budget',
    body: 'Per year, for courses, conferences and certifications, plus five days off the tools to use it.',
  },
  {
    title: 'New domains, sensible pace',
    body: 'You will change sector every year or so. Engagements are measured in quarters, so you go deep rather than skimming.',
  },
  {
    title: 'Leave that gets taken',
    body: '25 days plus local public holidays, and leads who chase people who have not booked any by September.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build things you will still be supporting next year"
        intro="We are 48 people across Singapore, India, Vietnam and Australia. Roles are remote, hours overlap rather than match, and every application is read by an engineer."
        image={{ src: '/images/careers-remote.jpg', alt: 'Laptops and devices on a shared desk during a working session' }}
      >
        <Button href="#open-roles" size="lg">
          See open roles <Arrow />
        </Button>
        <Button href={`mailto:${site.careersEmail}`} variant="secondary" size="lg">
          Apply speculatively
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Working here"
          title="What remote means in practice"
          intro="Remote since 2020 and structured for it, which mostly means writing things down and not expecting anyone to be reachable at midnight."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <Card key={p.title}>
              <h3 className="font-bold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="open-roles" className="border-y border-line bg-surface">
        <SectionHeading
          eyebrow="Open roles"
          title={jobs.length ? `${jobs.length} roles open` : 'No open roles at the moment'}
          intro={
            jobs.length
              ? 'All roles are remote. We reply to every application, including the ones we turn down.'
              : 'We are not hiring right now, but we do read speculative applications and keep the good ones on file.'
          }
        />

        <div className="mt-12 grid gap-4">
          {jobs.map((job) => (
            <article
              key={job.slug}
              className="group relative flex flex-col gap-5 rounded-xl border border-line bg-white p-7 card-shadow transition hover:border-brand/40 hover:card-shadow-lg md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-lg font-bold">
                  <Link href={`/careers/${job.slug}/`} className="after:absolute after:inset-0">
                    {job.title}
                  </Link>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{job.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li><Tag>{job.team}</Tag></li>
                  <li><Tag>{job.type}</Tag></li>
                  <li><Tag>{job.location}</Tag></li>
                  <li><Tag>{job.experience}</Tag></li>
                  <li><Tag>{job.salary}</Tag></li>
                </ul>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand">
                View role <Arrow className="transition group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-xl border border-line bg-surface px-8 py-12 text-center md:px-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Nothing here fits but you think we should talk?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
            Send us something you have built and a few lines on what was hard about it. We keep good applications on
            file and come back to them when a role opens.
          </p>
          <div className="mt-7">
            <Button href={`mailto:${site.careersEmail}?subject=Speculative%20application`} size="lg">
              Email the careers team <Arrow />
            </Button>
            {/* The address is shown separately: inside the button it cannot wrap and
                pushes the page wider than a 375px viewport. */}
            <p className="mt-3 text-sm break-words text-muted">{site.careersEmail}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
