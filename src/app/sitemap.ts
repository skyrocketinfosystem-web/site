import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { caseStudies } from '@/content/case-studies';
import { jobs } from '@/content/jobs';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', 'about', 'services', 'case-studies', 'clients', 'careers', 'contact', 'terms', 'privacy', 'cookies'];
  const dynamicPaths = [
    ...services.map((s) => `services/${s.slug}`),
    ...caseStudies.map((c) => `case-studies/${c.slug}`),
    ...jobs.map((j) => `careers/${j.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${site.url}/${path ? `${path}/` : ''}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/') ? 0.6 : 0.8,
  }));
}
