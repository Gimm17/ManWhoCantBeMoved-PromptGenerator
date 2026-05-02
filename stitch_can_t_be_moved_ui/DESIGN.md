---
name: Serene Canvas
colors:
  surface: '#edfeec'
  surface-dim: '#cedecd'
  surface-bright: '#edfeec'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e8f8e6'
  surface-container: '#e2f2e1'
  surface-container-high: '#dceddb'
  surface-container-highest: '#d6e7d6'
  on-surface: '#111f14'
  on-surface-variant: '#524343'
  inverse-surface: '#263428'
  inverse-on-surface: '#e5f5e4'
  outline: '#847373'
  outline-variant: '#d6c2c1'
  surface-tint: '#855050'
  primary: '#855050'
  on-primary: '#ffffff'
  primary-container: '#dc9b9b'
  on-primary-container: '#613233'
  inverse-primary: '#fab5b5'
  secondary: '#476459'
  on-secondary: '#ffffff'
  secondary-container: '#c6e7d8'
  on-secondary-container: '#4b695d'
  tertiary: '#586159'
  on-tertiary: '#ffffff'
  tertiary-container: '#a5aea5'
  on-tertiary-container: '#39423b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#fab5b5'
  on-primary-fixed: '#350f11'
  on-primary-fixed-variant: '#69393a'
  secondary-fixed: '#c9eadb'
  secondary-fixed-dim: '#adcebf'
  on-secondary-fixed: '#022017'
  on-secondary-fixed-variant: '#2f4d41'
  tertiary-fixed: '#dce5db'
  tertiary-fixed-dim: '#c0c9bf'
  on-tertiary-fixed: '#151d18'
  on-tertiary-fixed-variant: '#404942'
  background: '#edfeec'
  on-background: '#111f14'
  surface-variant: '#d6e7d6'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1100px
  gutter: 24px
  margin-page: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is anchored in a philosophy of "Creative Sanctuary." For an AI prompt generator, which can often feel technical and cold, this system introduces a personal, tactile, and slightly vintage aesthetic reminiscent of high-end physical stationery.

The style is a blend of **Minimalism** and **Tactile Design**. It avoids the aggressive precision of standard SaaS tools in favor of "soft" utility. The goal is to evoke a sense of calm focus, inviting the user to linger, experiment, and treat their creative process like a journaling exercise. The emotional response is one of safety, approachability, and organic inspiration.

## Colors

The palette uses low-saturation "garden" tones to maintain a vintage, organic feel. 
- **The Canvas:** The warm cream background acts as the primary negative space, providing a softer experience than pure white.
- **Surface Layering:** The Light Sage and Sage Mint colors provide subtle tonal shifts for card bodies and headers, respectively.
- **Focus & Action:** Dusty Rose is reserved for critical paths—primary buttons, active toggles, and highlights—to provide a warm contrast against the cool sage tones.
- **Legibility:** Dark Forest Green is used instead of black for text to maintain a softer, more natural contrast ratio that reduces eye strain.

## Typography

This design system utilizes **Inter** exclusively to bridge the gap between vintage charm and modern utility. While the colors are soft, the typography remains crisp and functional. 

Headlines use slightly tighter letter spacing and heavier weights to feel grounded. Body text is optimized for readability with generous line heights, mimicking the rhythmic spacing of a typed letter. For labels and metadata, an uppercase style with tracking is used to provide clear hierarchy without being visually loud.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, centering content within a comfortable reading width to prevent the interface from feeling over-engineered or sprawling. 

Spacing is rhythmic and intentional, leaning into "breathable" margins. The stack-based spacing ensures that prompt components and generated images have enough negative space to be viewed individually without clutter. Use the 8px base unit for all padding and margin increments to maintain a consistent visual beat.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than stark contrasts.
- **Shadows:** Use a single, very soft shadow style: `0 2px 8px rgba(45, 59, 47, 0.04)`. Note the use of the Dark Forest Green color in the shadow's tint to keep it organic.
- **Layering:** Elements "lift" off the page using color. The Page Background (#F6F4E8) is the lowest level, Card Backgrounds (#E5EEE4) represent the mid-level, and Header/Active elements (#C0E1D2) represent the top level.
- **Transitions:** All hover and state changes must use a 200ms ease-in-out transition to maintain the "gentle" personality of the brand.

## Shapes

The shape language is consistently **Rounded**. 
Standard UI elements like input fields and buttons utilize a 12px radius, while larger containers like prompt cards utilize a 16px radius. This softness removes any "technical" sharpness from the prompt generation experience. For specific decorative elements or "chips," use pill-shaped (fully rounded) borders to distinguish them from functional containers.

## Components

- **Buttons:** 
  - Primary: Dusty Rose background, White or Dark Forest Green text, 12px radius. 
  - Secondary: Sage Mint background, Dark Forest Green text.
- **Input Fields:** Use the Page Background (#F6F4E8) for the field itself to "inset" it into the Sage cards. Borders are 1px solid Sage Mint at 50% opacity.
- **Cards:** Light Sage background, 16px radius, soft ambient shadow.
- **Chips/Badges:** Pill-shaped with Sage Mint backgrounds. Active states glow with a Dusty Rose border or underline.
- **Icons:** Use rounded icon sets (e.g., Feather or Lucide with a 2px stroke). Place icons within soft-tinted circular badges for a decorative, "stamped" look.
- **Prompt Blocks:** Large, text-area style inputs should feel like a page in a notebook, using the Secondary Text color for placeholder text to keep the interface quiet.