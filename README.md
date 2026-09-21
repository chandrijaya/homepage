# chandrijaya.github.io/homepage

Personal site for Chandra Aldiwijaya. Three static pages, no build step, no
framework, no dependencies to install.

```
index.html          home: hero, career keyboard, astronomy, skills
contact.html        contact details
portfolio.html      case studies in preparation
assets/css/style.css
assets/js/keys.js   career keyboard only; the page works without it
assets/img/         put portrait.jpg here
```

## Deploy to GitHub Pages

Push these files to the root of the `homepage` repository, then in the
repository settings open **Pages** and set the source to **Deploy from a
branch**, branch `master`, folder `/ (root)`. The site appears at
`https://chandrijaya.github.io/homepage/` within a minute or two.

Paths are all relative, so the site also works from a subfolder or a custom
domain without changes.

## Adding your photo

1. Save a portrait as `assets/img/portrait.jpg`. Portrait orientation, 3:4,
   at least 900 x 1200 pixels.
2. Open `index.html` and find the block marked `PHOTO GOES HERE`.
3. Uncomment the `<img>` line and delete the `<div class="portrait__empty">`
   block underneath it.
4. Change or remove the `<figcaption>` text.

Until then the frame shows a faint key pattern and the caption
"Photograph to follow", which is a deliberate placeholder rather than a
broken image.

## The design

Black and white, from a piano.

- **Fallboard.** The dark band at the top of every page is the closed lid,
  with the name engraved on it the way a maker's name sits on a real
  fallboard. Scrolling past it opens onto the ivory page below.
- **The keyboard.** The career section is a keyboard. Four white keys, one per
  role, ascending left to right like pitch. The two black keys sit at the
  joints where a promotion happened, because accidentals are the steps between
  naturals. There is deliberately no black key between Swawiyata Sibernetika
  and PT. Bagi Kopi Indonesia: that was a change of employer, not a promotion.
  Keys depress on hover and stay down when selected.
- **Felt.** The one colour in the palette is the deep red of the felt strip
  that sits above the keys. It appears on the felt itself, on the promotion
  badge, and on focus outlines. Nowhere else.

Accessibility: the keyboard is a real ARIA tab list, navigable with arrow keys,
Home and End. Focus outlines are visible. Nothing is conveyed by hover alone.
`prefers-reduced-motion` turns off every animation.

## Licences

Everything here is either original or openly licensed.

| Asset | Source | Licence |
|---|---|---|
| Bodoni Moda | Google Fonts | SIL Open Font License 1.1 |
| Jost | Google Fonts | SIL Open Font License 1.1 |
| JetBrains Mono | Google Fonts | SIL Open Font License 1.1 |
| Keyboard, felt strip, key pattern, all other graphics | drawn in CSS for this site | yours |

There are no third-party images, icon fonts, CSS frameworks or JavaScript
libraries, so there is nothing else to attribute and no commercial-use
restrictions to check.

Fonts load from `fonts.googleapis.com`. To remove that dependency, download the
three families from [fontsource.org](https://fontsource.org) into
`assets/fonts/`, replace the `<link>` tags in each HTML file with your own
`@font-face` rules, and keep the OFL licence file alongside them.

## Local preview

```bash
python -m http.server 4173 --directory .
```

Then open `http://localhost:4173`.
