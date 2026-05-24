## Plan: Personal site for Isabel Bolger

Build a single-page personal site using the selected "Warm minimalist editorial" direction (Playfair Display + Inter, canvas/clay/ink palette).

### Content sections
1. **Sticky nav** — "I. Bolger" wordmark + links (Path, Work, Contact)
2. **Hero** — "Building for speed & soul." + short intro paragraph + portrait image
3. **Career path** — three-step timeline (Engineer Era → The Transition → Product at Microsoft) with a pull-quote card alongside, tuned to Isabel's own words (loves customer interaction, collaboration, design; engineer → PM on an adjacent partner team focused on performance)
4. **Passions & side projects** — 2-card grid with generated imagery
5. **Contact** — large "Say hello." with Email / LinkedIn / GitHub links
6. **Footer line** — © Isabel Bolger

### Implementation
- Replace `src/routes/index.tsx` placeholder with the full page, broken into small components under `src/components/site/` (Nav, Hero, Path, Work, Contact)
- Add design tokens to `src/styles.css` as semantic CSS variables (`--canvas`, `--clay`, `--ink`, `--stone-soft`) registered in `@theme inline` so Tailwind classes like `bg-canvas`, `text-clay` work — no hardcoded hex in components
- Load Playfair Display + Inter via `<link>` in `head()` of the root route; register `--font-serif` / `--font-sans` in `@theme inline`
- Add per-page SEO via `head()` on the index route: title "Isabel Bolger — Product Manager", description, og tags, og:image once portrait is generated
- Generate 3 images with `imagegen` saved to `src/assets/`:
  - Warm soft-focus portrait (placeholder — Isabel can swap her own later)
  - Minimal mindful-timer interface mock
  - Warm clay/ceramic texture
- Smooth scroll between nav anchors

### Notes
- Copy stays close to Isabel's voice from her intro (performance, sleek/fast, customer empathy, engineer-to-PM journey on adjacent partner team)
- Portrait will be a generated stand-in; she can replace `src/assets/portrait.jpg` later
- Side project titles are reasonable placeholders — she can edit text directly