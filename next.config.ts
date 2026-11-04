import { loadEnvConfig } from '@next/env';
import type { NextConfig } from 'next';

loadEnvConfig(process.cwd());

// A production build without the form ID would publish a contact form that cannot send.
if (process.argv.includes('build') && !process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID) {
  throw new Error('NEXT_PUBLIC_FORMSPREE_FORM_ID is not set. Add it to .env.local or the GitHub Actions secrets.');
}

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
