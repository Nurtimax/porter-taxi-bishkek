// Reports clicks on the phone and WhatsApp links to the Google tag loaded in index.html.

type ContactKind = 'phone' | 'whatsapp';

/**
 * Google Ads conversion actions, one per kind of contact.
 *
 * Create each one in Google Ads (Goals → Conversions → New conversion action → Website,
 * tracked on "Click") and paste the `send_to` value from its event snippet here,
 * e.g. 'AW-123456789/AbC-dEfGhIjKlMnOp'.
 *
 * While a value is empty the click is still sent as a plain event (`phone_click`,
 * `whatsapp_click`), but Google Ads does not count it as a conversion.
 */
const conversionSendTo: Record<ContactKind, string> = {
  phone: '',
  whatsapp: '',
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function contactKind(link: HTMLAnchorElement): ContactKind | null {
  if (link.protocol === 'tel:') return 'phone';
  if (link.hostname === 'wa.me') return 'whatsapp';
  return null;
}

function onClick(event: MouseEvent) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest('a');
  const kind = link && contactKind(link);
  if (!kind) return;

  window.gtag?.('event', `${kind}_click`);
  const sendTo = conversionSendTo[kind];
  if (sendTo) window.gtag?.('event', 'conversion', { send_to: sendTo });
}

/** One listener for the whole page, so every phone and WhatsApp link is covered. */
export function trackContactClicks() {
  document.addEventListener('click', onClick);
}
