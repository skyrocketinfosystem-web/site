import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Arrow, CTA, PageHero, Section, SectionHeading, Tag } from '@/components/ui';
import { services } from '@/content/services';
import { process } from '@/content/company';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom software, web and mobile development, cloud and DevOps, AI and data engineering, and product design, delivered by one team with a single point of accountability.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From the first line of code to the on-call rota"
        intro="Six practices that combine into one delivery team. Nothing gets handed between departments halfway through a project."
      />

      <Section>
        <div className="grid gap-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="group relative grid gap-8 overflow-hidden rounded-xl border border-line bg-white card-shadow transition hover:border-brand/40 hover:card-shadow-lg lg:grid-cols-[1fr_1.5fr]"
            >
              <div className="relative min-h-56 lg:min-h-full">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width:1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-7 pt-0 lg:py-9 lg:pl-0 lg:pr-9">
                <span className="font-display text-sm font-bold text-brand">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-2 text-2xl font-bold">
                  <Link href={`/services/${service.slug}/`} className="after:absolute after:inset-0">
                    {service.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{service.short}</p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.offerings.slice(0, 4).map((o) => (
                    <li key={o} className="text-sm leading-relaxed text-body">
                      {o}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.stack.slice(0, 6).map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Service details <Arrow className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <SectionHeading
          eyebrow="Delivery"
          title="The same five stages on every engagement"
          intro="A six-week prototype and an eighteen-month migration go through the same steps at different sizes."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {process.map((p) => (
            <li key={p.step} className="rounded-xl border border-line bg-white p-6 card-shadow">
              <span className="font-display text-sm font-bold text-brand">{p.step}</span>
              <h3 className="mt-2.5 font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTA />
    </>
  );
}
