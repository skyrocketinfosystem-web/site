import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow, Button, Check, PageHero, Section } from '@/components/ui';
import { jobs, jobBySlug } from '@/content/jobs';
import { site } from '@/content/site';

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobBySlug(slug);
  if (!job) return {};
  return { title: job.title, description: job.summary };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobBySlug(slug);
  if (!job) notFound();

  const applyHref = `mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application — ${job.title}`)}&body=${encodeURIComponent(
    `Hi Skyrocket team,\n\nI would like to apply for the ${job.title} role.\n\nLinks to my work:\n\nWhy I am a fit:\n\n(Please attach your CV before sending.)\n`,
  )}`;

  const others = jobs.filter((j) => j.slug !== job.slug);

  return (
    <>
      <PageHero eyebrow={`Careers · ${job.team}`} title={job.title} intro={job.summary}>
        <Button href={applyHref} size="lg">
          Apply for this role <Arrow />
        </Button>
        <Button href="/careers/" variant="secondary" size="lg">
          All openings
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">What you will do</h2>
            <ul className="mt-6 space-y-3">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-2.5 leading-relaxed text-muted">
                  <Check />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">What we are looking for</h2>
            <ul className="mt-6 space-y-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex gap-2.5 leading-relaxed text-muted">
                  <Check />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Nice to have</h2>
            <ul className="mt-6 space-y-3">
              {job.niceToHave.map((r) => (
                <li key={r} className="flex gap-2.5 leading-relaxed text-muted">
                  <Check />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-xl border border-line bg-surface p-7">
              <h2 className="text-xl font-bold">How to apply</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Email us your CV and links to work you can talk about. You can skip the cover letter. Instead, write a
                few lines on something you built, what was difficult about it, and what you would do differently now.
                An engineer reads every application, and we reply either way, usually within a week.
              </p>
              <div className="mt-7">
                <Button href={applyHref}>
                  Apply by email <Arrow />
                </Button>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-7 card-shadow">
              <h2 className="text-sm font-semibold text-head">Role details</h2>
              <dl className="mt-6 space-y-5 text-sm">
                <Detail label="Team" value={job.team} />
                <Detail label="Type" value={job.type} />
                <Detail label="Location" value={job.location} />
                <Detail label="Experience" value={job.experience} />
                <Detail label="Salary band" value={job.salary} />
                <Detail
                  label="Posted"
                  value={new Date(job.posted).toLocaleDateString('en-SG', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                />
              </dl>
            </div>

            {others.length ? (
              <div className="rounded-xl border border-line bg-white p-7 card-shadow">
                <h2 className="text-sm font-semibold text-head">
                  Other openings
                </h2>
                <ul className="mt-5 space-y-4">
                  {others.map((j) => (
                    <li key={j.slug}>
                      <Link
                        href={`/careers/${j.slug}/`}
                        className="block text-sm font-medium text-body transition hover:text-brand"
                      >
                        {j.title}
                        <span className="mt-1 block text-xs text-muted">{j.location}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1.5 font-medium text-head">{value}</dd>
    </div>
  );
}
