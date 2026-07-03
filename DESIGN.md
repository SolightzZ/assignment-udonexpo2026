# DESIGN.md — Udon Thani International Horticultural Expo 2026

## Product Design Direction

A nature-inspired, welcoming tourism website that conveys the beauty of Thailand's Isan region and the grandeur of an international horticultural expo. The design should feel lush, warm, and refined -- blending natural green tones with gold accents, soft glassmorphism, and smooth motion. The experience should inspire visitors to attend by communicating scale, beauty, and cultural richness.

## Visual Principles

1. **Nature-first** — Green is the hero colour; all UI decisions reference the natural world
2. **Layered depth** — Glassmorphism, subtle shadows, backdrop blurs, and parallax create spatial hierarchy
3. **Warm gold accents** — Gold (#C8A64E) provides premium, celebratory contrast against deep greens
4. **Generous whitespace** — Breathing room around all content; never crowded
5. **Fluid responsiveness** — Typography and spacing scale proportionally from mobile to desktop
6. **Smooth motion** — Framer Motion fade-up entries on scroll; never abrupt or decorative-only

## Colour System

| Token | Hex | Usage |
|-------|-----|-------|
| `primary.main` | `#1B5E20` | Headings, primary buttons, link states |
| `primary.light` | `#4CAF50` | Gradient highlights, hover accents |
| `primary.dark` | `#0D3B0F` | Footer backgrounds, heavy emphasis |
| `secondary.main` | `#C8A64E` | Accent borders, CTA buttons, decorative lines |
| `secondary.light` | `#D4BC6A` | Subtle gold highlights, icon tint |
| `secondary.dark` | `#A08030` | Gold hover states |
| `background.default` | `#F6FFF6` | Off-white green-tinted page background |
| `background.paper` | `#FFFFFF` | Cards, sections |
| `text.primary` | `#1A1A1A` | Body and heading text |
| `text.secondary` | `#4A4A4A` | Supporting text, descriptions |

**Gradients:**
- Primary button: `linear-gradient(135deg, #1B5E20, #2E7D32)`
- Secondary button: `linear-gradient(135deg, #C8A64E, #D4BC6A)`
- Footer: `linear-gradient(135deg, #0D3B0F, #1B5E20, #0D3B0F)`
- Section divider line: `linear-gradient(90deg, #1B5E20, #C8A64E)`

## Typography

```css
font-family: "Poppins", "Noto Sans Thai", "Noto Sans SC", sans-serif;
```

| Style | Weight | Size (xs → md → lg) | Line Height |
|-------|--------|---------------------|-------------|
| h1 | 700 | 2rem → 3.75rem → 4.5rem | 1.15 |
| h2 | 600-700 | 1.75rem → 2.25rem → 2.75rem | 1.3 |
| h3 | 600 | 2rem | 1.4 |
| h4 | 600 | 1.5rem | 1.4 |
| h5 | 500 | 1.25rem | — |
| body1 | 400 | 0.95rem → 1.05rem | 1.7 |
| overline | 600 | theme default | — |

**Font scaling:** Use `responsiveFontSizes(theme)` for global responsive scaling. On mobile, never use `h1` above 2rem.

## Layout and Spacing

- **Page max width:** `lg` breakpoint (1200px) for all content sections; `xl` only for the navbar
- **Section vertical padding:** `py: { xs: 8, md: 12 }` on every section
- **Section backgrounds:** Alternate between `#fff` and `#F6FFF6` for visual separation
- **Grid spacing:** `spacing={3}` (24px) between cards
- **Card padding:** `p: 4` (32px) for info cards; `p: 3` for card content
- **Border radius scale:** `16` (theme default), `20` for cards, `12` for buttons, `50%` for icons
- **Content max-width for text:** `maxWidth: 640` or `800` for centred body text
- **Section title bottom margin:** `mb: { xs: 5, md: 7 }`

## Components

### Navbar
- Glassmorphism effect: `background: rgba(255,255,255,0.85)` + `backdropFilter: blur(20px)`
- Subtle bottom border: `1px solid rgba(27, 94, 32, 0.1)`
- Sticky position
- Nav links: transparent background, `rgba(27, 94, 32, 0.08)` hover background, no underline
- Logo: circular gradient icon (UE initials) + site title
- Mobile: Drawer from right, 280px wide

### Hero
- Full-screen section (100vh / 90vh mobile) with overlay gradient `rgba(0,0,0,0.3) → rgba(0,0,0,0.6)`
- Background image with parallax scroll (`translateY` at 0.35× scroll speed)
- White text with text-shadow for readability
- Staggered fade-up animation for title → subtitle → CTA
- Scroll-down indicator with infinite bounce animation
- CTA button: secondary colour (gold)

### Buttons
- `textTransform: 'none'` (never uppercase)
- `fontWeight: 600`
- `borderRadius: 12`
- Padding: `12px 28px` default; `px: { xs: 3, md: 5 }, py: { xs: 1.5, md: 1.8 }` for large
- Contained primary: green gradient with `0 4px 20px rgba(27, 94, 32, 0.3)` shadow
- Contained secondary: gold gradient with `0 4px 20px rgba(200, 166, 78, 0.3)` shadow
- Outlined primary: `borderColor: #1B5E20`, hover background `rgba(27, 94, 32, 0.05)`

### Cards
- `borderRadius: 20`
- `boxShadow: 0 8px 32px rgba(0,0,0,0.08)`
- `backdropFilter: blur(8px)` for glass effect
- Hover: `translateY(-4px)` + `boxShadow: 0 12px 40px rgba(0,0,0,0.12)`
- Transition: `transform 0.3s ease, box-shadow 0.3s ease`

### Section Title
- Centered h2 heading in `primary.dark`
- Optional subtitle in `text.secondary`
- Decorative underline: 60px wide, 4px tall, green-to-gold gradient, centered

### Icon Circles
- MUI icon inside a circular container
- Container: `width: 60, height: 60, borderRadius: 50%` (40px for smaller variants)
- Background: `rgba(27, 94, 32, 0.08)` (green tint) or `color + '15'` for highlight cards
- Icon: `color: primary.main`, `fontSize: 30` (or accent colour for highlight cards)

### Footer
- Dark green gradient background `#0D3B0F → #1B5E20 → #0D3B0F`
- White text with secondary gold section titles
- Contact items: row with icon + link, bordered hover (`borderColor: secondary.main`)
- Social links: circular 40px buttons with translucent background, hover lifts + gold border
- Divider: `rgba(255,255,255,0.1)`
- Copyright: centered, `rgba(255,255,255,0.6)`

## Animation Patterns

- **Entry animation:** `framer-motion` `motion.div` with `initial={{ opacity: 0, y: 20-40 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: '-60px' }}`
- **Staggered delays:** Use `transition={{ duration: 0.5, delay: index * 0.1-0.15 }}` for grid items
- **Card hover:** Transform + shadow transition (0.3s ease)
- **Button hover:** Gradient shift + shadow intensify
- **Image hover:** `scale(1.08)` on card media (0.5s ease)
- **Scroll indicator:** Infinite `y: [0, 8, 0]` bounce (2s duration, 1s delay)
- **Parallax:** Hero background `translateY` at 35% of scroll speed

## Interactive States

| Element | Default | Hover | Focus/Active |
|---------|---------|-------|-------------|
| Primary button | Green gradient | Darker green gradient + deeper shadow | Same as hover |
| Secondary button | Gold gradient | Darker gold gradient | Same as hover |
| Nav link | Transparent | `rgba(27, 94, 32, 0.08)` | primary.main text |
| Card | Shadow 0 8px 32px | translateY(-4px) + deeper shadow | Same as hover |
| Social icon | Translucent bg | Gold bg tint + gold border + translateY(-3px) | Same as hover |
| Contact row | Transparent border | Gold border | Same as hover |
| Info card | Transparent border | secondary.main border | Same as hover |

## Accessibility

- ARIA labels on all interactive elements (IconButton, nav, social links)
- Semantic HTML (`<nav>`, `<footer>`, heading hierarchy `h1→h2→h3`)
- Sufficient contrast: green `#1B5E20` on white, white text on dark green
- Scroll behavior: `scroll-behavior: smooth` on body
- Focus states use MUI defaults (visible outline ring)
- Links open in new tab use `rel="noopener noreferrer"`
- Images use `alt` text from i18n; lazy loading with `loading="lazy"`
- Reduced motion: Framer Motion animations respect user preference by default

## Do Not Do

- Do not use uppercase text on buttons (`textTransform: 'none'`)
- Do not use sharp corners (minimum radius 12 on all interactive elements)
- Do not use pure black (`#000`) for text — use `#1A1A1A` or `#4A4A4A`
- Do not use Tailwind CSS or CSS modules — use MUI `sx` or Emotion `styled`
- Do not hardcode strings — all text must come from i18n locale files
- Do not add decorative-only animations that delay content visibility
- Do not use barrel imports from `@mui/material` — import individual components
- Do not add shadows with opacity above 0.3 for UI elements
- Do not use default MUI border radius — override with theme values
- Do not introduce new colour tokens — use the 10-colour palette defined above
