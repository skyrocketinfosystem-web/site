# Skyrocket InfoSystem — website

Static marketing site for Skyrocket InfoSystem. Next.js 15 App Router with
`output: 'export'`, Tailwind v4, light theme, no backend. Builds to plain HTML
in `out/`, which is what GitHub Pages serves.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> out/
npm start        # serve the built out/ locally
```

## Editing content

There is no CMS. All copy lives in `src/content/` as typed TypeScript:

| File | Holds |
|---|---|
| `site.ts` | Company name, email, phone, address, social links, nav |
| `services.ts` | The six services and their detail pages |
| `case-studies.ts` | Case studies (also drives the industry filter) |
| `jobs.ts` | Open roles. Empty the array to show the "no openings" state |
| `company.ts` | Stats, values, timeline, process, testimonials, FAQs, tech stack |

Adding an entry to any array creates the corresponding page on the next build —
`generateStaticParams` reads from the same files.

## Images

Photographs live in `public/images/` and are referenced from the content files
(`services.ts` and `case-studies.ts` each carry `image` and `imageAlt`). They are
Unsplash stock under a licence that permits commercial use; see
`public/images/ATTRIBUTION.md` for the source of each file.

**They are photographs of people who do not work here.** Replace them with your
own team, office and client photography before launch, and do not add captions
implying the people shown are Skyrocket staff. Keep the `imageAlt` text accurate
when you swap a file.

`og.jpg` is the social preview card, generated from the brand palette. Regenerate
or redraw it if the wording in the hero changes.

Technology marks in `src/components/TechLogos.tsx` come from Simple Icons (CC0).

## Design

Light theme. All colour, spacing and font tokens sit in the `@theme` block of
`src/app/globals.css` — change them there rather than in components. The palette
is a white page with `--color-surface` bands, one blue accent, and a single dark
navy band reused by the footer and the CTA panel (`.on-dark`).

## Before launch — search for `TODO`

```bash
grep -rn "TODO" src/
```

Placeholders that need real values:

- `src/content/site.ts` — email, phone, street address, UEN, domain, social URLs, legal entity name
- `src/content/case-studies.ts` — replace with client-approved case studies
- `src/content/jobs.ts` — replace with your actual openings, including the salary bands
- `src/content/company.ts` — headline stats, testimonials and the rate quoted in the FAQ
- `public/images/` — swap the stock photography for your own
- Legal pages — the amber template notice on `/terms`, `/privacy` and `/cookies`
  must be removed once a lawyer has reviewed them. Delete `LegalNotice` from
  `src/components/Legal.tsx` and its three usages.

## Contact form

Posts to [Web3Forms](https://web3forms.com) — free, no account needed, no backend.

1. Get an access key at web3forms.com
2. Local: copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_KEY`
3. CI: add it as a repository secret named `WEB3FORMS_KEY`

Without a key the form renders with a visible setup notice and falls back to the
email address. Job applications use `mailto:` and need no configuration.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Push the repo to GitHub
2. **Settings → Pages → Source: GitHub Actions**
3. Push to `main`

`basePath` is resolved automatically by `actions/configure-pages`, so it works
both at `user.github.io/repo` and on a custom domain. For a custom domain, add a
`public/CNAME` file containing the domain.

`public/.nojekyll` is required — without it GitHub Pages drops the `_next/`
directory and the site loads unstyled.

## Notes

- `trailingSlash: true` and `images.unoptimized` are both required by Pages
- Only two client components: the mobile nav drawer and the case-study filter
- Verified at 375px, 768px and 1440px: no horizontal overflow, every image loads,
  every image has alt text, one `h1` per page
