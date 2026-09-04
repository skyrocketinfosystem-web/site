import type { Metadata } from 'next';
import { LastUpdated, LegalBody, LegalNotice } from '@/components/Legal';
import { PageHero, Section } from '@/components/ui';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `How ${site.name} collects, uses and protects personal data, in line with Singapore's Personal Data Protection Act.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="What personal data we collect, why we collect it, how long we keep it, and the rights you have over it."
      />
      <Section>
        <LegalNotice />
        <LastUpdated />
        <LegalBody>
          <h2>1. Who we are</h2>
          <p>
            {site.legalEntity} is a software development company registered in Singapore. For the purposes of
            Singapore’s Personal Data Protection Act 2012 (PDPA), and of the GDPR where it applies to visitors in the
            European Economic Area and the United Kingdom, we are the controller of the personal data described here.
          </p>
          <p>
            Our data protection contact is <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>2. What we collect</h2>
          <h3>Information you give us</h3>
          <ul>
            <li><strong>Enquiries:</strong> your name, work email, company, phone number where you provide it, and whatever you write in the message field</li>
            <li><strong>Job applications:</strong> your name, contact details, CV, work history and any links or portfolio you send</li>
            <li><strong>Correspondence:</strong> the content of emails and calls with us, and notes we make about them</li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li>Technical data such as your IP address, browser type, device type and operating system</li>
            <li>Usage data such as pages viewed, time on page and the referring site</li>
          </ul>
          <p>
            We do not collect special categories of personal data, and we do not knowingly collect data from anyone
            under 16. This site is not directed at children.
          </p>

          <h2>3. Why we use it, and on what basis</h2>
          <ul>
            <li><strong>To respond to your enquiry</strong> — because you asked us to, and because it is in our legitimate interest to answer people who contact us</li>
            <li><strong>To assess a job application</strong> — to take steps at your request before entering an employment relationship</li>
            <li><strong>To deliver services</strong> — to perform our contract with you or your organisation</li>
            <li><strong>To improve the website</strong> — legitimate interest in understanding how the site is used</li>
            <li><strong>To meet legal obligations</strong> — tax, accounting and regulatory record-keeping</li>
          </ul>
          <p>
            We do not sell personal data, and we do not use it for automated decision-making or profiling that produces
            legal or similarly significant effects.
          </p>

          <h2>4. Marketing</h2>
          <p>
            We send marketing email only where you have opted in or where you are an existing client and the message
            relates to services similar to those we have provided. Every marketing email carries an unsubscribe link,
            and you can opt out at any time by emailing us. Opting out of marketing does not stop service-related
            messages about an active project.
          </p>

          <h2>5. Who we share it with</h2>
          <p>We share personal data only where necessary, and only with:</p>
          <ul>
            <li><strong>Service providers</strong> who process data on our behalf — website hosting, form handling, email and analytics — under contracts that restrict them to our instructions</li>
            <li><strong>Professional advisers</strong> such as lawyers and accountants, where required</li>
            <li><strong>Authorities</strong> where we are legally required to disclose</li>
            <li><strong>An acquirer</strong> in the event of a merger or sale of the business, subject to the same protections</li>
          </ul>

          <h2>6. International transfers</h2>
          <p>
            We are a remote-first company with staff and suppliers across several countries, so your data may be
            processed outside Singapore. Where it is, we take steps required by the PDPA to ensure a comparable
            standard of protection, and where GDPR applies we rely on appropriate safeguards such as standard
            contractual clauses.
          </p>

          <h2>7. How long we keep it</h2>
          <ul>
            <li><strong>Enquiries that do not become projects:</strong> up to 24 months</li>
            <li><strong>Client records:</strong> for the duration of the engagement and for 7 years afterwards, to meet Singapore accounting and tax requirements</li>
            <li><strong>Unsuccessful job applications:</strong> up to 12 months, so we can contact you about future roles — tell us if you would rather we deleted them sooner</li>
            <li><strong>Website analytics:</strong> up to 26 months</li>
          </ul>

          <h2>8. Security</h2>
          <p>
            We apply technical and organisational measures appropriate to the risk, including encryption in transit,
            access control on a need-to-know basis, and regular review of the systems we use. No method of transmission
            over the internet is completely secure, so we cannot guarantee absolute security — but we do commit to
            notifying you and the relevant authority where a breach requires it.
          </p>

          <h2>9. Your rights</h2>
          <p>Depending on where you are, you have the right to:</p>
          <ul>
            <li>Ask what personal data we hold about you and receive a copy</li>
            <li>Have inaccurate data corrected</li>
            <li>Ask us to delete data we no longer have a reason to keep</li>
            <li>Withdraw consent where our use relies on it</li>
            <li>Object to, or ask us to restrict, processing based on legitimate interest</li>
            <li>Ask for your data in a portable format</li>
          </ul>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> to exercise any of these. We respond within 30 days.
            If you are not satisfied with our response, you may complain to the Personal Data Protection Commission of
            Singapore, or to your local supervisory authority if you are in the EEA or UK.
          </p>

          <h2>10. Cookies</h2>
          <p>
            Cookies and similar technologies are covered separately in our <a href="/cookies/">cookie policy</a>.
          </p>

          <h2>11. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be signalled by the “last updated” date
            above, and where the change is significant we will make it prominent on the site.
          </p>

          <h2>12. Contact</h2>
          <p>
            Write to us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.legalEntity},{' '}
            {site.address.line1} {site.address.line2}, {site.address.city} {site.address.postal},{' '}
            {site.address.country}.
          </p>
        </LegalBody>
      </Section>
    </>
  );
}
