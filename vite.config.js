import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { PAGES, NOT_FOUND, canonical } from './src/seo-pages.js'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Swap the page-specific tags in the built index.html.
function withMeta(html, { url, title, description, ogDescription, noindex }) {
  const set = (re, value) => {
    if (!re.test(html)) throw new Error(`seo-pages: tag not found for ${re}`)
    html = html.replace(re, `$1${esc(value)}$2`)
  }
  set(/(<title>)[^<]*(<\/title>)/, title)
  set(/(<meta name="description" content=")[^"]*(")/, description)
  set(/(<meta property="og:title" content=")[^"]*(")/, title)
  set(/(<meta name="twitter:title" content=")[^"]*(")/, title)
  set(/(<meta property="og:description" content=")[^"]*(")/, ogDescription || description)
  set(/(<meta name="twitter:description" content=")[^"]*(")/, ogDescription || description)
  if (noindex) {
    set(/(<meta name="robots" content=")[^"]*(")/, 'noindex, follow')
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '').replace(/\s*<meta property="og:url"[^>]*>/, '')
  } else {
    set(/(<link rel="canonical" href=")[^"]*(")/, url)
    set(/(<meta property="og:url" content=")[^"]*(")/, url)
  }
  return html
}

// After the build, write a static HTML entry per route plus a 404 page.
function seoPages() {
  let outDir
  return {
    name: 'willow-seo-pages',
    apply: 'build',
    configResolved(c) { outDir = path.resolve(c.root, c.build.outDir) },
    closeBundle() {
      const shell = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      for (const [route, meta] of Object.entries(PAGES)) {
        const file = path.join(outDir, route, 'index.html')
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, withMeta(shell, { url: canonical(route), ...meta }))
      }
      fs.writeFileSync(path.join(outDir, '404.html'), withMeta(shell, { ...NOT_FOUND, noindex: true }))
    },
  }
}

export default defineConfig({
  plugins: [react(), seoPages()],
})
