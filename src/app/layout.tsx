import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/content/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Development Agency in Singapore`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'software development agency Singapore',
    'custom software development',
    'web development company',
    'mobile app development',
    'cloud and DevOps services',
    'AI development agency',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | Software Development Agency in Singapore`,
    description: site.description,
    locale: 'en_SG',
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/images/og.jpg'],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  description: site.description,
  foundingDate: String(site.founded),
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.line1} ${site.address.line2}`,
    addressLocality: site.address.city,
    postalCode: site.address.postal,
    addressCountry: 'SG',
  },
  sameAs: [site.social.linkedin, site.social.github, site.social.x],
  areaServed: 'Worldwide',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 48 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
