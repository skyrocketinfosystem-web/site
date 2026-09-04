import Image from 'next/image';
import Link from 'next/link';
import { Arrow, Button, Card, Section, SectionHeading, Stat, Tag, CTA } from '@/components/ui';
import { TechLogo, techLogos } from '@/components/TechLogos';
import { services } from '@/content/services';
import { caseStudies } from '@/content/case-studies';
import { stats, techStack, testimonials, clientTypes, process } from '@/content/company';
import { site } from '@/content/site';

export default function HomePage() {
  const featured = caseStudies.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="wash pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="animate-rise">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-body card-shadow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                Singapore-registered · Remote since 2019
              </p>
              <h1 className="text-[2.3rem] font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                A software team you can hand the whole problem to
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Skyrocket InfoSystem builds web, mobile, cloud and data products for companies across Asia-Pacific and
                beyond. We have been doing it since {site.founded}, and we stay on after launch.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact/" size="lg">
                  Start a project <Arrow />
                </Button>
                <Button href="/case-studies/" variant="secondary" size="lg">
                  See what we have built
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-xl card-shadow-lg">
              <Image
                src="/images/hero-team.jpg"
                alt="Skyrocket InfoSystem engineers working together at laptops"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Stat value={s.value} label={s.label} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Tech logo strip */}
      <section className="border-y border-line bg-surface py-10">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">
            Technologies we work in every week
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-9 gap-y-6">
            {techLogos.map((logo) => (
              <li key={logo.id} title={logo.title}>
                <TechLogo d={logo.d} title={logo.title} className="h-7 w-7 text-slate-400 transition hover:text-brand" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="Services"
          title="Six practices that work as one team"
          intro="Most projects need more than one of these. You get a single team and one point of accountability rather than a handover between departments halfway through."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white card-shadow transition hover:border-brand/40 hover:card-shadow-lg"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold">
                  <Link href={`/services/${service.slug}/`} className="after:absolute after:inset-0">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Read more <Arrow className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Case studies */}
      <Section className="border-y border-line bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Six projects and what changed"
            intro="Figures below come from the clients' own reporting after launch. Names are withheld where the agreement requires it."
          />
          <Button href="/case-studies/" variant="secondary">
            All case studies <Arrow />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((study) => (
            <article
              key={study.slug}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white card-shadow transition hover:border-brand/40 hover:card-shadow-lg"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  fill
                  sizes="(min-width:1024px) 30vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Tag>{study.industry}</Tag>
                <h3 className="mt-3.5 font-bold leading-snug">
                  <Link href={`/case-studies/${study.slug}/`} className="after:absolute after:inset-0">
                    {study.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{study.excerpt}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <span className="font-display text-2xl font-bold text-head">{study.results[0].metric}</span>
                  <span className="mt-0.5 block text-xs text-muted">{study.results[0].label}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="The same five stages on every engagement"
          intro="Whether it is a six-week prototype or an eighteen-month migration, the shape of the work does not change."
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

      {/* Tech stack */}
      <Section className="border-y border-line bg-surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Technology"
            title="We choose the stack around your constraints"
            intro="Your existing systems, your hiring market and who maintains it after we leave all matter more than our preferences. Here is what we currently run in production for clients."
          />
          <div className="grid gap-7 sm:grid-cols-2">
            {techStack.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-semibold text-head">{group.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section>
        <SectionHeading
          eyebrow="Who we work with"
          title="From first prototype to enterprise migration"
          intro="We take clients at every stage. What we need is a problem understood well enough that we can be useful from week one."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((c) => (
            <Card key={c.title}>
              <h3 className="font-bold">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{c.body}</p>
              <p className="mt-4 border-t border-line pt-3.5 text-xs text-muted">{c.example}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="border-t border-line bg-surface">
        <SectionHeading eyebrow="References" title="What clients said afterwards" align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-xl border border-line bg-white p-7 card-shadow">
              <blockquote className="leading-relaxed text-body">“{t.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <span className="font-semibold text-head">{t.author}</span>
                <span className="mt-0.5 block text-muted">{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
