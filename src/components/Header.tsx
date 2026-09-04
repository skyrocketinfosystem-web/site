'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav } from '@/content/site';
import { Logo } from './Logo';
import { Arrow } from './ui';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // A tapped link should not leave the drawer open behind the new page.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled || open ? 'border-b border-line bg-white/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-17 items-center justify-between">
        <Link href="/" aria-label="Skyrocket InfoSystem, home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
                isActive(item.href) ? 'text-brand' : 'text-body hover:text-head'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact/"
          className="hidden items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white card-shadow transition hover:bg-brand-deep lg:inline-flex"
        >
          Contact us <Arrow />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg border border-line bg-white p-2.5 text-head lg:hidden"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-3 font-medium ${
                  isActive(item.href) ? 'bg-brand-tint text-brand' : 'text-body'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white"
            >
              Contact us <Arrow />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
