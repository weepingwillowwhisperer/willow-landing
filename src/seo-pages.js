// Per-route head tags. The build writes a static copy of index.html for each
// entry below (dist/<path>/index.html), so crawlers and link previews see the
// right title and description without running JavaScript. The app also uses
// this list to update document.title during in-app navigation.

const SITE = 'https://weepingwillowwhisperer.ai'

export const PAGES = {
  '/': {
    title: 'Willow — Guides for how your mind actually works',
    description:
      'Willow builds guides, workbooks and toolkits across five pillars: Nest, Academy, Wayfinder, Studio and Workshop. Read two pages from each, free, with no email or checkout.',
  },
  '/nest/': {
    title: 'Willow Nest — Reduce the noise first',
    description:
      'Nothing works if everything is loud. Willow Nest is stabilization before growth, with an interactive map of three nervous system states: survival, calibrated vigilance and true regulation.',
    ogDescription:
      'Nothing works if everything is loud. Find where you are on the map: survival, calibrated vigilance, true regulation.',
  },
}

export const NOT_FOUND = {
  title: 'Page not found — Willow',
  description: 'This page does not exist. The Willow home page lists every pillar and the free samples.',
}

export const canonical = (path) => SITE + path

export function titleFor(pathname) {
  const key = pathname.endsWith('/') ? pathname : pathname + '/'
  return (PAGES[key] || NOT_FOUND).title
}
