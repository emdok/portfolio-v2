# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build
npm run lint         # ESLint with auto-fix
npm run format       # Prettier format src/
npm run test:unit    # Run Vitest unit tests
npm start            # Start Express email server (server/server.mjs)
```

Run a single test file:
```bash
npx vitest run src/components/__tests__/HelloWorld.spec.js
```

## Architecture

**Vue 3 SPA** built with Vite. The `@` alias maps to `src/`. All components use `<script setup>` (Composition API).

### Routing (`src/router/index.js`)
Five routes: `/`, `/work`, `/tech`, `/contact`, `/work-detail/:id`. The router uses hash-based smooth scrolling with a 300ms delay for in-page anchors (`#work-section`, `#tech-section`). The `HeroComponent` is conditionally hidden on `/contact` and `/work-detail` routes.

### Data
Static JSON files in `src/assets/data/` (`work-data.json`, `tech-data.json`) are imported directly into views and passed as props to grid/card components. No external data fetching or store.

### Styling
SCSS with a global `main.scss` auto-imported into every component via Vite config. Partials:
- `_colors.scss` — CSS custom properties for the palette and breakpoint values
- `_mixins.scss` — `mq()` mixin for breakpoints (s: 390px, m: 640px, l: 1024px, xl: 1440px, max: 1920px)
- `_typography.scss` — font face declarations

Use `@include mq(l) { ... }` for responsive styles. Naming follows BEM-like conventions (`.block__element--modifier`).

### Email / Backend
The contact form POSTs to `/.netlify/functions/send-email` (Netlify serverless function in `netlify/functions/`). A standalone Express server at `server/server.mjs` exposes the same `/send-email` endpoint for local or non-Netlify hosting. CORS is restricted to `https://emilydokken.com`.

### CI
`.github/workflows/vue-ci.yml` runs lint and build on Node 20 for every push. Email credentials are injected as environment variables during CI.
