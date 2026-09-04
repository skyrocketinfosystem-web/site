import type { Metadata } from 'next';
import { CaseStudyGrid } from '@/components/CaseStudyGrid';
import { CTA, PageHero, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Case studies',
  description:
    'Six engagements from Skyrocket InfoSystem across payments, healthcare, retail, logistics, SaaS and education, with the outcomes clients reported after launch.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Six projects and what changed"
        intro="Client names are withheld where the agreement requires it. Every figure here comes from the client's own reporting after launch, not from our estimates."
      />
      <Section>
        <CaseStudyGrid />
      </Section>
      <CTA />
    </>
  );
}
