import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow, Button, Check, CTA, PageHero, Section, Tag } from '@/components/ui';
import { services, serviceBySlug } from '@/content/services';
import { caseStudies } from '@/content/case-studies';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.title, description: service.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = caseStudies.filter((c) => c.services.includes(service.title)).slice(0, 2);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        intro={service.short}
        image={{ src: service.image, alt: service.imageAlt }}
      >
        <Button href="/contact/" size="lg">
          Discuss a project <Arrow />
        </Button>
        <Button href="/services/" variant="secondary" size="lg">
          All services
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {service.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">What we deliver</h2>
            <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {service.offerings.map((o) => (
                <li key={o} className="flex gap-2.5 text-sm leading-relaxed text-body">
                  <Check />
                  <span>{o}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Technologies we use here</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-line bg-surface p-7">
              <h2 className="text-sm font-semibold text-head">At a glance</h2>
              <dl className="mt-5 space-y-4">
                {service.facts.map((f) => (
                  <div key={f.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs text-muted">{f.label}</dt>
                    <dd className="mt-1 font-semibold text-head">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {related.length ? (
              <div className="rounded-xl border border-line bg-white p-7 card-shadow">
                <h2 className="text-sm font-semibold text-head">Related work</h2>
                <ul className="mt-4 space-y-3.5">
                  {related.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/case-studies/${c.slug}/`}
                        className="block text-sm font-medium leading-snug text-body transition hover:text-brand"
                      >
                        {c.title}
                        <span className="mt-0.5 block text-xs text-muted">{c.industry}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <h2 className="text-2xl font-bold">Other services</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-white px-5 py-4 text-sm font-medium text-body transition hover:border-brand/40 hover:text-brand"
            >
              {s.title}
              <Arrow className="transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
