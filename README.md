# Udon Thani International Horticultural Expo 2026

A production-ready, multilingual tourism website for the Udon Thani International Horticultural Expo 2026, built with React 19 and Material UI.

## Tech Stack

- **React 19** — Latest React with concurrent features
- **Vite 8** — Fast build tool and dev server
- **MUI v9** — Material Design components with custom theming
- **React Router v7** — Client-side routing
- **i18next** — Internationalization with instant language switching
- **Framer Motion** — Smooth animations and transitions
- **Oxlint** — Fast Rust-based linting

## Features

- 🌐 **3 Languages** — Thai, English, Chinese (Simplified) with instant switching
- 🎨 **Modern UI** — Glassmorphism, gradients, soft shadows, rounded corners
- 🌿 **Nature-inspired Theme** — Dark green (#1B5E20) + Gold (#C8A64E) palette
- 📱 **Fully Responsive** — MUI Grid v2 adapts to desktop, tablet, and mobile
- 🎞 **Smooth Animations** — Framer Motion fade-up, scale, and parallax effects
- ♿ **Accessible** — ARIA labels, semantic HTML, keyboard navigation
- ⚡ **Performance** — Route-level code splitting, lazy image loading
- 🧩 **Clean Architecture** — Separated components, theme, locales, and utils

## Sections

1. **Hero** — Full-screen parallax hero with CTA
2. **About** — Expo details, date, location, organizer
3. **Highlights** — 6 feature cards with images and icons
4. **Gallery** — Masonry image grid with lightbox
5. **Timeline** — Vertical timeline with animation
6. **Visitor Info** — Hours, tickets, transport, parking, facilities
7. **Location** — Embedded Google Maps card
8. **Footer** — Contact, social links, copyright

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── assets/images/
├── assets/icons/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Highlights/
│   ├── Gallery/
│   ├── Timeline/
│   ├── VisitorInfo/
│   ├── Location/
│   ├── Footer/
│   ├── LanguageSwitcher/
│   └── SectionTitle/
├── layouts/
├── pages/
│   └── Home.jsx
├── locales/
│   ├── th/translation.json
│   ├── en/translation.json
│   └── zh/translation.json
├── theme/theme.js
├── hooks/
├── utils/
├── App.jsx
├── main.jsx
└── i18n.js
```

## Language Support

Language detection uses `localStorage` first, then browser preference. Switching languages updates all text immediately without page refresh.

- Thai (th) — Default
- English (en)
- Chinese Simplified (zh)
