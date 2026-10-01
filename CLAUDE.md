# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server (Turbopack) at http://localhost:3000
- `npm run build` — produce a static export into `dist/` (see architecture note below)
- `npm run lint` — run `next lint` (ESLint flat config extending `next/core-web-vitals` + `next/typescript`)
- `npm start` — serve the built app (rarely used; deployment uses the static export)

There is no test runner configured in this project.

## Architecture

This is a **multi-page Next.js 15 App Router site, statically exported** and deployed to GitHub Pages at the custom domain `https://miolajtech.co.uk` (`public/CNAME`). `next.config.ts` sets `output: 'export'`, `distDir: 'dist'`, `trailingSlash: true` and `images.unoptimized`, so no server features (API routes, middleware, image optimisation) are available. Keep internal links with trailing slashes.

### Pages
`src/app/`: `/` (home), `/research/`, `/research/papers/`, `/research/talks/`, `/services/`, `/services/tutoring/`, `/about/`, `/contact/`, `/privacy/`, `/terms/`, plus `not-found.tsx`. Each page exports metadata via `pageMeta()` in `src/lib/meta.ts` (canonical, Open Graph, Twitter). `layout.tsx` holds site metadata, the Person and ProfessionalService JSON-LD, fonts (Instrument Sans, Newsreader, Geist Mono via `next/font/google`, exposed as `--f-sans/--f-serif/--f-mono`), the SVG sprite, `Header` and `Footer`. `src/app/icon.svg` is the favicon; `public/og.png` is the social image; `public/sitemap.xml` and `robots.txt` are hand-maintained (update when adding pages).

### Content and components
Copy lives in `src/content/` (`research.tsx`, `services.ts`, `profile.tsx`, `site.ts`); pages and `src/components/Parts.tsx` render it. Client components are limited to interactive pieces: `Header` (menu, dropdown, theme), `Hero` (brand field and marquee), `ResearchMap`, `Portrait`, `ContactForm`. Logo SVG markup is in `src/components/brand-data.ts`.

### Styling
Plain CSS with design tokens, no Tailwind: `src/app/globals.css` (tokens, light and dark themes, components from the approved design) and `src/app/pages.css` (inner-page additions). Theme is set via `data-theme` on `<html>` (saved in localStorage, applied by an inline script before paint). Motion respects `prefers-reduced-motion`.

### Contact form (Formspree)
`src/components/ContactForm.tsx` posts with `@formspree/react` using `NEXT_PUBLIC_FORMSPREE_FORM_ID` (baked in at build time; copy `.env.local.example` to `.env.local` locally, and set the GitHub Actions secret for production). `src/utils/security.ts` provides `sanitizeInput` and `isValidEmail`; spam protection is Formspree's (honeypot `_gotcha`, allowed domains in the Formspree dashboard). No email address or phone number is published.

### Content rules
No prices, no registration number or founding date, RAEng endorsement only on the home hero and About, forecasting only inside real paper titles.

### Deployment
`.github/workflows/deploy.yml`: pull requests lint and build only; pushes to `master` or `main` also upload `./dist` and deploy to Pages. The default branch is **`master`**.
