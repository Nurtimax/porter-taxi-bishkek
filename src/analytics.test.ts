import { afterEach, beforeAll, expect, test, vi } from 'vitest';
import { trackContactClicks } from './analytics';

const gtag = vi.fn();

function clickLink(href: string, inner = 'link') {
  const link = document.createElement('a');
  link.href = href;
  link.innerHTML = `<span>${inner}</span>`;
  // jsdom cannot navigate; cancelling the default keeps the click itself intact.
  link.addEventListener('click', (event) => event.preventDefault());
  document.body.append(link);
  link.querySelector('span')!.click();
  link.remove();
}

beforeAll(() => {
  window.gtag = gtag;
  trackContactClicks();
});

afterEach(() => {
  gtag.mockClear();
});

test('reports a click on a phone link', () => {
  clickLink('tel:+996703214161');
  expect(gtag).toHaveBeenCalledWith('event', 'phone_click');
});

test('reports a click on a WhatsApp link', () => {
  clickLink('https://wa.me/996703214161?text=hello');
  expect(gtag).toHaveBeenCalledWith('event', 'whatsapp_click');
});

test('ignores other links', () => {
  clickLink('https://example.com/');
  expect(gtag).not.toHaveBeenCalled();
});
