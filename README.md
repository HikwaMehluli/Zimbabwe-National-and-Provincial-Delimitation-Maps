# Zimbabwe National & Provincial Delimitation Maps

Interactive SVG maps of Zimbabwe's 10 provinces with detailed ward boundaries. I created this project demo to showcase the practical use of interactive SVG graphics in websites and web apps. This allowed me to upscale my creative technoligist services to local and some international clients.

**View Live Demo:** https://hikwamehluli.github.io/Zimbabwe-National-and-Provincial-Delimitation-Maps

Real world examples of websites in Zimbabwe with interactive SVG's:
- [Graylands Park](https://www.graylandspark.co.zw/stands)
- [Northgate Estates](https://portal.northgateestates.co.zw)

## Features

- **National overview** — Zoomable SVG map of all 10 provinces on `index.html`
- **Coat of arms** — Zimbabwe coat of arms logo in the header of every page
- **Per-province pages** — Detailed ward boundaries for each province with breadcrumb navigation
- **Pan & zoom** — Drag to pan, buttons to zoom in/out/reset
- **Tooltips** — Hover over any region to see its name (powered by TippyJS)
- **Touch-friendly** — Pinch-to-zoom and pan on mobile

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

- **Pure static site** — No build tools required for viewing. Open `.html` files directly in a browser.
- **SVG maps** — All map coordinates are inline `<polyline points="...">` in the HTML (no external data files)
- **Libraries** (bundled into `dist/js/app.js` via webpack):
  - `svg-pan-zoom` — Pan and zoom controls
  - `TippyJS` + `Popper.js` — Tooltip popups
- **Fonts**: Roboto + Pliant via Google Fonts
- **Build tools**: Sass (SCSS → CSS), Webpack (JS bundling + CSS inlining)

### Setup & scripts

```bash
npm install
```

| Script | Command | What it does |
|--------|---------|-------------|
| `npm run css-dev` | `sass --no-source-map --watch src/scss/_entry.scss:dist/css/app.css` | Compile SCSS → CSS (expanded output, watch mode) |
| `npm run css-prod` | `sass --no-source-map --watch src/scss/_entry.scss:dist/css/app.css --style compressed` | Compile SCSS → CSS (minified, watch mode) |
| `npm run js-dev` | `webpack --mode development --watch` | Bundle JS (development mode, watch for changes) |
| `npm run js-prod` | `webpack --mode production --watch` | Bundle JS (production/minified, watch for changes) |
| `npm run start:public` | `http-server -c-1` | Serve files locally at `http://localhost:8080` (no caching) |
| `npm run start:root` | `http-server . -c-1` | Same as above, explicit `.` root directory |

**dependencies:** `tippy.js` (tooltip library)

**devDependencies:**
| Package | Purpose |
|---------|---------|
| `http-server` | Local dev server with no caching |
| `sass` | SCSS → CSS compiler |
| `webpack` + `webpack-cli` | JS bundler — bundles `src/js/_entry.js` and its imports into `dist/js/app.js` |
| `css-loader` + `style-loader` | Webpack loaders — inline `tippy.js/dist/tippy.css` into the JS bundle as `<style>` tags |

### JS compilation pipeline

1. **Entry point:** `src/js/_entry.js`
2. **Webpack** resolves bare imports (`popper.min.js`, `svg-pan-zoom.min.js`) from `src/js/`, and npm imports (`tippy.js`) from `node_modules/`
3. **CSS imports** (e.g. `tippy.js/dist/tippy.css`) are inlined into the bundle via `style-loader` + `css-loader`
4. **Output:** a single `dist/js/app.js` loaded by all HTML pages

Run `npm run js-dev` (development, unminified) or `npm run js-prod` (production, minified).

## Project structure

```
├── index.html              National overview map
├── {province}.html          10 per-province ward maps
├── dist/
│   ├── img/
│   │   └── zimbabwe_coat_of_arms.svg  Logo in every page header
│   ├── js/
│   │   └── app.js           Webpack-bundled JS (tippy.js, Popper, svg-pan-zoom + init code)
│   ├── css/
│   │   └── app.css          Compiled SCSS stylesheet
│   └── font/                Custom icon font (interactive-map)
├── src/
│   ├── js/
│   │   ├── _entry.js        Webpack entry point
│   │   ├── popper.min.js    Vendored Popper.js
│   │   ├── svg-pan-zoom.min.js
│   │   └── tippy.min.js
│   └── scss/                SCSS source files
│       ├── _entry.scss      Entry point — imports all partials
│       ├── style.scss       Map colours, layout, typography
│       ├── breadcrumb.scss  Breadcrumb navigation styles
│       └── icons-map.scss   Icon font @font-face + classes
├── webpack.config.js        Webpack bundler configuration
├── package.json             Build scripts, dependencies, devDependencies
└── .gitignore
```

## Styling

Map colours are controlled via CSS custom properties defined in `src/scss/style.scss` (compiled to `dist/css/app.css`):

| Variable | Default | Purpose |
|----------|---------|---------|
| `--bg-color` | `#d1d3be` | Page background |
| `--color-active` | `#a8a965` | Fill colour of regions |
| `--color-hover` | `#5f6035` | Hover colour |
| `--color-stroke` | `black` | Stroke outline colour |

### Header logo

Every page header displays **Zimbabwe's coat of arms** (`dist/img/zimbabwe_coat_of_arms.svg`). It sits inside a `<span>` alongside the page `<h1>`, linked to `index.html`. Styled in `src/scss/style.scss`:

- **Default:** 200px wide, floated left with 10px padding-right
- **Mobile (<768px):** 150px wide (responsive media query)

### Rebuilding CSS

```bash
npm run css-dev    # watch mode, expanded output
npm run css-prod   # watch mode, compressed output
```

## Map Version

Maps are based on the 2022-2023 delimitation exercise.

## Contact

If you have any Questions or Need help expanding on this, hit me up!

[Website](https://thatafro.netlify.app/) | [X Twitter](https://x.com/HikwaMehluli) | [Instagram](https://www.instagram.com/thatafro)
