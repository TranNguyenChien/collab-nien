# Design System Specification: Editorial Organicism

## 1. Overview & Creative North Star

**Creative North Star: "The Modern Atelier"**
This design system moves away from the sterile, rigid grids of traditional SaaS and into the realm of high-end editorial curation. It is designed to feel like a bespoke physical space—think of a sun-drenched studio with limestone surfaces, raw linen, and walnut accents.

To achieve this, we break the "template" look by prioritizing **Intentional Asymmetry** and **Tonal Depth**. Instead of boxing content in, we allow elements to breathe and overlap. We use massive typography scales against quiet backgrounds to create a sense of authority and calm. This system is not just a UI; it is a sensory digital experience.

---

## 2. Colors & Surface Philosophy

The palette is rooted in the "Merino" spectrum—a range of warm, earthen tones that provide a sophisticated alternative to cold grays.

### The Color Logic

- **Primary (`#735735`)**: Used for brand moments and high-priority actions.
- **Secondary (`#79573a`)**: Reserved for tonal depth and supporting interactive elements.
- **Surface & Background (`#fff8f5`)**: Our canvas. It is creamy and warm, reducing eye strain and feeling more "organic" than pure white.

### The "No-Line" Rule

**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or containment.
Visual boundaries must be defined exclusively through:

1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Vertical Rhythm:** Using generous whitespace to imply grouping.
3.  **Tonal Transitions:** A subtle shift from `surface-container` to `surface-container-high`.

### The "Glass & Gradient" Rule

To prevent the UI from feeling flat, use **Glassmorphism** for floating elements (like Navigation Bars or Popovers). Apply a semi-transparent `surface` color with a `backdrop-blur-md` effect. For Hero sections or primary CTAs, utilize a subtle linear gradient from `primary` to `primary_container` to inject "visual soul" and a tactile, three-dimensional quality.

---

## 3. Typography

Our typography is a dialogue between the architectural structure of **Plus Jakarta Sans** and the approachable, organic soft-corners of **Quicksand** (implemented here via the Plus Jakarta Sans scale for professional weight distribution).

- **Display & Headlines (Plus Jakarta Sans):** High-contrast, bold, and authoritative. Use `display-lg` for hero statements to command attention.
- **Body & Labels (Plus Jakarta Sans):** Legible, warm, and friendly. The rounded terminals of Quicksand mirror our `0.625rem` corner radius, creating a unified visual language.

| Role            | Font              | Size      | Intent                           |
| :-------------- | :---------------- | :-------- | :------------------------------- |
| **Display-LG**  | Plus Jakarta Sans | 3.5rem    | Editorial impact / Hero headers  |
| **Headline-MD** | Plus Jakarta Sans | 1.75rem   | Section entries                  |
| **Title-MD**    | Plus Jakarta Sans | 1.125rem  | Card titles / Sub-navigation     |
| **Body-LG**     | Plus Jakarta Sans | 1rem      | Primary reading experience       |
| **Label-SM**    | Plus Jakarta Sans | 0.6875rem | Metadata / Overlines (Uppercase) |

---

## 4. Elevation & Depth (The Layering Principle)

We eschew traditional "Drop Shadows" in favor of **Tonal Layering**. Depth is achieved by stacking the surface-container tiers as if they were sheets of fine handmade paper.

- **The Stack:**
  - Base: `surface`
  - Section: `surface-container-low`
  - Card/Element: `surface-container-lowest` (This creates a "lifted" effect without a shadow).
- **Ambient Shadows:** If an element must float (e.g., a Modal), use a shadow tinted with `on-surface` (`#28180d`) at 4% opacity with a 32px blur. It should look like a soft glow, not a dark smudge.
- **The Ghost Border:** For accessibility in forms, use `outline-variant` at **15% opacity**. This provides a "hint" of a container without breaking the organic flow.

---

## 5. Components

### Buttons

- **Primary:** Background `primary`, text `on-primary`. Roundedness `0.625rem`. Use a subtle inner-glow (top white border 10% opacity) for a premium tactile feel.
- **Secondary:** Background `secondary_container`, text `on-secondary_container`.
- **Tertiary:** No background. Text `primary`. Underline on hover with a 2px offset.

### Cards & Lists

- **The Forbid Rule:** No divider lines between list items. Use 16px of vertical padding and a hover state of `surface-container-low`.
- **Composition:** Use `line-clamp` for descriptions to maintain a clean grid. Incorporate the `marquee` utility for logos or trust signals to add "life" to the static page.

### Input Fields

- **Styling:** `surface-container-low` background, no border. On focus, transition to a 1px `primary` ghost-border.
- **Labels:** Always use `label-md` in `on-surface-variant` color.

### Signature Component: The "Editorial Reveal"

Utilize the `marquee` animation utility for secondary information (e.g., "Latest Updates" or "Client List") to keep the layout dynamic without cluttering the focal points.

---

## 6. Do’s and Don’ts

### Do:

- **Embrace Whitespace:** If it feels like "too much" space, add 20% more. This system thrives on air.
- **Use Intentional Asymmetry:** Offset images or text blocks by 1-2 columns in your grid to create an editorial, non-templated look.
- **Soft Corners:** Ensure all interactive elements adhere to the `0.625rem` (10px) radius.

### Don’t:

- **Don't use pure black:** Use `on-surface` (`#28180d`) for text. Pure black is too harsh for this organic palette.
- **Don't use hard borders:** Avoid the "boxed-in" look. Let the background colors do the work of separation.
- **Don't crowd the margins:** Content should never feel "pinched." Maintain a minimum of 24px internal padding on all containers.

---

## 7. Tailwind Implementation

Integrate these specific utilities to maintain the system's "High-End" feel:
