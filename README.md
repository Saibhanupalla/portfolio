# Sai Bhanupalla — Portfolio

A personal portfolio for **Sai Bhanupalla**, Creative AI Developer. The site itself is the work sample: an anime-manga + punk-zine aesthetic (black / yellow / red, halftone, kanji, torn collage) built for craft, motion, and speed.

Live site: _add your deployed URL here once it's up_

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) build tooling
- [Motion](https://motion.dev/) for animation (drag/snap carousel, page transitions, reduced-motion fallbacks)
- `@fontsource` self-hosted fonts (Anton, Archivo, JetBrains Mono, Permanent Marker, Noto Sans JP, Yuji Syuku)

## Sections

- **Loader** — hand-drawn line-art doodles linked by a progress thread
- **Hero** — treated poster wordmark + brush subtitle
- **Work** — swipeable case-study carousel (keyboard, drag, autoplay-pause)
- **About** — full-width statement + toolkit
- **Contact** — oversized close with real links
- **Page transitions** — torn-paper overlay before external links open in a new tab

Accessibility: WCAG 2.2 AA targets, full keyboard operability, visible focus, and `prefers-reduced-motion` honored throughout.

## Local development

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Deployment

The production build is a static SPA in `dist/`. It can be hosted on any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages). See the repository's CI workflow for the configured deployment.
