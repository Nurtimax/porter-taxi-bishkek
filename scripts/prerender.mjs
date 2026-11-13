// Runs after `vite build`: renders <App /> to HTML and writes it into dist/index.html,
// so the page's text is in the HTML itself (search engines, link previews, no-JS visitors).
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = process.cwd();
const ssrDir = path.join(root, 'node_modules', '.prerender');
const indexFile = path.join(root, 'dist', 'index.html');
const placeholder = '<div id="root"></div>';

await build({
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: ssrDir,
    emptyOutDir: true,
    copyPublicDir: false,
  },
});

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const appHtml = render();

const html = await readFile(indexFile, 'utf8');
if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}
await writeFile(indexFile, html.replace(placeholder, `<div id="root">${appHtml}</div>`));
await rm(ssrDir, { recursive: true, force: true });

console.log(`prerender: wrote ${appHtml.length} bytes of page HTML into dist/index.html`);
