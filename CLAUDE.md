# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Production build with static export
npm run export

# Start production server
npm start

# Linting
npm run lint
```

## Project Architecture

This is a **Next.js 15 portfolio website** with static export configuration for deployment to GitHub Pages. Key architectural points:

### Static Export Configuration
- Configured in `next.config.ts` with `output: 'export'`
- Images are unoptimized (`unoptimized: true`)
- Uses `dist` directory for build output
- Trailing slashes enabled for GitHub Pages compatibility

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with custom animations
- **Fonts**: Inter (sans) and Playfair Display (heading) from Google Fonts
- **Animations**: Framer Motion for complex animations
- **Icons**: Lucide React
- **Theme**: Dark mode by default, next-themes for theme switching

### Component Structure
Single-page application with sections as components:
- `Hero` - Landing section with profile
- `ResearchFocus` - Research areas overview
- `FeaturedProjects` - Project showcase
- `Publications` - Academic publications
- `Experience` - Work experience
- `Education` - Educational background
- `Skills` - Technical skills
- `Contact` - Contact information
- `Header` - Navigation (sticky)
- `Footer` - Site footer

### Layout & Styling
- Global layout in `src/app/layout.tsx` with Header/Footer wrapper
- Font variables: `--font-inter` and `--font-playfair`
- Dark theme by default (`className="dark"` on html)
- Custom Tailwind animations: `fade-in` and `slide-in`
- Typography plugin for rich text content

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

### Key Files
- `src/app/page.tsx` - Main page with all sections
- `src/app/layout.tsx` - Root layout with fonts and metadata
- `src/app/globals.css` - Global styles and Tailwind imports
- `tailwind.config.ts` - Tailwind configuration with custom theme
- `next.config.ts` - Next.js config for static export

## Development Notes

- This is a **static site** - no server-side features available
- All images should be placed in `public/` directory
- Component imports use `@/components/` alias
- SEO metadata is configured in layout.tsx
- The site uses CSS Grid and Flexbox for layouts
- Animations are implemented with both CSS classes and Framer Motion