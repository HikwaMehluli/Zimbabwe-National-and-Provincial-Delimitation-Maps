# Zimbabwe National & Provincial Delimitation Maps

Interactive SVG maps of Zimbabwe's 10 provinces with detailed ward boundaries. This prject is a demonstration of the practical use of interactive SVG graphics in websites and web apps.

**View Live Demo:** https://hikwamehluli.github.io/Zimbabwe-National-and-Provincial-Delimitation-Maps

Real world examples of websites in Zimbabwe which interactive SVG's:
- [Graylands Park](https://www.graylandspark.co.zw/stands)
- [Northgate Estates](https://portal.northgateestates.co.zw)

## Features

- :earth_africa: **National overview** — Zoomable SVG map of all 10 provinces on `index.html`
- :city_sunset: **Per-province pages** — Detailed ward boundaries for each province
- :mag: **Pan & zoom** — Drag to pan, buttons to zoom in/out/reset
- :speech_balloon: **Tooltips** — Hover over any region to see its name (powered by TippyJS)
- :handshake: **Touch-friendly** — Pinch-to-zoom and pan on mobile

## Map index

| Page | Description |
|------|-------------|
| `index.html` | National view — all 10 provinces |
| `bulawayo.html` | Bulawayo wards |
| `harare.html` | Harare wards |
| `manicaland.html` | Manicaland wards |
| `mashonaland-central.html` | Mashonaland Central wards |
| `mashonaland-east.html` | Mashonaland East wards |
| `mashonaland-west.html` | Mashonaland West wards |
| `masvingo.html` | Masvingo wards |
| `matebeleland-north.html` | Matabeleland North wards |
| `matebeleland-south.html` | Matabeleland South wards |
| `midlands.html` | Midlands wards |

## Technical stack

- **Pure static site** — No build tools, no server, no framework. Open `.html` files directly in a browser.
- **SVG maps** — All map coordinates are inline `<polyline points="...">` in the HTML (no external data files)
- **Libraries** (vendored in `js/`):
  - `svg-pan-zoom` — Pan and zoom controls
  - `TippyJS` + `Popper.js` — Tooltip popups
- **Font**: Roboto via Google Fonts

## Project structure

```
css/
  style.css       — Map colors, layout, typography
  icons-map.css   — Icon font styles
font/             — Icon font files
js/
  popper.min.js
  tippy.min.js
  svg-pan-zoom.min.js
  script.js       — Initializes pan/zoom and tooltips
*.html            — 11 HTML pages (1 national + 10 provincial)
```

## Styling

Map colours are controlled via CSS custom properties in `css/style.css`:

| Variable | Default | Purpose |
|----------|---------|---------|
| `--color-active` | `#a8a965` | Fill colour of regions |
| `--color-hover` | `#5f6035` | Hover colour |
| `--color-stroke` | `black` | Stroke outline colour |

## Map Version

Maps are based on the 2022-2023 delimitation exercise.

## Contact

If you have any Questions or Need help expanding on this, hit me up!

[Website](https://thatafro.netlify.app/) | [X Twitter](https://x.com/HikwaMehluli) | [Instagram](https://www.instagram.com/thatafro)
