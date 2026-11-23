# willow-landing

Vite + React site for Weeping Willow Whisperer LLC, plus static pages that ship beside the app. The canonical host in `index.html` and the journal is `https://weepingwillowwhisperer.ai`.

The app is not one router. React only owns `/` and `/nest`. Everything else under `public/` is a file Vite copies into `dist/` unchanged.

## Routes

| URL | Served by | Source |
| --- | --- | --- |
| `/` | React | `src/pages/Home.jsx`, styles in `src/home.css` |
| `/nest` | React | `src/pages/Nest.jsx`, styles in `src/styles.css` |
| `/journal/` | Static HTML | `public/journal/index.html` |
| `/journal/nobody-asks-the-willow/` | Static HTML | `public/journal/nobody-asks-the-willow/index.html` |
| `/studio/` | Static HTML | `public/studio/index.html` |
| `/samples/<pillar>/<file>.pdf` | Static file | `public/samples/` |

Routes are declared in `src/main.jsx`. There is no catch-all route. A React path with no `<Route>` renders an empty outlet.

## Homepage

`Home.jsx` is the five-pillar landing. Its root is `<div className="lp">`. `src/home.css` opens with that comment and prefixes its rules with `.lp`, so those rules do not restyle `/nest`.

In-page pillar anchors are `#nest`, `#academy`, `#wayfinder`, `#studio`, and `#workshop`. Each section sets `--accent` inline and links to two sample PDFs plus the full library at `https://willowpdf.com`. The second store link is `https://wwilloww.ai`.

`#studio` is the on-page Studio pillar. `/studio/` is a different page. `/nest` the anchor and `/nest` the tool are also different: the anchor is a section on `/`, the tool is the React route.

How each outbound link is written:

- `/` and `/nest` use React Router `<Link>`. Nest's "Visit the Nest page" is `<Link to="/nest">`.
- `/journal/`, `/journal/nobody-asks-the-willow/`, `/studio/`, and the PDFs use `<a href>`.

`styles.css` is imported from `main.jsx`, so it loads on every React route. It still styles the Nest page (`.nest-page`, `.willow-nav`, the slider) and sets `body` (bone background, grain overlay). New landing rules go in `home.css` under `.lp`. The `.lp` block paints its own ground over that body background.

## Nest tool

`/nest` is a pointer slider. `STATES` in `Nest.jsx` maps position `0–100` to three inclusive ranges, and the first match wins:

| Position | State |
| --- | --- |
| 0–33 | Survival |
| 33–67 | Calibrated Vigilance |
| 67–100 | True Regulation |

The shared edges belong to the earlier state: `33` is Survival, `67` is Calibrated Vigilance. The control starts at `45`. Arrow keys move it by 2. The track is `role="slider"`.

## Journal

Both journal pages are self-contained HTML. They do not load `home.css` or `styles.css`. They set their own canonical URL, and Essay No. 01 adds Article JSON-LD (`datePublished` `2026-10-29` in that script).

Color follows `prefers-color-scheme`. The CSS also honors `data-theme="light"` or `data-theme="dark"` on the root element. The pages do not set that attribute, and there is no theme switch in the markup.

To add an essay:

1. Add `public/journal/<slug>/index.html`. Copy the essay page's head, mast, and footer, then set its canonical URL and JSON-LD to the new path.
2. Add a list item on `public/journal/index.html`.
3. Link it from `Home.jsx` only when it should appear on the landing. Use `<a href="/journal/<slug>/">`.

## Studio

`/studio/` is an older static page the landing links to and does not restyle. It has its own CSS and fonts (Cormorant Garamond and Jost), a light palette only, and no canonical link. In-page sections are `#philosophy`, `#principles`, and `#approach`. The logo links back to `/`.

## Sample PDFs

Two finished samples per pillar, downloaded with the `download` attribute. This repo does not build them. The card title, "2 of N pages", and blurb live in `Home.jsx` beside the `href`. Replacing a PDF without editing that card leaves the landing describing a different file.

```
public/samples/<pillar>/WIL-<CODE>-<TYPE>-<NNN>-SAMPLE-<slug>.pdf
```

| Pillar | Folder | Code | Files |
| --- | --- | --- | --- |
| Nest | `nest` | `NES` | `WIL-NES-TKT-008-SAMPLE-asking.pdf`, `WIL-NES-GDE-006-SAMPLE-the-low-energy-house.pdf` |
| Academy | `academy` | `ACA` | `WIL-ACA-TRK-004-SAMPLE-the-low-capacity-semester.pdf`, `WIL-ACA-TKT-005-SAMPLE-email-scripts-for-students.pdf` |
| Wayfinder | `wayfinder` | `WYF` | `WIL-WYF-GDE-007-SAMPLE-the-waiting.pdf`, `WIL-WYF-GDE-009-SAMPLE-expected-to-stay.pdf` |
| Studio | `studio` | `STD` | `WIL-STD-WBK-001-SAMPLE-what-you-actually-offer.pdf`, `WIL-STD-GDE-003-SAMPLE-pricing-without-apology.pdf` |
| Workshop | `workshop` | `WRK` | `WIL-WRK-GDE-001-SAMPLE-prompting-for-people-who-already-think.pdf`, `WIL-WRK-GDE-003-SAMPLE-writing-in-two-voices.pdf` |

`TYPE` in the current set is `GDE`, `TKT`, `TRK`, or `WBK`. Keep a new file on that pattern so the pillar folder and the code in the filename still match.

## Local

```bash
npm install
npm run dev
```

`npm run dev` serves the React app, and it serves a file in `public/` only at its full path. These work: `/`, `/nest`, `/journal/index.html`, `/studio/index.html`, `/journal/nobody-asks-the-willow/index.html`, and a sample PDF. `/journal/` and `/studio/` do not. The dev server has no directory index, so those URLs fall through to the React shell, which has no matching route, and the page is blank. The homepage links use the trailing-slash form, so "Journal" and "Visit the Studio page" look broken until you preview a build.

```bash
npm run build    # writes dist/
npm run preview
```

Preview matches the published shape: `/journal/` and `/studio/` (trailing slash) serve the static pages. `/journal` and `/studio` without the slash still hit the React shell.

## Netlify

Build command: `npm run build`. Publish directory: `dist`.

`netlify.toml` rewrites `/*` to `/index.html` with status 200 and does not set `force`. A 200 rewrite without `force` applies when no published file matches, so the files under `dist/journal/`, `dist/studio/`, and `dist/samples/` stay static. `/nest` has no file, so the rewrite loads the SPA and React Router renders `Nest`. Keep the trailing slash: the published file is `index.html` inside the directory, which is the URL `vite preview` serves.

## Pitfalls

- Do not point `<Link>` at `/journal/`, `/studio/`, or a PDF. Client-side navigation never requests the file, and there is no matching `<Route>`, so the outlet is blank. Use `<a href>`. `<Link>` is only for `/` and `/nest`.
- Keep the trailing slash. `/journal/` is the static page on preview and on Netlify. `/journal` is the empty React shell. Same for Studio.
- In `npm run dev`, open `/journal/index.html` and `/studio/index.html`. The trailing-slash URLs the homepage uses are blank in dev.
- Do not add landing rules to `styles.css` without an `.lp` (or `.nest-page`) scope. That file is global on React routes.
- The pillar nav label Studio (`#studio` on `/`) and the URL `/studio/` are different targets. Same for the Nest anchor and the Nest tool.
- The root `index.html` `<title>` and canonical cover the React shell only. Journal pages set their own. Studio sets a title and Open Graph tags and does not set a canonical URL.
