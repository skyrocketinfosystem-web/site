import Link from 'next/link';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { Logo } from './Logo';

const columns = [
  {
    title: 'Company',
    links: [
      { href: '/about/', label: 'About us' },
      { href: '/clients/', label: 'Clients' },
      { href: '/case-studies/', label: 'Case studies' },
      { href: '/careers/', label: 'Careers' },
      { href: '/contact/', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/terms/', label: 'Terms & conditions' },
      { href: '/privacy/', label: 'Privacy policy' },
      { href: '/cookies/', label: 'Cookie policy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-deep-2">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Software development agency registered in Singapore, working remotely across Asia-Pacific since{' '}
              {site.founded}.
            </p>
            <address className="mt-6 space-y-1.5 text-sm not-italic text-slate-400">
              <a href={`mailto:${site.email}`} className="block transition hover:text-white">
                {site.email}
              </a>
              <span className="block pt-2">
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.city} {site.address.postal}
              </span>
            </address>
            <div className="mt-6 flex gap-2.5">
              <Social href={site.social.linkedin} label="LinkedIn">
                <path d="M4.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3 8.5h3v9H3v-9Zm6 0h2.9v1.3a3.2 3.2 0 0 1 2.8-1.5c2.2 0 3.3 1.4 3.3 3.9v5.3h-3v-4.7c0-1.3-.5-2-1.6-2-1 0-1.6.7-1.6 2v4.7H9v-9Z" />
              </Social>
              <Social href={site.social.github} label="GitHub">
                <path d="M10 2a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.6.3-.9.5-1.2-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.6.8.6 1.6v2.3c0 .2.1.5.5.4A8 8 0 0 0 10 2Z" />
              </Social>
              <Social href={site.social.x} label="X">
                <path d="M14.7 2.5h2.4l-5.3 6 6.2 8.9h-4.9l-3.8-5.5-4.4 5.5H2.5l5.6-6.5L2.2 2.5h5l3.5 5 4-5Zm-.9 13.1h1.4L6.3 3.9H4.8l9 11.7Z" />
              </Social>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-sm text-slate-400 transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-400 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalEntity}. All rights reserved.
          </p>
          <p>Singapore</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="rounded-md border border-white/15 p-2 text-slate-400 transition hover:border-white/40 hover:text-white"
    >
      <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
