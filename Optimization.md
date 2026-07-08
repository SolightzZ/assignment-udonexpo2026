# Optimization Opportunities — Udon Expo 2026

## Priority Matrix

| Rank | Area | Impact | Effort | Status | Summary |
|------|------|--------|--------|--------|---------|
| 1 | **Bundle Size** | 🔴 High | 🟡 Medium | ⬜ Open | Add `manualChunks` in vite.config.js, reduce font weights |
| 2 | **Images** | 🔴 High | 🟡 Medium | 🔄 Partial | Hero converted to `<img fetchpriority="high">`; missing `srcset`/`width`/`height` |
| 3 | **Render Blocking** | 🔴 High | 🟢 Low | ⬜ Open | Enable `font-display: swap`, add preconnect hints |
| 4 | **React Re-renders** | 🔴 High | 🟢 Low | ✅ Done | Stopped drilling `t` prop; each component calls `useTranslation()` directly |
| 5 | **CSS Bloat** | 🔴 High | 🟡 Medium | 🔄 Partial | Removed 13 unused theme tokens; still has `responsiveFontSizes` bloat |
| 6 | **Animations** | 🟡 Medium | 🟡 Medium | ✅ Done | Continuous animations pause on `document.hidden` (HeritageBackdrop, NotFound) |
| 7 | **i18n Loading** | 🟡 Medium | 🟢 Low | ✅ Done | Lazy-load locale files per language; only detected language on first hit |
| 8 | **Code Splitting** | 🟡 Medium | 🟢 Low | ✅ Done | Lazy-loaded GalleryLightbox (3.34 kB) and MobileDrawer (2.05 kB) |
| 9 | **Lighthouse** | 🟡 Medium | 🟢 Low | 🔄 Partial | Hero `fetchpriority="high"`, `<main>` landmark done; missing theme-color, preconnect |
| 10 | **MUI Imports** | 🟢 Low | 🟢 Low | ⬜ Open | Barrel imports from `@mui/material/styles` still used in 5 files |

---

## 1. Bundle Size

**Current:** `vendor-mui` (229 kB), `vendor-react` (220 kB), `vendor-framer` (137 kB), `vendor-i18n` (55 kB) — already split into separate vendor chunks by Vite/Rolldown.

### Actions

- **Reduce font weights:** Noto Sans SC 500 is imported but not used; Poppins 300 is imported but only 400/500/600/700 appear in the design
- **Consider subsetting Noto Sans SC** (full CJK ~20K glyphs) — if only a handful of Chinese characters are used (from translation JSON), a subset would be ~90% smaller
- **Switch from @fontsource npm** to Google Fonts `@import` with `&display=swap` — enables `font-display: swap` and removes base64 font bloat from JS bundle

---

## 2. Image Optimization

**Current:** 18 WebP images at 3.9 MB total. No responsive variants.

### Completed
- ✅ Hero converted from CSS `background-image` to `<img fetchpriority="high">` for native browser LCP hinting

### Remaining

| Issue | Impact |
|-------|--------|
| No `srcset` / `sizes` — mobile loads the same 380 KB as desktop | High |
| No `width` / `height` attributes on most `<img>` elements → CLS | High |
| Gallery thumbnails and lightbox use the same full-resolution image | Medium |
| Limit font variation axis range in web font request | Low |

---

## 3. Render-Blocking Resources

**Current:** 12 font-weight CSS files loaded synchronously via ES module imports; no preconnect hints.

### Actions

| Action | File | Effort |
|--------|------|--------|
| Add `<link rel="preconnect" href="https://fonts.googleapis.com">` | `index.html` | 1 line |
| Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` | `index.html` | 1 line |
| Switch to Google Fonts `@import` with `&display=swap` | `main.jsx:12-23` | Replace imports |
| Or at minimum: add `font-display: swap` to @fontsource CSS | `main.jsx` | Check package option |
| Inline critical CSS (body, skip-link) in `<head>` | `index.html` | ~10 lines |

---

## 4. React Re-renders

### ✅ Completed

Stopped drilling `t` prop from `Home.jsx` to every section component. Each component now calls `useTranslation()` directly, so changing language only re-renders the components that actually use the new translation.

### Remaining

| Component | Location | Fix |
|-----------|----------|-----|
| `HighlightCard` | `Highlights.jsx:38` | Wrap in `React.memo` |
| `ImageCard` | `Gallery.jsx:35` | Wrap in `React.memo` |
| `TimelineItem` | `Timeline.jsx:31` | Wrap in `React.memo` |
| `InfoCard` | `VisitorInfo.jsx:24` | Wrap in `React.memo` |
| `OrnateDivider` | `SectionTitle.jsx:6` | Wrap in `React.memo` |

---

## 5. CSS Bloat

**Current:** 255 kB CSS bundle.

### Completed
- ✅ Removed 13 unused `custom` palette tokens (theme chunk: 9.28 kB → 8.81 kB)

### Remaining Causes

| Cause | Location | Impact |
|-------|----------|--------|
| `responsiveFontSizes(theme)` | `theme.js` | Generates 4 breakpoints × every typography variant |
| 90+ custom theme tokens | `theme.js` | Many used once in a single component |
| MUI styleOverrides | `theme.js` | ~120 lines of global component CSS |

### Actions

- **Drop `responsiveFontSizes()`** — define responsive sizes manually via `sx` where needed (only about 20 places)
- **Inline single-use custom tokens** directly in component `sx` props instead of polluting the theme
- **Reduce MUI component overrides** — consolidate styles that can live in per-component `sx`

---

## 6. Animation Performance

### ✅ Completed

- Continuous animations pause when tab is hidden:
  - **HeritageBackdrop:** CSS `animation-play-state: paused` via `document.hidden`
  - **NotFound:** `DecorativeMotifs` and `FloatingParticles` unmount when tab hidden

### Remaining

| Pattern | Locations | Impact |
|---------|-----------|--------|
| `backdropFilter: blur()` on hover/animating elements | Gallery Modal, Navbar Drawer, Cards | Triggers paint on every frame |
| Direct DOM parallax (`bgRef.current.style.transform`) | `Hero.jsx` | Bypasses React, forces layout |

### Actions

- **Replace `backdropFilter` blur** with solid background fallback on elements that animate (hover states)
- **Use Framer Motion's `useMotionValue` + `useTransform`** instead of direct DOM ref manipulation for parallax
- Add `will-change: transform` to MuiCard hover states

---

## 7. i18n Loading

### ✅ Completed

```js
// Before: eager load all 3 locale files
import translationEN from './locales/en/translation.json';

// After: dynamic import per language
const LANG_LOADERS = {
   th: () => import('./locales/th/translation.json'),
   en: () => import('./locales/en/translation.json'),
   zh: () => import('./locales/zh/translation.json'),
};
```

Only the detected language loads on first visit; other 2 load in background via `Promise.allSettled`.

---

## 8. Code Splitting

### ✅ Completed

| Component | Chunk Size | Trigger |
|-----------|-----------|---------|
| `GalleryLightbox` | 3.34 kB (1.24 kB gzip) | User clicks gallery image |
| `MobileDrawer` | 2.05 kB (1.03 kB gzip) | Mobile menu opens |

---

## 9. Lighthouse Gaps

### Completed

| Gap | Fix |
|-----|-----|
| No `<main>` landmark on Home page | Wrapped in `<Box component="main">` |
| No `fetchpriority="high"` on hero | Converted to `<img fetchpriority="high">` |

### Remaining

| Gap | Fix | Priority |
|-----|-----|----------|
| No theme-color meta tag | `<meta name="theme-color" content="#618764">` | 🔴 High |
| No `loading="lazy"` on most images | Add to all below-fold images | 🟡 Medium |
| No preconnect for Google Fonts | Add `<link rel="preconnect">` in `index.html` | 🟡 Medium |

---

## 10. MUI Import Deepening

**Current:** Barrel imports from `@mui/material/styles` used in:

- `IconCircle.jsx` — `import { alpha, lighten } from '@mui/material/styles'`
- `Navbar.jsx` — `import { alpha } from '@mui/material/styles'`
- `main.jsx` — `import { ThemeProvider } from '@mui/material/styles'`
- `Timeline.jsx` — `import { styled } from '@mui/material/styles'`
- `NotFound.jsx` — `import { useTheme } from '@mui/material/styles'`

**Fix:** Modern bundlers can tree-shake barrel re-exports, but to be safe these can use deeper subpath imports:

```js
import { alpha } from '@mui/material/styles/alpha';
import { styled } from '@mui/material/styled';
import { useTheme } from '@mui/material/styles/useTheme';
```

(Check MUI v9 subpath availability before doing this — v9 may not support all subpaths.)

---

## Quick Wins (15 mins or less)

| # | Task | Status |
|---|------|--------|
| 1 | Add `<meta name="theme-color" content="#618764">` to `index.html` | ⬜ Open |
| 2 | Add `<link rel="preconnect">` for Google Fonts in `index.html` | ⬜ Open |
| 3 | Remove unused font weights (Noto Sans SC 500, Poppins 300) | ⬜ Open |
| 4 | Wrap `ImageCard` and `HighlightCard` in `React.memo` | ⬜ Open |
| 5 | Add `width`/`height` to gallery and highlight images | ⬜ Open |
| 6 | Drop `responsiveFontSizes()` from `theme.js` | ⬜ Open |
| 7 | Replace `backdropFilter` blur on hover states with opaque backgrounds | ⬜ Open |
