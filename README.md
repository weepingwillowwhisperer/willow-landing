# willow-landing

Vite + React landing for Weeping Willow Whisperer LLC.

## Routes

- `/` — Home
- `/nest` — Nest pillar with interactive nervous system gradient

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/`

## Netlify

Build command: `npm run build`
Publish directory: `dist`

`netlify.toml` handles the SPA redirect so `/nest` resolves on direct load.
