# MUI.md — Material UI v9 Usage Guide

This project uses **MUI v9** (Material UI, released early 2025) with Emotion as the styling engine. All imports use individual module paths; barrel imports from `@mui/material` are forbidden.

## Setup

```jsx
// main.jsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

<ThemeProvider theme={theme}>
   <CssBaseline />
   <App />
</ThemeProvider>;
```

## Import Rules

```jsx
// ✅ CORRECT — individual named imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// ❌ NEVER — barrel import
import { Box, Typography, Button } from '@mui/material';
```

## Components Used in This Project

### Layout

| Component   | Import                    | Usage                                                                                         |
| ----------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| `Container` | `@mui/material/Container` | Content wrapper: `maxWidth="lg"` (sections), `maxWidth="xl"` (navbar)                         |
| `Box`       | `@mui/material/Box`       | Universal container; also `component="img"`, `component="a"`, `component="nav"`               |
| `Grid`      | `@mui/material/Grid`      | Responsive grid with `spacing={3}` and {% raw %}`size={{ xs: 12, sm: 6, md: 4 }}`{% endraw %} |
| `Toolbar`   | `@mui/material/Toolbar`   | Navbar layout with `disableGutters`                                                           |

### Surface

| Component     | Import                      | Usage                                                                  |
| ------------- | --------------------------- | ---------------------------------------------------------------------- |
| `Box`        | `@mui/material/Box`         | Also `component="img"` with `fetchpriority="high"` for hero             |
| `Card`        | `@mui/material/Card`        | Info/highlight/location cards; `borderRadius: 20`, hover lift          |
| `CardContent` | `@mui/material/CardContent` | Card body: `p: 3` or `p: { xs: 3, md: 4 }`                             |
| `CardMedia`   | `@mui/material/CardMedia`   | Image inside highlight cards                                           |
| `AppBar`      | `@mui/material/AppBar`      | Navbar: `position="sticky"`, glassmorphism (`rgba` + `backdropFilter`) |
| `Drawer`      | `@mui/material/Drawer`      | Mobile menu via MobileDrawer (lazy-loaded): `anchor="right"`           |

### Navigation

| Component    | Import                     | Usage                                                              |
| ------------ | -------------------------- | ------------------------------------------------------------------ |
| `Link`       | `@mui/material/Link`       | Footer links: `underline="hover"`, `color="inherit"`               |
| `Button`     | `@mui/material/Button`     | CTAs, nav links, direction button — always `textTransform: 'none'` |
| `IconButton` | `@mui/material/IconButton` | Scroll, close, menu toggle, social icon wrappers                   |

### Data Display

| Component                                            | Import                     | Usage                                                                                                 |
| ---------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Typography`                                         | `@mui/material/Typography` | Every text node; variants: `h1`–`h5`, `body1`–`body2`, `overline`, `subtitle1`–`subtitle2`, `caption` |
| `List`, `ListItem`, `ListItemButton`, `ListItemText` | `@mui/material/List` etc.  | Mobile drawer items                                                                                   |
| `Divider`                                            | `@mui/material/Divider`    | Footer separator                                                                                      |

### Input

| Component                            | Import                                 | Usage                                                  |
| ------------------------------------ | -------------------------------------- | ------------------------------------------------------ |
| `ToggleButtonGroup` + `ToggleButton` | `@mui/material/ToggleButtonGroup` etc. | Language switcher (`exclusive`, styled via `styled()`) |

### Feedback

| Component          | Import                           | Usage             |
| ------------------ | -------------------------------- | ----------------- |
| `Modal`            | `@mui/material/Modal`            | GalleryLightbox (lazy-loaded component) |
| `CircularProgress` | `@mui/material/CircularProgress` | Suspense fallback |
| `LinearProgress`   | `@mui/material/LinearProgress`   | Loading screen progress bar |

### Theme/Utils

| Import          | From                          | Usage                         |
| --------------- | ----------------------------- | ----------------------------- |
| `useTheme`      | `@mui/material/styles`        | Access theme inside component |
| `useMediaQuery` | `@mui/material/useMediaQuery` | Responsive breakpoint checks  |
| `styled`        | `@mui/material/styles`        | Reusable styled components    |

## Components NOT Used (from other MUI versions)

The v6/v7 skills mention `Paper`, `TextField`, `Dialog`, `Skeleton`, and `Stack` — these do **not** appear in this project. Use `Card` instead of `Paper`. Where needed, use `Stack` for vertical layouts (MUI v9 removed Grid `direction="column"`).

## Styling Patterns

### `sx` Prop (preferred — all one-off styles)

{% raw %}

```jsx
<Box
   sx={{
      py: { xs: 8, md: 12 },
      background: '#F6FFF6',
      textAlign: 'center',
   }}
/>
```

{% endraw %}

Pseudo-selectors in `sx` (string syntax):
{% raw %}

```jsx
<Box
   sx={{
      '&:hover': {
         borderColor: 'secondary.main',
         transform: 'translateY(-4px)',
      },
      '&::after': {
         content: '""',
         position: 'absolute',
         inset: 0,
      },
   }}
/>
```

{% endraw %}

### `styled()` (for reusable custom components)

```jsx
import { styled } from '@mui/material/styles';

const TimelineLine = styled(Box)(({ theme }) => ({
   position: 'absolute',
   left: 20,
   width: 3,
   background: `linear-gradient(180deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
   [theme.breakpoints.up('md')]: {
      left: '50%',
      transform: 'translateX(-50%)',
   },
}));
```

### Theme Callback in `sx`

```jsx
<Box
   sx={(theme) => ({
      color: theme.palette.primary.main,
      '&:hover': {
         color: theme.palette.primary.dark,
      },
   })}
/>
```

## Theme Integration

### Theme in theme.js

- `palette`: primary (`#618764`), secondary (`#C8A64E`), background, text
- `shape.borderRadius: 16`
- `MuiButton` styleOverrides (gradient backgrounds, shadow, radius)
- `MuiAppBar` styleOverrides (glassmorphism)
- `MuiCard` styleOverrides (radius 20, shadow, hover lift)
- `MuiCssBaseline` styleOverrides (`scroll-behavior: smooth`)
- Wrapped with `responsiveFontSizes(theme)`

### Accessing Theme from Code

```jsx
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Component() {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
}
```

## Responsive Breakpoints

All values use the `{ xs, sm, md, lg, xl }` object syntax:

{% raw %}

```jsx
fontSize:   { xs: '0.95rem', md: '1.05rem' }
py:         { xs: 8, md: 12 }
flexDirection: { xs: 'column', sm: 'row' }
height:     { xs: 280, md: 400 }
size={{ xs: 12, sm: 6, md: 4 }}
display:    { xs: 'none', md: 'flex' }
```

{% endraw %}

## Shared Component Patterns

### Icon Circle

{% raw %}

```jsx
<Box
   sx={{
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: `${color}12`, // 12 = ~7% opacity
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   }}>
   <Icon sx={{ color, fontSize: 26 }} />
</Box>
```

{% endraw %}

### Section Background Alternation

{% raw %}

```jsx
<Box sx={{ py: { xs: 8, md: 12 }, background: '#fff' }} />  // white section
<Box sx={{ py: { xs: 8, md: 12 }, background: '#F6FFF6' }} />  // tinted section
```

{% endraw %}

## Theme Tokens Reference

```jsx
// Use string path in sx (no need to import theme):
color: 'primary.main';
color: 'text.secondary';
borderColor: 'secondary.main';
bgcolor: 'background.paper';

// Use theme values directly (only when needed):
theme.palette.primary.main;
theme.palette.primary.light;
theme.palette.primary.dark;
theme.shape.borderRadius;
```

## MUI v9 Grid v2 Notes

- `<Grid container spacing={N}>` wraps items
- Items use `size` prop, **not** `xs`/`sm`/`md`:
   - ✅ {% raw %}`<Grid size={{ xs: 12, sm: 6, md: 4 }}>`{% endraw %}
   - ❌ `<Grid item xs={12} sm={6} md={4}>`
- No `item` prop needed

## MUI v9 Breaking Changes (from v6/v7)

- Deep imports no longer work — use the package exports field
- `onBackdropClick` removed from `Modal` — use `onClose` instead
- All components support standardized `slots` and `slotProps` pattern
- `Grid` moved to CSS Grid (Grid v2) — `size` prop replaces `xs`/`sm`/`md`
- `makeStyles` / `withStyles` removed — use `sx` or `styled()` only
