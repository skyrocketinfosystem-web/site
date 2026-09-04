import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow, Button, CTA, PageHero, Section, Tag } from '@/components/ui';
import { caseStudies, caseStudyBySlug } from '@/content/case-studies';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  return study ? { title: study.title, description: study.excerpt } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();

  const more = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  const facts = [
    { label: 'Client', value: study.client },
    { label: 'Industry', value: study.industry },
    { label: 'Region', value: study.region },
    { label: 'Duration', value: study.duration },
    { label: 'Team', value: study.teamSize },
    { label: 'Delivered', value: study.year },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Case study · ${study.industry}`}
        title={study.title}
        intro={study.excerpt}
        image={{ src: study.image, alt: study.imageAlt }}
      />

      <Section>
        <dl className="grid grid-cols-2 gap-7 rounded-xl border border-line bg-surface p-7 md:grid-cols-6">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs uppercase tracking-wide text-muted">{f.label}</dt>
              <dd className="mt-1.5 text-sm font-semibold text-head">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">The problem</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              {study.challenge.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">What we did</h2>
            <ol className="mt-6 space-y-5">
              {study.solution.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-tint font-display text-xs font-bold text-brand">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-muted">{s}</p>
                </li>
              ))}
            </ol>

            {study.quote ? (
              <figure className="mt-12 rounded-xl border-l-4 border-brand bg-surface p-7">
                <blockquote className="text-lg leading-relaxed text-head">“{study.quote.text}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-head">{study.quote.author}</span>
                  <span className="mt-0.5 block text-muted">{study.quote.role}</span>
                </figcaption>
              </figure>
            ) : null}
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-7 card-shadow">
              <h2 className="text-sm font-semibold text-head">Reported outcomes</h2>
              <dl className="mt-5 space-y-5">
                {study.results.map((r) => (
                  <div key={r.label} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <dt className="sr-only">{r.label}</dt>
                    <dd>
                      <span className="font-display text-3xl font-bold text-brand">{r.metric}</span>
                      <span className="mt-1.5 block text-sm leading-snug text-muted">{r.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-line bg-surface p-7">
              <h2 className="text-sm font-semibold text-head">Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
              <h2 className="mt-7 text-sm font-semibold text-head">Services</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.services.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/contact/" className="w-full" size="lg">
              Discuss a similar project <Arrow />
            </Button>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <h2 className="text-2xl font-bold">More work</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {more.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}/`}
              className="group overflow-hidden rounded-xl border border-line bg-white card-shadow transition hover:border-brand/40"
            >
              <div className="relative aspect-16/9 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(min-width:768px) 30vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Tag>{c.industry}</Tag>
                <h3 className="mt-3 font-bold leading-snug transition group-hover:text-brand">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
