# Runxi Shen — personal homepage

Personal site of **Runxi Shen**, computational biologist — Research Assistant
Professor at Purdue University and co-PI of the
[Carpenter–Shen Lab](https://carpentershenlab.org).

A single-page, static site with a cyber-inspired aesthetic — light by default
with a ☾ toggle to dark neon-green on deep blue-black. Built for a general
audience: sticky navigation, headshot-led hero, plain-language sections.

- Live: **https://runxi-shen.github.io/homepage/** (once Pages is enabled)
- Formal sibling: [CV](https://runxi-shen.github.io/cv/) · [Lab site](https://carpentershenlab.org)

## Files

| File           | Purpose                                              |
| -------------- | ---------------------------------------------------- |
| `index.html`   | The whole site — hero, about, experience, research, papers, talks, projects, contact |
| `style.css`    | Dark/light themes, layout, cyber details (grid, glow, ticker) |
| `script.js`    | Theme toggle, scroll reveal, header elevation        |
| `headshot.jpg` | Web-optimized headshot (900×900)                     |
| `404.html`     | Custom not-found page                                |

No build step, no framework, no dependencies (fonts: Space Grotesk, Inter,
JetBrains Mono via Google Fonts, with system fallbacks).

## Local development

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

or just open `index.html` in a browser.

## Deploy to GitHub Pages

1. Push this repo to GitHub as `runxi-shen/homepage` (already done).
2. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy
   from a branch" → Branch: `main`, folder: `/ (root)`** → Save.
3. The site appears at `https://runxi-shen.github.io/homepage/`.

All links and assets are relative, so the `/homepage/` base path works without
config. The `og:image` is served from `/homepage/og-image.png`.

## Editing content

Everything is hand-written HTML in `index.html`:

- **Hero** — tagline, intro, CTA buttons, and the stats row (`30+ drug
  programs`, `4 consortia`, …) live at the top of the file.
- **NOW / Beyond the bench** — the list under `[ 06 ]` is meant to change
  often; edit freely.
- **Photo** — replace `headshot.jpg` (keep the same filename, square-ish works
  best). The "Beyond the bench" panel shows `fishing.jpg` — swap in another
  shot by replacing that file or editing the `<img>` in `index.html`.
- **Theme default** — the `<html data-theme="light">` attribute controls the
  default; the ☾ button flips to dark and remembers the choice in
  `localStorage` (key `runxi-theme`, shared with the 404 page).

## License

MIT © 2026 Runxi Shen
