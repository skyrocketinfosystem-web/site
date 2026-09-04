import type { Metadata } from 'next';
import { Card, CTA, PageHero, Section, SectionHeading, Tag } from '@/components/ui';
import { TechLogo, techLogos } from '@/components/TechLogos';
import { clientTypes, engagementModels, industriesServed, testimonials } from '@/content/company';

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Skyrocket InfoSystem works with startups, scale-ups, enterprises and agencies across payments, healthcare, logistics, retail, education and other sectors.',
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Every stage, fourteen countries"
        intro="A founder with a prototype and a listed enterprise migrating off a mainframe need different things from us. We are structured to do both without one crowding out the other."
        image={{ src: '/images/clients-meeting.jpg', alt: 'Client workshop taking place in a meeting room' }}
      />

      <Section>
        <SectionHeading eyebrow="Who we serve" title="Four kinds of client" />
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

      <Section className="border-y border-line bg-surface">
        <SectionHeading
          eyebrow="Industries"
          title="Sectors we have shipped in"
          intro="Prior domain knowledge shortens discovery. Where we have not worked in your sector before, we say so and price the learning curve into the estimate rather than hiding it."
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {industriesServed.map((i) => (
            <li key={i}>
              <span className="rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-body card-shadow">
                {i}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Engagement models"
          title="Pick the arrangement, not just the team"
          intro="Most clients start on one model and move to another as the work changes. Switching does not need a new master agreement."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {engagementModels.map((m) => (
            <Card key={m.title} className="flex flex-col">
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="mt-2.5 flex-1 leading-relaxed text-muted">{m.body}</p>
              <dl className="mt-6 grid gap-3 border-t border-line pt-5 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-xs text-muted">Best for</dt>
                  <dd className="mt-1 font-medium text-head">{m.fit}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Billing</dt>
                  <dd className="mt-1 font-medium text-head">{m.billing}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Commitment</dt>
                  <dd className="mt-1 font-medium text-head">{m.commitment}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-y border-line bg-surface">
        <SectionHeading
          eyebrow="Technology"
          title="Tools our clients' systems run on"
          intro="Shown for identification only. We are an independent agency and are not a reseller or certified partner of any of these vendors."
        />
        <ul className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-7">
          {techLogos.map((logo) => (
            <li key={logo.id} className="flex items-center gap-2.5">
              <TechLogo d={logo.d} title={logo.title} className="h-6 w-6 text-slate-400" />
              <span className="text-sm text-muted">{logo.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
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

      <CTA
        title="Want to speak to one of them?"
        body="We can arrange a reference call with a client working in a sector close to yours. Ask when you get in touch and we will set it up."
      />
    </>
  );
}
