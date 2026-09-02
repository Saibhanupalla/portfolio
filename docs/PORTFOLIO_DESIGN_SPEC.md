# Personal Portfolio — Design Spec (v3)

A design-only specification for a bold **developer + creative** personal portfolio, now driven directly by the reference videos (per the user's per-video mapping) and filtered through the `impeccable` (design quality / anti-AI-slop) and `emil-design-eng` (motion + interaction craft) skills. Strategic context: `PRODUCT.md`. Visual system + tokens: `DESIGN.md`. Names, projects, and links are placeholders.

> What changed from v2: pivoted the whole aesthetic from drenched cobalt to **anime/manga + punk-zine streetwear** in black / vivid yellow / bright red, as the reference videos intend. Added the four signature interactions (loading, transition, carousel, layer scrubber).

---

## 1. Creative Direction

A high-energy **anime-manga + punk-zine** portfolio. Rich near-black surfaces drenched with vivid yellow and bright red, white type, halftone grain, torn-paper collage, katana-slash shards, and short kanji accents. It should read like a fight poster crossed with a zine — hand-made, loud, and memorable. The site itself is the strongest work sample.

Personality: warm, playful, human — expressed here as **bold, expressive, hand-made**, confident and a little reckless, never corporate.
Color strategy: **Drenched** — black dominant, yellow + red as the loud drench/accents.

---

## 2. Reference-to-feature mapping (the brief)

Each video drives a specific part of the experience:

| Video | Drives | What we take |
| --- | --- | --- |
| `...605` red/yellow/black anime | **Colours + vibe** | Black/yellow/red palette, shattered shards, katana slash, kanji, halftone |
| `...229` Resend Launch Week | **Hero typography** | Giant chunky distorted outlined poster wordmark with hard shadow |
| `...848` Apechain | **Hero carousel** | Gaming-HUD center card, side peeks, arrows + dot pagination, LIVE/index tags |
| `...334` Layer matryoshka | **Interactive elements** | Draggable vertical layer-scrubber that peels back named layers |
| `...241` Flesh & Bones | **Loading page** | Off-white zine screen, hand-drawn red doodles linked by a progress thread |
| `...169` Flesh & Bones | **Page transitions** | Torn-paper / wheatpaste halftone reveal wipe |

---

## 3. Visual System (summary — full tokens in `DESIGN.md`)

### Color (OKLCH, drenched black/yellow/red)
- `--black oklch(0.16 0.01 80)` primary surface · `--black-soft oklch(0.22 0.01 80)` HUD panels
- `--white oklch(0.97 0 0)` type on dark/red
- `--yellow oklch(0.86 0.18 95)` drench (black text) · `--yellow-deep oklch(0.78 0.17 90)` hover
- `--red oklch(0.58 0.22 25)` shock accent / CTA (white text) · `--red-bright oklch(0.64 0.24 28)` hover/glow
- `--ink oklch(0.18 0.01 80)` on yellow/white · `--muted oklch(0.62 0.02 95)` secondary on black
- `--paper oklch(0.93 0.012 95)` zine off-white — LOADING screen only, not the body bg

### Typography
- Display impact: chunky wide/condensed treated poster face (Monument Extended / Anton style) with outline + hard shadow + slight warp.
- Brush accent: rough brush/marker face for 1-2 hand-lettered words.
- Body/UI: Archivo (or Hanken Grotesk).
- HUD/tech tags: monospace (Geist Mono / Martian Mono) — justified by the gaming-HUD context.
- Kanji accents: Noto Sans JP / Zen Kaku / Yuji Syuku; short + meaningful (反逆, 情熱).

### Motion
- Curves: `--ease-out cubic-bezier(0.23,1,0.32,1)`, `--ease-in-out cubic-bezier(0.77,0,0.175,1)`. No bounce/elastic.
- `clip-path`, `mask`, `blur`, halftone are first-class materials here. Animate transform/opacity + those; never layout props.
- `scale(0.95)` enters (never `scale(0)`); `scale(0.97)` on press.
- `prefers-reduced-motion`: wipes -> crossfade, autoplay off, layers/scrub switch instantly, content never hidden.

---

## 4. Page Structure

### 4.1 Loading (first paint)
- Off-white zine screen; red line-art doodles draw in (`stroke-dashoffset`) connected by a single progress thread whose length tracks load %. Small percentage counter.
- Resolves with a torn-wipe into the hero. Skippable; reduced-motion shows the final frame instantly.

### 4.2 Hero — black, giant wordmark + HUD carousel
- Tiny nav: monogram (left); Work / About / Contact + red CTA (right).
- Centerpiece: massive treated poster wordmark (the name/title), white + yellow with red outline accents; small kanji accent + shard/slash graphics.
- Below: gaming-HUD carousel — center project card (glowing frame, title lower-left, mono stack tags, `///01`, LIVE), side peeks of prev/next, arrows + dot pagination. Drag/snap with momentum; autoplay pauses on hover/focus.

Copy:
- Wordmark: `[YOUR NAME]` / brush line: `Creative Developer`
- Featured card example: `Shinra Protocol — Cyberpunk HUD System · Next.js / TypeScript / Three.js`

### 4.3 Selected Work — carousel-first, collage case rows deeper
- The hero carousel is the primary browse. Selecting a project expands to a full torn-collage case row (big composited visual + offset title + mono meta). No identical card grid.

Placeholder projects: `Nexus X — Game Landing Page`, `Rebel Zine — Interactive Portfolio`, `Shinra Protocol — HUD System`, `Creative Coding Experiments`.

### 4.4 About — high-contrast statement
- Black or yellow fold with large type and a halftone/duotone portrait (not a gray box). Confident, human, direct voice.

Copy:
> I'm `[Your Name]` — a developer and designer who builds interfaces with the energy of a poster and the rigor of production code.

### 4.5 Interactive Layers (capabilities)
- Vivid yellow fold. A draggable vertical scrubber morphs a central figure/visual between named layers: `Concept -> Interface -> Motion -> Build` (mapping to skills). Layer dots + `i` info toggle, kanji label.
- Keyboard operable (arrow keys); reduced-motion switches layers instantly.

### 4.6 Contact — black/red close
- Oversized grunge headline (red), one warm line, real links (email, LinkedIn, GitHub, creative profile), handwritten arrow accents. No default contact form.

---

## 5. Section -> Treatment Map

```
Loading   -> zine off-white     -> hand-drawn doodles + progress thread, torn-wipe out
Hero      -> black              -> giant wordmark + HUD carousel
Work      -> black / collage    -> carousel browse, torn-collage case rows
About     -> black or yellow    -> large type + halftone portrait
Layers    -> vivid yellow       -> draggable layer scrubber, layer dots, kanji
Contact   -> black / red        -> oversized grunge headline, real links
Transitions (global) -> torn-paper / wheatpaste halftone wipe
```

---

## 6. Anti-slop guardrails (still enforced)

The aesthetic is loud, but these AI tells are still banned (`impeccable`):
- No purple-on-white, no navy-cream-orange; `--paper` off-white is loading-only, never the body bg.
- No identical 3-up feature-card grid; no nested cards.
- No gradient text, no side-stripe borders, no decorative glassmorphism, no hero-metric template.
- No tiny uppercase tracked eyebrow above every section; numbering only where it's a real sequence (the layer scrubber).
- No reflex fonts (Inter, DM Sans, Space Grotesk, Plus Jakarta, Outfit, Instrument, Fraunces, etc.).
- No bounce/elastic easing; no `transition: all`; no animating layout properties.
- Kanji must be meaningful + correct, never decorative machine-translation filler.
- Test the giant wordmark for overflow at every breakpoint; it must reflow/stack on mobile.

---

## 7. Build Notes (if/when implemented)

- Stack: Vite/Astro/Next + TypeScript; OKLCH tokens + motion curves as CSS custom properties.
- Motion libs where they earn it: a small spring/drag lib for the carousel + scrubber (e.g. Motion); GSAP or WAAPI for the loading draw + torn wipe; respect reduced-motion throughout.
- Self-host display/brush/body/mono + a JP face; subset, `font-display: swap`.
- Loading, hero carousel, layer scrubber, and the transition wipe are the four highest-effort moments; build them as isolated, accessible components.
- Run `/impeccable critique hero` and `/impeccable audit` once a real page exists; the design hook flags UI-file edits automatically.

---

## 8. Mockups

- Full end-to-end virtual mockup board (primary): `/Users/mac/.cursor/projects/Users-mac-Desktop-Website-design-inspo/assets/portfolio-full-virtual-mockup-board.png`
- Full top-flow mockup: `/Users/mac/.cursor/projects/Users-mac-Desktop-Website-design-inspo/assets/portfolio-full-virtual-mockup.png`
- Hero + carousel: `/Users/mac/.cursor/projects/Users-mac-Desktop-Website-design-inspo/assets/portfolio-mockup-hero.png`
- Loading / transition / interactive layers: `/Users/mac/.cursor/projects/Users-mac-Desktop-Website-design-inspo/assets/portfolio-mockup-systems.png`

---

*Placeholder-ready: replace `[Your Name]`, projects, visuals, kanji, and links with real content before building.*
