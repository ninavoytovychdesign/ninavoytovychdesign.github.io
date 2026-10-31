# ninavoytovychdesign.github.io

Static site, no build step. Upload the folder contents to the repository root – GitHub Pages serves `index.html`.

## Structure

- `index.html` – home page (Home v2 from Figma)
- `work/index.html` – all projects
- `work/<slug>.html` – case pages: lunora, ulovo, open-kharkiv, tripstone, gora, investment-platform, numa, nova-poshta, unifies
- `work/case-template.html` – an empty template with every block: lead, numbers, research, decision (Why / What I did / What I got / What changed), image, before/after slider
- `assets/css/site.css` – the system: colors, type, grid, components
- `assets/css/case-blocks.css` – the diagrams and blocks from the previous site, recolored for the light theme
- `assets/js/site.js` – radar, Focus tabs, before/after slider, section rail, mobile menu
- `assets/covers/<slug>.webp` – card and case covers, 1600×1000
- `assets/cases/<slug>/NN.webp` – case images
- `assets/fonts/` – Outfit and IBM Plex Mono, self-hosted
- `assets/cv/` – CV

## Covers

The home page covers are exported from Figma (Cover v4 frames, at 2x):

- `assets/covers/lunora.webp`, `ulovo.webp`, `tripstone.webp` and `gora.webp` – 1320×824.
- `assets/covers/open-kharkiv-wide.webp` – 2688×1168.

The Focus images in `assets/focus/` are 720×448.

To update a cover, export the frame at 2x as WebP and save it under the same name.

## TripStone

`work/tripstone.html` uses the template. The dashed `TODO(Nina)` blocks show what each section still needs; the page only uses facts from the Home v2 description.

## Rules

- Font sizes are multiples of 2.
- Spacing is a multiple of 4.
- No fractional values in design tokens.
