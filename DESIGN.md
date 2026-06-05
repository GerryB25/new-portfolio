---
name: Deep Tech Minimalist
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#1e0052'
  on-tertiary-container: '#9162fc'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system focuses on a high-end, developer-centric aesthetic that balances professional stability with innovative energy. It targets technical recruiters and high-growth startups, evoking an emotional response of reliability, precision, and forward-thinking expertise.

The style is a hybrid of **Minimalism** and **Modern Corporate**, utilizing heavy whitespace and structured layouts to ensure the code and projects remain the focal point. Subtle technological accents—inspired by IDE themes and high-performance hardware—are used sparingly to highlight interactive elements and key achievements without cluttering the visual field.

## Colors
This design system utilizes a deep-sea professional palette optimized for long-form reading and technical clarity.

- **Primary (Deep Blue):** Used for primary backgrounds and foundational surfaces. It provides a more sophisticated depth than pure black, reducing eye strain while maintaining a "tech" feel.
- **Secondary (Neon Cyan):** Reserved for primary actions, code syntax highlighting, and progress indicators. It represents the "Frontend" aspect of the developer's skill set.
- **Tertiary (Electric Violet):** Used for "Mobile" specific highlights, hover states, and gradient accents. It adds a layer of modern vibrancy.
- **Neutral:** A range of high-clarity grays from `#F8FAFC` (Text) to `#1E293B` (Surface levels), ensuring high contrast ratios for accessibility.

## Typography
The typography strategy employs a hierarchy that differentiates between "The Narrative" and "The Technical."

- **Headlines:** Montserrat provides a confident, geometric structure that feels established and bold.
- **Body:** Inter is used for its exceptional legibility on digital screens, ensuring that project descriptions and experience sections are easy to scan.
- **Labels & Code:** JetBrains Mono is introduced for technical labels, tags, and code snippets, reinforcing the developer's identity and providing a functional, monospaced contrast.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for desktop to maintain a premium, editorial feel, while transitioning to a fluid model for mobile and tablet.

- **Desktop:** 12-column grid with a 1200px max-width. Sections are separated by significant vertical gaps (120px) to allow the work to breathe.
- **Mobile:** Single column with 20px side margins.
- **Rhythm:** An 8px base unit governs all padding and margins to maintain mathematical harmony. Components should use multiples of 8 (16, 24, 32, 48) for internal spacing.

## Elevation & Depth
The design system avoids heavy shadows, instead using **Tonal Layers** and **Low-contrast Outlines** to create a sense of architecture.

- **Background:** The base layer is the primary deep blue (`#0F172A`).
- **Surface:** Secondary containers (cards, modals) use a slightly lighter tint (`#1E293B`) with a subtle 1px border of `#334155`.
- **Interaction:** Upon hover, elements may gain a soft, colored outer glow using a low-opacity version of the Cyan or Violet accent colors to simulate a "backlit" tech effect.

## Shapes
The shape language is "Soft Professional." By using a **0.25rem (4px)** base radius, the UI maintains a crisp, precise edge that suggests technical accuracy, while avoiding the clinical coldness of sharp 0px corners.

- **Buttons & Inputs:** 4px radius.
- **Cards & Large Containers:** 8px (rounded-lg) for a more substantial presence.
- **Icons:** Use linear, 2px stroke icons with square terminals to match the font weight of Inter.

## Components
- **Buttons:** Primary buttons use a solid Cyan-to-Violet gradient background with dark text. Secondary buttons use a "Ghost" style: transparent background with a 1px Cyan border and Cyan text.
- **Chips/Tags:** Small, monospaced labels used for tech stacks (e.g., "React Native"). Backgrounds should be a 10% opacity tint of the accent color with matching text.
- **Cards:** Project cards should feature a subtle "Glass" effect when hovering, slightly increasing the background brightness and showing a thin colored top-border.
- **Input Fields:** Darker than the surface layer, with a 1px border that glows Cyan upon focus. Use JetBrains Mono for placeholder text.
- **Lists:** Experience timelines use a solid 2px Cyan vertical line with violet dots for "active/present" roles and gray dots for past roles.
- **Navigation:** A sticky, blurred header (glassmorphism) using `#0F172A` at 80% opacity with a `backdrop-filter: blur(12px)`.