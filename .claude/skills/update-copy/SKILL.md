---
name: update-copy
description: Update website text content. Use whenever the user wants to change any words on the site (headlines, body copy, CTAs, nav labels, ticker items, contact email). All copy is centralized — edit one file, every page updates.
---

# update-copy

## When to use
Any request to change site wording: "change the hero", "rename the brand", "update the email", "make the drivers headline say X", "add a bullet to property owners", etc.

## How copy is structured
**Single source of truth:** `frontend/src/content/site.ts`

It exports typed objects:
- `brand` — name, wordmark, tagline, email
- `nav` — top-nav items (`[{ label, href }]`)
- `home` — homepage sections (`hero`, `simple`, `fast`, `twoSides`, `mission`, `vision`)
- `drivers` — drivers-page sections (`hero`, `whereLife`, `fast`, `noBarriers`, `benefits`, `steps`, `overlap`)
- `propertyOwners` — (`hero`, `benefits[]`, `partnership`, `future`, `closing`)
- `about` — (`hero`, `story.paragraphs`, `mission`, `vision`)
- `contact` — (`hero`, `cards[]`, `email`)
- `ticker` — marquee strings

Pages in `frontend/src/app/<route>/page.tsx` import from `@/content/site` and pass content into shared section components in `frontend/src/components/sections/`.

## Steps
1. Open `frontend/src/content/site.ts`.
2. Edit only the strings the user asked about. Preserve existing structure and the `as const` assertions.
3. Run `npm --prefix frontend run build` to confirm types still pass.
4. Do **not** edit text inside `app/**/page.tsx` or `components/sections/*.tsx` — those are layouts; copy lives only in `site.ts`. If the user wants a new field, add it to `site.ts` AND wire it through the matching section component.

## Style rules
- Use straight quotes / typographic dashes consistent with the existing PDFs ("—", "0–80%").
- Brand wordmark is always `FASTER` (visual) + `EV CHARGE NOW` tagline; body copy uses `EV ChargeNow`.
- Keep sentence-case headlines unless the existing entry is title-case.

## Definition of done
- `site.ts` updated.
- `tsc --noEmit` (or `npm run build`) passes.
- No `page.tsx` files modified for pure copy changes.
