# chandrijaya.github.io/homepage

Personal site for Chandra Aldiwijaya. Three static pages, no build step, no
framework, no dependencies to install.

```
index.html          home: hero, career keyboard, astronomy, skills
contact.html        contact details
portfolio.html      case studies in preparation
assets/css/style.css
assets/js/keys.js   career keyboard only; the page works without it
assets/img/         portrait.jpg (hero), piano.jpg (original)
```

## Deploy to GitHub Pages

Push these files to the root of the `homepage` repository, then in the
repository settings open **Pages** and set the source to **Deploy from a
branch**, branch `master`, folder `/ (root)`. The site appears at
`https://chandrijaya.github.io/homepage/` within a minute or two.

Paths are all relative, so the site also works from a subfolder or a custom
domain without changes.

## The photo

`assets/img/portrait.jpg` is the hero image: 1200 x 1600, cropped 3:4 and
desaturated so it sits with the rest of the palette. `assets/img/piano.jpg` is
the untouched 3000 x 4000 original it came from.

To swap in a different photo, replace `portrait.jpg` with another 3:4 image
and update the `alt` text and `<figcaption>` in `index.html`. The CSS uses
`object-fit: cover`, so a slightly different ratio will still fill the frame
without distorting.

To regenerate the crop from the original with different framing:

```python
from PIL import Image, ImageOps
im = Image.open("assets/img/piano.jpg")                 # 3000 x 4000
c  = im.crop((700, 1120, 2750, 3853)).resize((1200, 1600), Image.LANCZOS)
g  = ImageOps.autocontrast(ImageOps.grayscale(c), cutoff=1)
g.convert("RGB").save("assets/img/portrait.jpg", quality=88, optimize=True)
```

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
| Keyboard, felt strip, all other graphics | drawn in CSS for this site | yours |
| portrait.jpg, piano.jpg | your own photograph | yours |

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
