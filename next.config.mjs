/**
 * Static export for GitHub Pages.
 * If hosting at https://<user>.github.io/<repo>, set NEXT_PUBLIC_BASE_PATH=/<repo>
 * (the deploy workflow does this automatically). Leave empty for a custom domain.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};
