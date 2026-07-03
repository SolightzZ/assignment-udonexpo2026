# AGENTS.md — Udon Thani International Horticultural Expo 2026

React 19 + Vite 8 multilingual tourism website with MUI v9, i18next, and Framer Motion.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Oxlint
```

## Code Style

- **Language:** JavaScript (JSX) — no TypeScript
- **Exports:** `export default function` for components; named exports for utils/constants
- **Imports:** MUI named imports (`import Box from '@mui/material/Box'`), never `@mui/material` barrel
- **Styling:** MUI `sx` prop or Emotion `styled`; no CSS modules or Tailwind
- **Animations:** Framer Motion (`framer-motion`) for entry/scroll animations
- **i18n:** `react-i18next` `useTranslation()` hook; all text in `locales/{th,en,zh}/translation.json`
- **Lazy loading:** `React.lazy(() => import('./...'))` + `<Suspense>` for route-level code splitting
- **Theme:** Custom MUI theme in `src/theme/theme.js` — dark green `#1B5E20` + gold `#C8A64E` palette

## Structure

```
src/
├── components/   # Section components (Navbar, Hero, About, Highlights, Gallery, ...)
├── pages/        # Route pages (Home.jsx)
├── locales/      # Translation JSON files
├── theme/        # MUI theme config
├── assets/       # Images and icons
├── App.jsx       # Root component
├── main.jsx      # Entry point
└── i18n.js       # i18next config
```

## Testing

No test framework configured. When adding one, use Vitest + React Testing Library.

## Boundaries

- Never commit credentials or API keys
- Use `sx` prop for one-off styling, `styled` for reusable components
- Prefer async data fetching with Suspense where possible
- All user-facing strings must come from i18n locale files, never hardcoded
- Use MUI v9 APIs, not v4/v5 legacy patterns
- Images in `src/assets/images/`, icons in `src/assets/icons/`
