import type { Metadata } from 'next';
import { LastUpdated, LegalBody, LegalNotice } from '@/components/Legal';
import { PageHero, Section } from '@/components/ui';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: `How ${site.name} uses cookies and similar technologies on this website, and how to control them.`,
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie policy"
        intro="What cookies this site sets, what they are for, and how to turn them off."
      />
      <Section>
        <LegalNotice />
        <LastUpdated />
        <LegalBody>
          <h2>1. What cookies are</h2>
          <p>
            Cookies are small text files a website stores on your device. They let a site remember things between page
            loads and visits. Similar technologies — local storage, pixels and SDKs — do comparable jobs, and this
            policy covers those too.
          </p>

          <h2>2. What this site uses</h2>
          <p>
            This website is a static site and sets very little. As published, it uses only what is needed to serve
            pages and to load fonts.
          </p>

          <h3>Strictly necessary</h3>
          <p>
            Required for the site to work — serving pages, balancing load and protecting against abuse. These cannot be
            switched off through a consent banner, because without them the site does not function. They do not store
            anything that identifies you personally.
          </p>

          <h3>Analytics — not currently enabled</h3>
          <p>
            We do not run an analytics tool on this site at the time of writing. If we add one, we will update this page
            first and, where consent is required, ask for it before any analytics cookie is set.
          </p>

          <h3>Third-party services</h3>
          <ul>
            <li>
              <strong>Google Fonts:</strong> typefaces are served from Google’s font CDN, which receives your IP address
              as part of the request. Google’s handling is covered by its own privacy policy.
            </li>
            <li>
              <strong>Form delivery:</strong> submitting the contact form sends its contents to our form-processing
              provider, which forwards it to us by email. That request is made only when you press send.
            </li>
          </ul>
          <p>
            We do not use advertising, retargeting or social media tracking cookies on this site.
          </p>

          <h2>3. Controlling cookies</h2>
          <p>
            Every major browser lets you see what cookies are stored, delete them, and block them — either entirely or
            per site. The controls sit under privacy or security settings in Chrome, Safari, Firefox and Edge. Blocking
            all cookies may break parts of this or any other site.
          </p>
          <p>
            Most browsers also offer a “do not track” signal and a global privacy control. Where a legally recognised
            opt-out signal applies to us, we honour it.
          </p>

          <h2>4. Changes to this policy</h2>
          <p>
            If we start using cookies for anything beyond what is described above — analytics in particular — we will
            update this page and, where required, present a consent banner before those cookies are set.
          </p>

          <h2>5. Contact</h2>
          <p>
            Questions about cookies on this site can go to <a href={`mailto:${site.email}`}>{site.email}</a>. See also
            our <a href="/privacy/">privacy policy</a> and <a href="/terms/">terms and conditions</a>.
          </p>
        </LegalBody>
      </Section>
    </>
  );
}
