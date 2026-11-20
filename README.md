# ninavoytovych.com

Portfolio site of Nina Voytovych, product designer. Live at
[ninavoytovych.com](https://ninavoytovych.com), served from this repository
by GitHub Pages.

The repository holds the published output. The site is generated from a
source project that is kept private, because it also carries case material
that is under NDA.

## What is here

| Path | What it is |
| --- | --- |
| `index.html` | Home: hero, project map, selected work, about, media, testimonials, contact |
| `work/index.html` | All projects |
| `work/<slug>.html` | Case pages |
| `ua/`, `it/` | Full Ukrainian and Italian versions of every page |
| `assets/css/site.css` | The design system: tokens, type scale, grid, components |
| `assets/css/case-blocks.css` | Case-specific blocks: decision cards, state galleries, screens |
| `assets/js/` | Project map, 3D map, case prototypes, scroll behaviour |
| `assets/fonts/` | Geologica, Inter and IBM Plex Mono, self-hosted as woff2 |
| `assets/cases/`, `assets/covers/` | Case imagery and covers, WebP |

Every page exists in three languages. Translation is not a per-page copy:
one English source is generated, then a dictionary rewrites the strings for
Ukrainian and Italian, so a change to a case propagates to all three.

## The system

**Grid.** Six columns of 224 px with 1344 px of content centred in a 1440 px
page. Section labels sit in the left margin; content starts at the second
module line. The same grid governs case pages, so blocks from different
cases line up with each other.

**Type.** Geologica for display and headings, Inter for body text, IBM Plex
Mono for labels, dates and figures. Sizes are multiples of two, spacing is a
multiple of four, and design tokens carry no fractional values.

**Colour.** Tokens in `site.css` (`--ink`, `--t1`…`--t3`, `--line`,
`--accent`) rather than literal values, so contrast is set in one place.

**Covers.** 1320×824 for card covers, 2688×1168 for the wide cards.
Images carry a content hash in the query string; CSS is versioned the same
way, so a deploy never serves a stale stylesheet.

## Accessibility

- One `h1` per page and no skipped heading levels.
- Every image carries alt text; decorative images are hidden from assistive
  technology.
- Checked for horizontal overflow across twelve pages, three languages and
  three viewport widths.
- Motion and reveal animations are decoration only: the page reads with
  JavaScript disabled.

## Running it locally

The published site is static, so any static server will do:

```sh
python3 -m http.server 8810
```

Then open `http://localhost:8810`.

## How it was built

See [AI-WORKFLOW.md](AI-WORKFLOW.md) for what was built with which tools.
