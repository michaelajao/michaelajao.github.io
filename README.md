# Michael Ajao-Olarinoye: academic site

The one-page academic site at [michaelajao.github.io](https://michaelajao.github.io/): research themes, publications, talks, teaching, CV and a contact form.

Built with Next.js 15 as a static export and deployed to GitHub Pages. The company site, miolajtech, is separate.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The contact form needs a Formspree form ID: copy `.env.local.example` to `.env.local` and fill it in. `npm run build` fails without it.

## Add a paper

1. Add one entry to `PUBLICATIONS` in `src/content/publications.ts`.
2. Commit to `master`. It deploys automatically.

When a paper's status changes, edit its `status`, and its `venue` or `links` if those change too.

Show each paper and figure once. Work that hasn't been submitted is listed by title only. Unpublished work has no links and no figures.

## Where things are

| What | Where |
|---|---|
| Publications | `src/content/publications.ts` |
| Research themes and talks | `src/content/research.ts` |
| About, positions, education, teaching | `src/content/profile.tsx` |
| The page | `src/app/page.tsx` |
| Figures | `public/images/research/` |
| CV | `public/michael_cv.pdf` |
