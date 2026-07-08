# AGENTS.md — Udon Thani International Horticultural Expo 2026

React 19 + Vite 8 multilingual tourism website with MUI v9, i18next, and Framer Motion.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Oxlint
```

No single-test runner — no test framework is configured yet. When adding one, use Vitest + React Testing Library.

## Code Style

- **Language:** JavaScript (JSX) — no TypeScript
- **Exports:** `export default function` for components; named exports for utils/constants
- **Imports:** MUI named imports (`import Box from '@mui/material/Box'`), never `@mui/material` barrel
- **Styling:** MUI `sx` prop or Emotion `styled`; no CSS modules or Tailwind
- **No `className` on MUI components:** Use structural `sx` selectors (`& > img`, `& > div:first-of-type`, `& > div:first-of-type svg`) instead of class-name hooks for parent-child hover effects
- **Animations:** Framer Motion (`framer-motion`) for entry/scroll animations
- **Tab-hidden animations:** Use `visibilitychange` `document.hidden` in all components with continuous animations — pause CSS `animationPlayState` or unmount motion elements when tab is hidden (saves battery/CPU)
- **i18n:** `react-i18next` `useTranslation()` hook; all text in `locales/{th,en,zh}/translation.json`; only detected language loads on first visit (others load in background via `Promise.allSettled`)
- **Lazy loading:** `React.lazy(() => import('./...'))` + `<Suspense>` for route-level AND component-level code splitting (GalleryLightbox, MobileDrawer) — defer non-visible JS until user interaction
- **Theme:** Custom MUI theme in `src/theme/theme.js` — moss green `#618764` + gold `#C8A64E` palette
- **Navbar layout:** CSS Grid (`gridTemplateColumns: 'auto 1fr auto'`) for stable navbar — menu stays centered regardless of logo width; never use `justifyContent: 'space-between'` on Toolbar

## Structure

```
src/
├── App.jsx           # Root component — lazy routes, error boundary, route transitions
├── main.jsx          # Entry point — BrowserRouter basename, ThemeProvider, font imports
├── i18n.js           # i18next config — lazy per-language load, fallback: th, detection: localStorage → navigator
├── index.css         # Global styles & CSS baseline
├── assets/images/    # Static images (hero, gallery, highlights)
├── components/       # Section components (Navbar, Hero, About, PageLoader, Tech, MobileDrawer, GalleryLightbox...)
├── hooks/            # Custom React hooks (useScramble, useScrollListener, useScrollTo)
├── locales/          # Translation JSON files (th, en, zh)
├── pages/            # Route pages (Home.jsx, Tech.jsx, NotFound.jsx) — lazy-loaded
└── theme/            # MUI theme config (theme.js)
```

## Deployment

- **GitHub Pages** with SPA fallback: `vite.config.js` writes a `404.html` redirect script
- **BrowserRouter basename:** `/assignment-udonexpo2026` (set in `main.jsx`)
- **Base path:** `base: '/assignment-udonexpo2026/'` in `vite.config.js`

## Loading Screen

- `App.jsx` shows a `PageLoader` for 3.5 seconds on initial load
- Language changes update all text immediately without page refresh (the coordinates-based wipe transition has been removed)

## Responsive & UX Rules

- LanguageSwitcher must NOT be hidden on mobile — render inside the mobile Drawer in Navbar instead
- Use MUI v9 Grid `size={{ xs, md }}` syntax, not legacy `xs={12}` props
- Grid `direction="column"` is removed in v9 — use Stack for vertical layouts
- Use Framer Motion `useReducedMotion()` not `window.matchMedia` for SSR-safe reduced-motion detection
- All user-facing strings must come from i18n locale files, never hardcoded
- Use MUI v9 APIs, not v4/v5 legacy patterns
- Images in `src/assets/images/`, icons imported from `@mui/icons-material`
- Hero/critical images use `<img fetchpriority="high">` (not CSS `background-image`) for native browser priority hinting
- `textTransform: 'none'` on all buttons (never uppercase)
- Minimum `borderRadius: 12` on all interactive elements

## Key Gotchas

- i18n default/fallback language is Thai (`th`) — not English
- i18n detection caches to `localStorage` with key `i18nextLng`
- Theme wraps body with a noise texture overlay (`::after` pseudo-element) — z-index 1299
- `prefers-reduced-motion: reduce` kills all animations/transitions via theme CSS baseline
- Font imports in `main.jsx` are explicit per-weight (Poppins, Noto Sans Thai, Noto Sans SC)
- Unused theme `custom` palette tokens are removed periodically — audit via `grep` before adding new ones

## Reference Files

- `DESIGN.md` — Full design system: colour palette, typography scale, spacing, animation patterns
- `MUI.md` — MUI v9 component usage, import rules, Grid v2 syntax, theme tokens
