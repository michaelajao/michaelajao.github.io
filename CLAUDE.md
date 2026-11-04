# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: start the Next.js dev server (Turbopack) at http://localhost:3000
- `npm run build`: produce a static export into `dist/`. Fails if `NEXT_PUBLIC_FORMSPREE_FORM_ID` is unset; for a local check use `NEXT_PUBLIC_FORMSPREE_FORM_ID=localpreview npm run build`
- `npm run lint`: ESLint (`next/core-web-vitals` and `next/typescript`)
- `npx tsc --noEmit`: type-check

There is no test runner. `npm start` does not work with a static export; serve `dist/` to preview a build.

## Architecture

This is the **one-page academic site**, a Next.js 15 App Router static export deployed to GitHub Pages at `https://michaelajao.github.io`. `next.config.ts` sets `output: 'export'`, `distDir: 'dist'`, `trailingSlash: true` and `images.unoptimized`, so there are no server features. The company site (miolajtech.co.uk) is a separate project; this site links to it once, in the footer.

### Page and content

`src/app/page.tsx` is the only page, plus `not-found.tsx`. Sections: top, Global Talent band, About, Research, Publications, Talks and awards, Teaching, CV, Contact.

Copy lives in `src/content/`:

- `publications.ts`: every output, in one list. Adding a paper is one entry here.
- `research.ts`: research themes with their figures, and talks.
- `profile.tsx`: About, positions, education, memberships, teaching.
- `site.ts`: URLs, profile links, section menu, form intents.

### Each section has its own job

Show each paper, figure and fact once. Research explains the themes and links to Publications; it does not list papers. A figure is set either on a theme or on a publication, never both. A talk given on a listed paper goes in that paper's `note`, not in Talks. Link between sections rather than restating them.

### Components

Client components are limited to interactive pieces: `SectionNav` (scrollspy, theme toggle, reveal), `PublicationList` (filters, citation copy, and the `a[data-topic]` links from Research), `Portrait`, `ContactForm`.

### Styling

Plain CSS with design tokens, no Tailwind: `src/app/globals.css` (tokens, themes, shared components) and `src/app/academic.css` (this site). Theme is set via `data-theme` on `<html>`, saved in localStorage and applied by an inline script before paint. Motion respects `prefers-reduced-motion`.

### Contact form

`src/components/ContactForm.tsx` posts with `@formspree/react` using `NEXT_PUBLIC_FORMSPREE_FORM_ID`, baked in at build time (`.env.local` locally, GitHub Actions secret in production). `src/utils/security.ts` provides `cleanInput` and `isValidEmail`.

### Deployment

`.github/workflows/deploy.yml`: pull requests lint and build only; pushes to `master` also deploy to Pages. The default branch is **`master`**. `public/sitemap.xml` and `robots.txt` are hand-maintained.

## Content rules

- No email address or phone number on the site or in the public CV. `public/Michael_Ajao-olarinoye_cv.pdf` is the private copy; it is git-ignored and must never be committed. The public CV is `public/michael_cv.pdf`.
- Don't mention unreleased products. No company registration number, founding date or address.
- The Royal Academy of Engineering endorsement appears only in the Global Talent band.
- Unpublished work (`review`, `submitted`, `progress`) has no links and no figures. Work in `progress` is the title only. Don't name the journal for submitted work; show only its current status.
- Use "forecasting" only inside real titles.
- Figures must be the real ones from the paper. Check against the paper's PDF, not a repo's figure folder, and don't use generic generated images.
