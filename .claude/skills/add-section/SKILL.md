---
name: add-section
description: Add a new section to a page using existing primitives. Use whenever the user wants to add content to a page (a new feature grid, a quote, an image+text block, a CTA band, etc.) rather than restyling from scratch.
---

# add-section

## When to use
"Add a stats section to drivers", "put a testimonial on property owners", "I want a new block under the hero", etc.

## Available primitives (`frontend/src/components/sections/`)
| Component | Use for |
| --- | --- |
| `PageHero` | Top-of-page hero with optional bg image + CTAs |
| `SplitSection` | Two-column text + image block; `reverse` flips sides |
| `ContentBlock` | Eyebrow + reveal title + body + bullets; used inside SplitSection or alone |
| `FeatureGrid` | Numbered/iconed card grid (2/3/4 columns) |
| `CTABand` | Yellow-glow closing CTA with magnetic button |
| `Parallax` (in `motion/`) | Full-bleed scroll-driven image with overlay text |
| `RevealImage` (in `motion/`) | Clip-path wipe + scroll zoom for a single image |

## Steps
1. **Add the copy first** in `frontend/src/content/site.ts` (follow the [[update-copy]] skill). Don't inline new strings in pages.
2. Open the target page under `frontend/src/app/<route>/page.tsx`.
3. Compose primitives. Example — feature grid:
   ```tsx
   <FeatureGrid
     eyebrow={drivers.benefits.eyebrow}
     title={drivers.benefits.title}
     items={drivers.benefits.items}
     columns={4}
   />
   ```
4. Need a layout the primitives don't cover? Build a new primitive in `components/sections/`, give it a clear prop interface, and add styles to `app/globals.css` under a clearly labeled section. Don't dump styles inline.
5. Run `npm --prefix frontend run build` to verify.

## Style rules
- Eyebrows start with `⚡ ` and are title-case.
- Page titles use sentence-case for narrative sections, title-case for hero headlines (match the PDFs).
- Reuse `RevealText` (`@/components/motion/RevealText`) for scroll-triggered headings.
- Reuse `MagneticButton` for primary CTAs.
- Colors come from CSS vars: `--accent` (yellow), `--text`, `--text-2`, `--ink`.

## Anti-patterns
- ❌ Hardcoding copy inside a page or section component.
- ❌ Creating a one-off CSS-in-JS style; put it in `globals.css`.
- ❌ Adding a section type that duplicates an existing primitive.
