'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { caseStudies, industries } from '@/content/case-studies';
import { Arrow, Tag } from './ui';

export function CaseStudyGrid() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? caseStudies : caseStudies.filter((c) => c.industry === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter case studies by industry">
        {['All', ...industries].map((industry) => (
          <button
            key={industry}
            type="button"
            onClick={() => setFilter(industry)}
            aria-pressed={filter === industry}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
              filter === industry
                ? 'border-brand bg-brand text-white'
                : 'border-line bg-white text-body hover:border-brand/40 hover:text-brand'
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        {shown.map((study) => (
          <article
            key={study.slug}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white card-shadow transition hover:border-brand/40 hover:card-shadow-lg"
          >
            <div className="relative aspect-16/9 overflow-hidden">
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                sizes="(min-width:768px) 45vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-7">
              <div className="flex flex-wrap gap-2">
                <Tag>{study.industry}</Tag>
                <Tag>{study.year}</Tag>
                <Tag>{study.duration}</Tag>
              </div>
              <h2 className="mt-4 text-lg font-bold leading-snug">
                <Link href={`/case-studies/${study.slug}/`} className="after:absolute after:inset-0">
                  {study.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{study.excerpt}</p>

              <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5">
                {study.results.map((r) => (
                  <div key={r.label}>
                    <dt className="sr-only">{r.label}</dt>
                    <dd>
                      <span className="block font-display text-lg font-bold text-head">{r.metric}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-muted">{r.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Read case study <Arrow className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
