import type { ReactNode } from 'react';
import { site } from '@/content/site';

/**
 * Shared shell for the legal pages. The `prose` styling is hand-rolled rather
 * than pulling in @tailwindcss/typography for three pages.
 */
export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-3xl
        [&_h2]:mt-14 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-head
        [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-head
        [&_p]:mt-5 [&_p]:leading-relaxed [&_p]:text-muted
        [&_ul]:mt-5 [&_ul]:space-y-3 [&_ul]:pl-5
        [&_li]:list-disc [&_li]:leading-relaxed [&_li]:text-muted [&_li]:marker:text-brand
        [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2
        [&_strong]:font-semibold [&_strong]:text-head
      "
    >
      {children}
    </div>
  );
}

export function LegalNotice() {
  return (
    <p className="mb-12 max-w-3xl rounded-lg border border-amber-300 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
      <strong className="font-semibold">Template notice:</strong> this policy is a starting point, not legal advice.
      Have it reviewed against Singapore’s PDPA and any other jurisdiction you operate in before you go live, then
      delete this notice from <code className="rounded bg-amber-100 px-1">src/components/Legal.tsx</code>.
    </p>
  );
}

export function LastUpdated() {
  return <p className="text-sm text-muted">Last updated: {site.legalUpdated}</p>;
}
