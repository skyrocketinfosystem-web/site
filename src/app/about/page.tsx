import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CTA, PageHero, Section, SectionHeading, Stat, Arrow, Button } from '@/components/ui';
import { stats, values, timeline, faqs } from '@/content/company';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'About us',
  description: `Skyrocket InfoSystem was registered in Singapore in ${site.founded} and has worked remotely since 2020. Forty-eight people across Singapore, India, Vietnam and Australia.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Registered in Singapore in 2019. Remote since 2020."
        intro="We started because too many projects we had seen ended the week the agency invoiced its final milestone. Most of how we work follows from trying not to repeat that."
        image={{ src: '/images/about-singapore.jpg', alt: 'Marina Bay and the Singapore city skyline from above' }}
      >
        <Button href="/careers/" size="lg">
          Open roles <Arrow />
        </Button>
        <Button href="/contact/" variant="secondary" size="lg">
          Work with us
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Our story" title="Four engineers and one complaint" />
            <div className="mt-6 space-y-5 leading-relaxed text-muted">
              <p>
                Skyrocket InfoSystem was registered in {site.founded} by four engineers working out of a shared office
                on Circular Road. The early clients were regional startups that needed a whole product team rather than
                a string of individual contractors.
              </p>
              <p>
                In 2020 the office closed and did not reopen. Working across borders forced us to write things down:
                architecture decisions in the repository, weekly updates in writing, review that does not depend on two
                people being awake at once. We gave up the lease the following year and have hired remotely since.
              </p>
              <p>
                Today there are 48 of us across Singapore, India, Vietnam and Australia. We have delivered more than 120
                projects for clients in fourteen countries, and roughly two-thirds of our work each year comes from
                clients we have worked with before.
              </p>
              <p>
                We are not the cheapest option in the region and do not try to be. What we sell is a team that will
                tell you when something is a bad idea, and that is still reachable in month fourteen.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl card-shadow-lg">
              <Image
                src="/images/about-workshop.jpg"
                alt="A discovery workshop in progress with sticky notes on a whiteboard"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <dl className="grid grid-cols-2 gap-7 rounded-xl border border-line bg-surface p-7">
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
        </div>
      </Section>

      <Section className="border-y border-line bg-surface">
        <SectionHeading
          eyebrow="How we operate"
          title="Six things we hold ourselves to"
          intro="These show up in how we scope, review and invoice, which is the only place values ever really show up."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <h3 className="font-bold">{v.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Timeline" title="How the company changed" />
            <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-xl card-shadow">
              <Image
                src="/images/about-team.jpg"
                alt="Team members working together around a table"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ol className="border-l border-line pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[2.28rem] top-1 h-3 w-3 rounded-full border-2 border-brand bg-white"
                />
                <span className="font-display text-sm font-bold text-brand">{t.year}</span>
                <h3 className="mt-1.5 text-lg font-bold">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <SectionHeading eyebrow="FAQ" title="Questions we get asked first" />
        <div className="mt-10 max-w-3xl divide-y divide-line rounded-xl border border-line bg-white px-7 card-shadow">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-head">
                {f.q}
                <span aria-hidden className="shrink-0 text-brand transition group-open:rotate-45">
                  <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
