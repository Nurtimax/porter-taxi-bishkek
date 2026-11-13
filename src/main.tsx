import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { trackContactClicks } from './analytics';

trackContactClicks();

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships the page's HTML inside #root (see scripts/prerender.mjs);
// the dev server serves it empty.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

// Analytics only, so it is fetched as a separate chunk and never delays the page itself.
void import('./firebase');
