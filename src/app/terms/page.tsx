import type { Metadata } from 'next';
import { LastUpdated, LegalBody, LegalNotice } from '@/components/Legal';
import { PageHero, Section } from '@/components/ui';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Terms & conditions',
  description: `The terms governing your use of the ${site.name} website and the basis on which we provide services.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & conditions" intro={`These terms govern your use of the ${site.name} website and set out the general basis on which we provide our services.`} />
      <Section>
        <LegalNotice />
        <LastUpdated />
        <LegalBody>
          <h2>1. About these terms</h2>
          <p>
            This website is operated by {site.legalEntity} (“{site.shortName}”, “we”, “us”), a company registered in
            Singapore. By accessing or using this website you agree to these terms. If you do not agree with them,
            please do not use the site.
          </p>
          <p>
            These terms apply to the website only. Services we deliver to clients are governed by a separate signed
            agreement — typically a master services agreement together with one or more statements of work. Where that
            agreement conflicts with these terms, the signed agreement prevails.
          </p>

          <h2>2. Use of this website</h2>
          <p>You may view, download and print pages from this site for your own reference. You agree not to:</p>
          <ul>
            <li>Use the site in a way that damages, disables or impairs it, or interferes with anyone else’s use of it</li>
            <li>Attempt to gain unauthorised access to the site, its servers or any connected system</li>
            <li>Use automated systems to scrape or harvest content or contact details from the site at a rate that imposes an unreasonable load</li>
            <li>Republish, sell or commercially exploit material from the site without our written permission</li>
            <li>Use the site for any unlawful purpose or in breach of any applicable regulation</li>
          </ul>

          <h2>3. Intellectual property</h2>
          <p>
            Unless stated otherwise, all content on this site — text, graphics, logos, layout, code and the {site.name}{' '}
            name and marks — is owned by us or licensed to us, and is protected by copyright and trade mark law.
          </p>
          <p>
            Client work shown in our case studies remains the property of the respective clients and is published with
            their permission. Third-party technology names and logos are the property of their owners and appear here
            for identification only.
          </p>
          <p>
            <strong>Work we deliver to clients is different.</strong> Under our standard services agreement,
            intellectual property in deliverables transfers to the client on payment. Nothing in this section changes
            that.
          </p>

          <h2>4. Services, quotes and proposals</h2>
          <p>
            Descriptions of services on this site are for information only and do not constitute an offer. Timelines,
            team compositions and prices mentioned anywhere on this site are indicative. A binding scope and price
            exists only once set out in a written proposal or statement of work signed by both parties.
          </p>
          <p>
            Metrics quoted in case studies reflect outcomes for those specific clients in their specific circumstances.
            They are not a prediction or guarantee of results for any other engagement.
          </p>

          <h2>5. Enquiries and applications</h2>
          <p>
            Information you send us through the contact form, by email or as part of a job application is handled as
            described in our <a href="/privacy/">privacy policy</a>. Please do not send confidential or sensitive
            information through the website form. If you need to share something confidential before an agreement is in
            place, contact us and we will put an NDA in place first.
          </p>

          <h2>6. Third-party links</h2>
          <p>
            This site may link to third-party websites. We do not control them, we are not responsible for their
            content or practices, and a link is not an endorsement. Your use of a third-party site is governed by that
            site’s own terms.
          </p>

          <h2>7. Disclaimers</h2>
          <p>
            The site is provided on an “as is” and “as available” basis. While we take reasonable care to keep the
            content accurate and current, we make no warranty that it is complete, error-free, or that the site will be
            uninterrupted or free of harmful components. Content may be changed or removed at any time without notice.
          </p>
          <p>Nothing on this site constitutes professional, legal, financial or technical advice for your situation.</p>

          <h2>8. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special or
            consequential loss, or for any loss of profit, revenue, data, business or goodwill, arising out of your use
            of this website.
          </p>
          <p>
            Nothing in these terms excludes or limits liability that cannot lawfully be excluded, including liability
            for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.
          </p>

          <h2>9. Indemnity</h2>
          <p>
            You agree to indemnify us against any claims, losses and reasonable costs arising from your breach of these
            terms or your misuse of the site.
          </p>

          <h2>10. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The version published on this page is the one in force, and
            the “last updated” date above shows when it changed. Continued use of the site after a change means you
            accept the revised terms.
          </p>

          <h2>11. Governing law</h2>
          <p>
            These terms are governed by the laws of Singapore. The courts of Singapore have exclusive jurisdiction over
            any dispute arising from them or from your use of this website.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>, or by post to{' '}
            {site.legalEntity}, {site.address.line1} {site.address.line2}, {site.address.city} {site.address.postal},{' '}
            {site.address.country}.
          </p>
        </LegalBody>
      </Section>
    </>
  );
}
