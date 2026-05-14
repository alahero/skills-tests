---
name: SOLIS Beach Nightclub
colors:
  background: "#120817"
  on-background: "#ffffff"
  surface: "#1b0b2e"
  surface-container: "#2a0f33"
  on-surface: "#ffffff"
  on-surface-variant: "rgba(255,255,255,0.72)"
  primary: "#ffe45e"
  on-primary: "#120817"
  secondary: "#e85d1c"
  on-secondary: "#ffffff"
  tertiary: "#ff9f1c"
  on-tertiary: "#120817"
  outline: "rgba(255,255,255,0.15)"
  error: "#ffb4ab"
  on-error: "#120817"
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 76px
    fontWeight: "800"
    lineHeight: 72px
    letterSpacing: "-0.04em"
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: "700"
    lineHeight: 44px
    letterSpacing: "-0.03em"
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 30px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 30px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: "0.25em"
rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  card-gap: 20px
  section-margin: 48px
  glass-padding: 24px
components:
  hero-sun:
    backgroundColor: "radial-gradient(circle, #ff9f1c, #e85d1c, transparent)"
    rounded: "{rounded.full}"
  glass-card:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.glass-padding}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 0 28px
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    height: 48px
    padding: 0 28px
---

## Brand & Style

Solis is an **open-air beach nightclub** in Cancún between **golden-hour warmth** and **late-night ultraviolet energy**. The UI is **cinematic editorial**: oversized Syne headlines, restrained DM Sans body, layered **sunset gradients** (deep orange → amber → dark plum). Motion (GSAP + ScrollTrigger) adds **depth and rhythm** without noise — palms parallax, staggered titles, cards that lift on hover. Yellow accent stays **rare**: CTAs, micro-labels, glow highlights.

## Colors

- **Ground:** `#120817` page, `#1b0b2e` / `#2a0f33` surfaces.
- **Sunset ramp:** `#e85d1c`, `#c84d1b`, `#ff9f1c` for heat and horizon light.
- **Accent:** `#ffe45e` for primary actions and sparks only.
- **Text:** `#ffffff` primary; `rgba(255,255,255,0.72)` secondary lines.
- **Magenta wash:** subtle radial `rgba(255,80,140,0.22)` for nightclub undertone.

## Typography

- **Syne** (500–800) for display and section titles — tight tracking on large sizes.
- **DM Sans** (400–600) for UI, body, labels.
- Display line-height tight; body line-height generous (`leading-relaxed`).

## Layout & Spacing

Single rail **max-w-6xl**, horizontal padding `16–32px`. Hero **min-h-svh** with absolute decorative layers; sections **py-20 / py-28**. Location: **two-column** on `lg`. Playlist: **grid** `1 → 2 → 3` columns. Footer: **three columns** collapsing to stack. **8px** spacing rhythm.

## Elevation & Depth

Depth from **layered gradients**, **blurred sun orb**, **silhouette palms** (foreground darker than background), **vignette**, optional **glass** (`backdrop-blur`, `bg-white/5–10`, hairline `border-white/10`). Cards use **inset highlight** and soft **orange outer glow** on hover.

## Shapes

**Full pills** for CTAs; **rounded-2xl / rounded-3xl** for cards and map shell. Sun is a **circle**; nav/header uses **rounded-lg** controls.

## Components

- **Header:** fixed translucent bar, desktop links + **mobile drawer** (`button` toggle).
- **Hero:** stacked layers + **sun-breathe** / **glow-drift** CSS loops; GSAP intro + scrub parallax.
- **AnimatedText:** word masks with ScrollTrigger reveal (disabled when reduced motion).
- **Location card:** stylized map block + **Open in Maps** external mock link.
- **PlaylistCard:** gradient glass panel, **eq-bar** CSS animation, Spotify row CTA.
- **Footer:** staggered blocks, social icon buttons, legal placeholder anchors.

Motion: ScrollTrigger **`refresh`** on resize (`requestAnimationFrame`). **`prefers-reduced-motion`:** skip GSAP reveals; static sun/glow; simplified EQ bars. **Accessibility:** semantic regions, skip link, **`aria-hidden`** on decorative layers, **`aria-label`** on icon-only links.
