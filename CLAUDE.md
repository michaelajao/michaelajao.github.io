# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server (Turbopack) at http://localhost:3000
- `npm run build` — produce a static export into `dist/` (see architecture note below)
- `npm run lint` — run `next lint` (ESLint flat config extending `next/core-web-vitals` + `next/typescript`)
- `npm start` — serve the built app (rarely used; deployment uses the static export)

There is no test runner configured in this project.

## Architecture

This is a **single-page Next.js 15 App Router site that is statically exported** and deployed to GitHub Pages. Key consequences of the static-export configuration (`next.config.ts`):

- `output: 'export'` and `distDir: 'dist'` — `npm run build` writes static HTML/CSS/JS into `dist/`, which the GitHub Actions workflow (`.github/workflows/deploy.yml`) uploads as the Pages artifact. **Any Next.js feature that requires a server at runtime (API routes, `getServerSideProps`, middleware, Image Optimization) is unavailable.** `images.unoptimized: true` is set for this reason — use `next/image` with `unoptimized` behavior in mind.
- `trailingSlash: true` — all routes are emitted as `/path/index.html`. Keep internal links consistent with trailing slashes.
- `basePath`/`assetPrefix` are currently empty strings in both dev and prod because the site is served at the apex of `michaelajao.github.io` (user/organization Pages site), not a project subpath.

### Page composition

The entire landing page is `src/app/page.tsx`, which stacks section components in a fixed order:
`Hero → FeaturedProjects → Publications → Experience → Education → Skills → Contact`.
`src/app/layout.tsx` wraps everything with `Header` + `Footer` and loads Inter + Playfair Display via `next/font/google` (exposed as CSS variables `--font-inter` / `--font-heading`). All section components live directly under `src/components/` — they are content-heavy client components (most use `framer-motion` and need `'use client'`) with no shared state beyond props.

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. `tailwind.config.ts` extends the default theme with:
- Custom font families `sans` (Inter) and `heading` (Playfair) bound to the CSS variables set in `layout.tsx`.
- A full `fluid-*` font-size scale using `clamp()` — prefer these over raw `text-*` sizes when adding responsive typography.
- Custom breakpoints `xs` (475px) and `3xl` (1600px), and a `touch` spacing token (44px) for hit targets.
- Bespoke keyframes (`fadeIn`, `slideIn`, `bounceGentle`) plus utilities defined in `src/app/globals.css` (`gradient-text`, `research-card`, `publication-card`, `animate-fadeInUp`).

The `@` path alias maps to `src/` (see `tsconfig.json`). Import from `@/components/...` and `@/utils/...`.

### Contact form (EmailJS)

`src/components/Contact.tsx` sends mail **entirely from the client** using `@emailjs/browser`. Because the site is a static export, there is no server to proxy through. Configuration is read from three `NEXT_PUBLIC_EMAILJS_*` env vars in `src/utils/security.ts` (`getEmailJSConfig`); these are baked into the bundle at build time. Copy `.env.local.example` → `.env.local` for local dev; production values come from GitHub Actions secrets injected in `deploy.yml`.

`src/utils/security.ts` centralizes the client-side hardening for the form and must be used before any `emailjs.send` call:
- `validateDomain()` — allowlist of `michaelajao.github.io`, `localhost:3000`, `127.0.0.1:3000`. Submissions from other hosts are rejected.
- `checkRateLimit()` / `recordSubmission()` — 3 submissions per 10 minutes, tracked in `localStorage`.
- `sanitizeInput()` strips `<script>` tags and `<>` characters and caps length at 5000.
- `isValidEmail()` is a lightweight regex check (not RFC-complete).

Treat these as best-effort client-side defenses; real abuse protection lives in the EmailJS dashboard (template limits, reCAPTCHA).

### Deployment

`.github/workflows/deploy.yml` runs on push/PR to `main` or `master`: `npm ci` → `npm run build` (with EmailJS secrets) → upload `./dist` → `actions/deploy-pages`. The repository's default branch is **`master`**, not `main` — open PRs against `master`.
