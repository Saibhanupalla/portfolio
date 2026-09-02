# Design

Visual system for the Sai Bhanupalla portfolio. Register: brand. Strategy: **Drenched** black / yellow / red, anime-manga + punk-zine streetwear. All color in OKLCH.

## Theme

A high-energy anime/manga + punk-zine portfolio: rich near-black surfaces drenched with vivid yellow and bright red, white type, halftone grain, torn-paper collage, and kanji accents. Aggressive, expressive, hand-made. The site is the work sample; it should feel like a fight poster crossed with a zine, not a corporate template.

Art-directed per section, not a uniform stack: black for the statement folds (hero, contact), vivid yellow for the focused/interactive folds (capabilities, the layer module), bright red as the recurring shock accent, and an off-white zine paper used only for the loading sequence. Consistency of voice over consistency of treatment.

Direct lineage from the reference videos:
- Colours + vibe: the red/yellow/black anime cut (shattered shards, katana slash, kanji).
- Hero typography: chunky distorted outlined poster wordmarks (Resend Launch-Week style).
- Hero carousel: a gaming-HUD framed card that cycles projects with side peeks (Apechain style).
- Interactive: a draggable layer-scrubber that peels back layers (matryoshka organs->skeleton).
- Loading: hand-drawn red line-art doodles linked by a progress thread.
- Transitions: torn-paper / wheatpaste halftone collage reveals.

## Color

Drenched strategy. Black dominant; yellow and red are the loud drench/accents.

```css
:root {
  /* Core */
  --black:      oklch(0.16 0.01 80);   /* primary surface (rich near-black) */
  --black-soft: oklch(0.22 0.01 80);   /* raised panels / HUD frames */
  --white:      oklch(0.97 0 0);        /* primary type on dark/red */

  /* Drench + accents */
  --yellow:      oklch(0.86 0.18 95);  /* vivid yellow drench; BLACK text on it */
  --yellow-deep: oklch(0.78 0.17 90);  /* yellow hover/shadow */
  --red:         oklch(0.58 0.22 25);  /* shock accent / CTAs; WHITE text on it */
  --red-bright:  oklch(0.64 0.24 28);  /* hover / glow edge */

  /* Reading neutrals */
  --ink:    oklch(0.18 0.01 80);       /* text on yellow/white (>=7:1) */
  --muted:  oklch(0.62 0.02 95);       /* secondary text on black (>=4.5:1 vs black) */

  /* Zine paper (LOADING screen only, deliberate — not a body bg) */
  --paper:  oklch(0.93 0.012 95);      /* off-white zine stock */
}
```

Rules:
- Text-on-fill: WHITE on `--black`/`--red`; BLACK/`--ink` on `--yellow`/`--paper`. Verify perceptually (white text on saturated red per Helmholtz-Kohlrausch).
- Red is an accent and large-type color, not body text on black. Body on black = `--white`/`--muted`.
- `--paper` is reserved for the loading sequence as a deliberate zine reference; it is NOT the site body background (avoids the cream/beige AI default).
- Banned attractors still avoided: no purple-on-white, no navy-cream-orange, no decorative gradient text.

## Typography

- **Display (impact):** a chunky, wide/condensed poster face with treatment (outline + hard drop shadow + slight warp), e.g. Monument Extended or Anton, given a custom comic-outline treatment. Carries the giant hero wordmark.
- **Display (brush accent):** a rough brush/marker face for the secondary hand-lettered line (e.g. "CREATIVE DEVELOPER" stroke), e.g. a brush script like Rock Salt-alt / a manga brush face. Use for 1-2 words, not paragraphs.
- **Body / UI:** Archivo (or Hanken Grotesk) — clean, slightly technical, highly readable.
- **Technical labels / tags / HUD meta:** a monospace (Geist Mono / Martian Mono). Here mono is justified by the gaming-HUD + technical context (stack tags, `///01`, `LIVE`), not used as generic "developer" costume.
- **Kanji accents:** Noto Sans JP / Zen Kaku Gothic for clean labels; Yuji Syuku for the brushy ones. Decorative + meaningful (e.g. 反逆 "rebellion", 情熱 "passion"); keep short, never machine-translated filler.
- Reflex-reject fonts still avoided (no Inter, DM, Space Grotesk, Plus Jakarta, Outfit, Instrument, Fraunces, etc.).

Scale and rhythm:
- Hero wordmark intentionally breaks the usual <=6rem ceiling as a deliberate poster move (it IS the art), but must be tested for overflow at every breakpoint and reflow/stack on mobile.
- Body fluid `clamp()`, ratio >= 1.25; `text-wrap: balance` on headings; body 65-75ch.

## Layout

- Long single-page scroll, one dominant idea per fold, hard color shifts between folds.
- **Hero:** giant treated wordmark + a gaming-HUD carousel (center card, side peeks, arrows + dot pagination, `///01` index, `LIVE` tag).
- **Work:** the carousel is the primary browse; deeper work can expand to full torn-collage case rows. Not a 3-up identical card grid.
- **Capabilities / Interactive:** the draggable layer-scrubber module on yellow (see Signature interactions).
- **Contact:** drenched black/red close, oversized grunge headline, real links, handwritten arrow accents.
- Semantic z-index scale (carousel < sticky nav < transition overlay < modal < toast < tooltip); never 999/9999.

## Motion

Curves (no bounce/elastic):
```css
--ease-out:    cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
```

Rules (emil-design-eng + impeccable):
- Animate `transform`/`opacity`; `clip-path`, `mask`, `blur`, halftone are first-class premium materials here (the whole aesthetic depends on them). Never animate layout props.
- Durations: press 120ms, carousel slide 320-420ms (`--ease-out`), layer scrub follows the pointer 1:1 then settles, transition wipe 500-700ms (brand statement), loading is content-paced.
- Enter from `scale(0.95)`+opacity, never `scale(0)`; buttons `scale(0.97)` on `:active`.
- Use transitions/springs for interruptible drag (carousel, scrubber); `@starting-style` for entrances.
- `prefers-reduced-motion`: torn-wipe -> hard cut/crossfade, carousel autoplay off, scrubber/layers switch instantly, loading doodles appear at once. Content never hidden behind a transition.
- No animation on keyboard-initiated actions; no `transition: all`.

## Signature interactions

1. **Loading sequence** — off-white zine screen; red line-art doodles draw in via `stroke-dashoffset`, linked by a single progress thread whose length maps to load %. Resolves into a torn-wipe to the hero. Skippable; reduced-motion shows the final frame instantly.
2. **Page transitions** — torn-paper / wheatpaste reveal: an irregular `clip-path`/`mask` edge with a halftone overlay wipes the outgoing page off and the incoming page in. One signature wipe, reused; reduced-motion = crossfade.
3. **Hero carousel** — draggable/snap horizontal slider with momentum, side peeks of prev/next, arrows + dot pagination, autoplay that pauses on hover/focus and respects reduced-motion. Keyboard: arrows + focus-visible.
4. **Layer scrubber** — a vertical draggable handle morphs a figure/visual between named layers (e.g. Concept -> Interface -> Motion -> Build) via `clip-path`/`mask`; snaps to stops, shows layer dots + an `i` info toggle. Keyboard operable (arrow keys), reduced-motion switches instantly.

## Components

- **Buttons:** filled red (white text) primary CTA; yellow secondary (black text); ghost outline on black. Press `scale(0.97)`.
- **Carousel card:** HUD frame on `--black-soft`, glowing edge, title lower-left, mono stack tags, index + LIVE tag. No nested cards.
- **Tags:** mono pills, hairline frame; no side-stripe borders.
- **Accents:** shattered-shard shapes, katana-slash rules, halftone grain, handwritten arrows — used with restraint, not on every block.

## Imagery

Brand register implies imagery. Ship real project screenshots/case visuals composited into the HUD/torn-collage treatment (or credible generated/canvas art), not flat colored blocks. Halftone/grain and torn edges are part of the treatment. One decisive visual per project. Alt text is part of the voice.
