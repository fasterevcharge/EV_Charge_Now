# EV ChargeNow — Project Conventions

## Architecture
```
frontend/
├── public/                # static assets (logo, images, videos, pillar SVGs)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx           home
│   │   ├── drivers/page.tsx
│   │   ├── property-owners/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/        # Header, Footer, Marquee, CursorBolt, PageShell
│   │   ├── motion/        # MagneticButton, RevealText, RevealImage, Parallax
│   │   └── sections/      # Hero, Pillars, PageHero, SplitSection, ContentBlock, FeatureGrid, CTABand, VideoBackground
│   ├── content/
│   │   └── site.ts        # SINGLE SOURCE OF TRUTH for all copy
│   └── lib/
│       └── supabase.ts
backend/                   # FastAPI (Railway)
```

## Rules
1. **All copy lives in `src/content/site.ts`.** Pages and sections import from `@/content/site` — never hardcode strings in TSX.
2. **Pages compose primitives.** A page is mostly: `<PageHero/> <SplitSection/> <FeatureGrid/> <CTABand/>` wired with content from `site.ts`. Building a new primitive is OK; duplicating one isn't.
3. **Styles live in `app/globals.css`** under labeled section comments. No CSS-in-JS, no per-component CSS files.
4. **Colors via CSS vars** from the `:root` block: `--accent` (yellow), `--ink`, `--text`, `--text-2`, `--line`, `--bg`.
5. **Animation:** `motion/react` only. Reuse `RevealText` for headings and `MagneticButton` for primary CTAs.

## Skills
- `/update-copy` — change site wording (edits `site.ts`).
- `/add-section` — add a new block to a page using existing primitives.

## Auto type-check
`.claude/settings.json` registers a `PostToolUse` hook that runs `npx tsc --noEmit` on any frontend Edit/Write. Errors surface immediately.

## Dev
```bash
cd frontend
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also runs type-check)
```

## Deploy
- **Frontend** → Vercel (Root Directory: `frontend`).
- **Backend** → Railway (Root Directory: `backend`).
