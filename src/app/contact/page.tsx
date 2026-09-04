import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { PageHero, Section } from '@/components/ui';
import { site } from '@/content/site';
import { faqs } from '@/content/company';

export const metadata: Metadata = {
  title: 'Contact us',
  description: `Talk to Skyrocket InfoSystem about your project. Email ${site.email}, call ${site.phone}, or send an enquiry and we will reply within one working day.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need built"
        intro="Send the brief, or a paragraph describing the problem. We reply within one working day, usually with questions before we quote anything."
      />

      <Section className="pt-0 md:pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-7 card-shadow">
              <h2 className="text-sm font-semibold text-head">Direct</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs text-muted">New business</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="font-semibold text-head transition hover:text-brand">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Careers</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.careersEmail}`} className="font-semibold text-head transition hover:text-brand">
                      {site.careersEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="font-semibold text-head transition hover:text-brand">
                      {site.phone}
                    </a>
                    <span className="mt-0.5 block text-xs text-muted">Mon to Fri, 9am to 6pm SGT</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="overflow-hidden rounded-xl border border-line bg-white card-shadow">
              <div className="relative aspect-16/10">
                <Image
                  src="/images/contact-singapore.jpg"
                  alt="The Marina Bay skyline in Singapore at dusk"
                  fill
                  sizes="(min-width:1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h2 className="text-sm font-semibold text-head">Registered office</h2>
                <address className="mt-4 space-y-0.5 text-sm not-italic leading-relaxed text-muted">
                  <span className="block font-semibold text-head">{site.legalEntity}</span>
                  <span className="block">{site.address.line1}</span>
                  <span className="block">{site.address.line2}</span>
                  <span className="block">
                    {site.address.city} {site.address.postal}
                  </span>
                  <span className="block pt-2 text-xs">UEN {site.uen}</span>
                </address>
                <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                  This is our registered address rather than a working office. The team is spread across Singapore,
                  India, Vietnam and Australia, covering roughly GMT+1 to GMT+10.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-surface p-7">
              <h2 className="text-sm font-semibold text-head">What happens next</h2>
              <ol className="mt-5 space-y-4 text-sm">
                {[
                  'We read your enquiry and reply within one working day.',
                  'A 30-minute call to go through the problem, the constraints and the deadline.',
                  'A written proposal with scope, approach, team shape, timeline and price.',
                ].map((step, i) => (
                  <li key={step} className="flex gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint font-display text-xs font-bold text-brand">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed text-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface">
        <h2 className="text-3xl font-bold">Before you write</h2>
        <div className="mt-8 max-w-3xl divide-y divide-line rounded-xl border border-line bg-white px-7 card-shadow">
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
    </>
  );
}
