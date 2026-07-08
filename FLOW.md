# Udon Expo 2026 — Project Flow

```mermaid
flowchart TD
    A["main.jsx<br/>Entry Point"] --> B["Import i18n<br/>(side-effect init)"]
    A --> C["Import Fonts<br/>Poppins / Noto Sans Thai / Noto Sans SC"]
    A --> D["StrictMode"]
    D --> E["BrowserRouter<br/>basename='/assignment-udonexpo2026/'"]
    E --> F["ThemeModeProvider<br/>mode='light'|'dark'"]
    F --> G["ThemedApp"]
    G --> G1["ThemeProvider<br/>theme={getTheme(mode)}"]
    G --> G2["CssBaseline<br/>global reset + noise overlay"]
    G1 --> H["App.jsx"]
    G2 --> H
    B --> H
    C --> H
```

```mermaid
flowchart TD
    H["App.jsx"] --> I["RouteErrorBoundary<br/>imported from components"]
    I --> J["MotionConfig<br/>reducedMotion='user'"]
    J --> K["HeritageBackdrop<br/>fixed SVG decoration"]
    K --> L["Suspense<br/>fallback=PageLoader (components/PageLoader)"]
    L --> M["Routes"]
    M --> N["'/'<br/>Navbar + Home"]
    M --> O["'/tech'<br/>Navbar + Tech"]
    M --> P["'*'<br/>NotFound (pages/NotFound.jsx)"]
    N --> Q["Hero → <img fetchpriority='high'><br/>(not CSS background-image)"]
    N --> R["About | Highlights<br/>Gallery → GalleryLightbox (lazy)<br/>Timeline | VisitorInfo<br/>Location | Footer"]
    O --> S["TechCategoryCard ×6<br/>Footer"]
```

```mermaid
flowchart LR
    T["i18n.js"] --> U["LanguageDetector<br/>localStorage > navigator"]
    T --> V["Only detected LANG<br/>loaded via await before init"]
    T --> W["i18n.init()<br/>resources = only that lang"]
    T --> X["Other 2 LANGs<br/>load via Promise.allSettled<br/>→ addResourceBundle"]
    T --> Y["fallbackLng: 'th'"]
    Z["LanguageSwitcher<br/>ToggleButtonGroup"] --> AA["App.handleLanguageChange"]
    AA --> AB["i18n.changeLanguage()"]
    AB --> AC["All useTranslation()<br/>auto re-render"]
    AA --> AD["document.documentElement<br/>lang={nextLang}"]
```

```mermaid
flowchart TD
    AE["Navbar"] --> AF["NAV_ITEMS<br/>7 hash links + 1 route link"]
    AF --> AG["href='#hero'~'#location'<br/>isRoute=false"]
    AF --> AH["href='/tech#tech-header'<br/>isRoute=true"]
    AG --> AI["On Home? → scrollIntoView<br/>Elsewhere? → navigate('/')"]
    AH --> AJ["navigate('/tech')<br/>+ 100ms delay → scrollIntoView"]
    AE --> AK["IntersectionObserver<br/>threshold:0.3, rootMargin:-80px"]
    AK --> AL["activeKey state<br/>→ hero|about|highlights|..."]
    AL --> AM["Desktop >1100px<br/>green underline bar on active"]
    AL --> AN["Mobile ≤1100px<br/>green left border in Drawer"]
    AE --> AO["Desktop >1100px<br/>horizontal nav bar + ThemeToggle + LanguageSwitcher"]
    AE --> AP["Mobile ≤1100px<br/>MobileDrawer (lazy-loaded)<br/>2.05 kB chunk"]
    AP --> AQ["LanguageSwitcher + ThemeToggle<br/>always visible in Drawer"]
```

```mermaid
flowchart TD
    AR["Theme (theme.js)<br/>getTheme(mode)"] --> AS["primary #618764<br/>moss green"]
    AR --> AT["secondary #C8A64E<br/>gold"]
    AR --> AU["dark mode<br/>bg #1C2529<br/>text #FFFFFF"]
    AR --> AV["borderRadius: 16<br/>globally"]
    AR --> AW["Typography: Poppins<br/>+ Noto Sans Thai/SC"]
    AR --> AX["MuiButton: textTransform: none<br/>borderRadius: 12"]
    AR --> AY["MuiAppBar: glassmorphism<br/>bg blur(24px)<br/>gold bottom border"]
    AR --> AZ["MuiCard: borderRadius: 20<br/>hover lift + gold top bar<br/>(::before accent line)"]
    AR --> BA["CssBaseline: noise overlay<br/>z-index 1299"]
    AR --> BB["prefers-reduced-motion<br/>kill switch"]
```

```mermaid
flowchart LR
    BC["Scroll Events"] --> BD["IntersectionObserver<br/>→ Navbar activeKey"]
    BC --> BE["useScrollListener<br/>→ Hero parallax bg shift"]
    BC --> BF["HeritageBackdrop<br/>→ --backdrop-y var"]
    BG["Tab Hidden<br/>(document.hidden)"] --> BH["Pause CSS animations<br/>HeritageBackdrop: animationPlayState<br/>NotFound: unmount motion elements"]
    BI["Framer Motion"] --> BJ["Reveal component<br/>whileInView fade+slide"]
    BI --> BK["motion.div<br/>entry animations"]
    BI --> BL["useReducedMotion()<br/>SSR-safe"]
```

```mermaid
flowchart LR
    BM["Data Flow"] --> BN["Each component calls useTranslation()"]
    BN --> BO["Hero About Highlights<br/>Gallery Timeline VisitorInfo"]
    BM --> BP["TECH_CATEGORIES<br/>static data array — 6 items"]
    BP --> BQ["TechCategoryCard<br/>maps + renders icons"]
    BM --> BR["useScramble hook<br/>randomize → word-by-word reveal"]
    BR --> BS["requestAnimationFrame<br/>60fps char reveal"]
```

```mermaid
flowchart TD
    BT["Deployment"] --> BU["npm run build"]
    BU --> BV["Vite builds dist/"]
    BU --> BW["404.html SPA fallback<br/>(inline redirect script)"]
    BV --> BX["GitHub Pages<br/>base: /assignment-udonexpo2026/"]
```

```mermaid
flowchart LR
    BY["pages/NotFound.jsx<br/>self-contained"] --> BZ["DecorativeMotifs<br/>8 floating gold kranok SVGs"]
    BY --> CA["FloatingParticles<br/>20 drifting gold dots"]
    BY --> CB["Staggered entrance<br/>Framer Motion staggerChildren"]
    BY --> CC["Gold gradient 404<br/>background text + glow"]
    BY --> CD["Home button<br/>gold pill + hover lift"]
```
