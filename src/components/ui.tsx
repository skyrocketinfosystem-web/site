import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-18 md:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold ${dark ? 'text-blue-300' : 'text-brand'}`}>{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-[1.15] sm:text-4xl">{title}</h2>
      {intro ? (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-muted'}`}>{intro}</p>
      ) : null}
    </div>
  );
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-200 disabled:opacity-60';

const variants = {
  primary: 'bg-brand text-white card-shadow hover:bg-brand-deep',
  secondary: 'border border-line bg-white text-head hover:border-brand/40 hover:bg-surface',
  light: 'bg-white text-head hover:bg-slate-100',
  outlineLight: 'border border-white/25 text-white hover:bg-white/10',
} as const;

const sizes = { md: 'px-5 py-2.5 text-sm', lg: 'px-6 py-3.5 text-base' } as const;

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const external = /^(https?:|mailto:|tel:)/.test(href);
  return external ? (
    <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-line bg-white p-6 card-shadow ${className}`}>{children}</div>
  );
}

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={`h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Check({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={`mt-0.5 h-4 w-4 shrink-0 text-brand ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

/** Page header with an optional photograph alongside the text. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <header className="wash border-b border-line-soft pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="container-x">
        <div className={image ? 'grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]' : ''}>
          <div className="max-w-2xl animate-rise">
            <p className="mb-3 text-sm font-semibold text-brand">{eyebrow}</p>
            <h1 className="text-[2.1rem] font-bold leading-[1.1] sm:text-5xl">{title}</h1>
            {intro ? <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p> : null}
            {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
          </div>
          {image ? (
            <div className="relative aspect-4/3 overflow-hidden rounded-xl card-shadow-lg">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" priority />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function Stat({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <div>
      <div className={`font-display text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : 'text-head'}`}>{value}</div>
      <div className={`mt-1.5 text-sm ${dark ? 'text-slate-400' : 'text-muted'}`}>{label}</div>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-medium text-body">
      {children}
    </span>
  );
}

export function CTA({
  title = 'Tell us what you need built',
  body = 'Send over the brief, or just a rough description. We read every enquiry ourselves and reply within one working day, usually with questions before a price.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="on-dark bg-deep py-18 md:py-24">
      <div className="container-x text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact/" variant="light" size="lg">
            Get in touch <Arrow />
          </Button>
          <Button href="/case-studies/" variant="outlineLight" size="lg">
            Read our case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
