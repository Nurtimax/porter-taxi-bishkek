import { site } from '../config/site';
import { PhoneIcon, WhatsAppIcon } from './icons';

/** Sticky call / WhatsApp bar, shown on phones only (see app.css). */
export function ActionBar() {
  return (
    <nav className="actionbar" aria-label="Быстрая связь">
      <a className="btn btn--call" href={site.phone.href}>
        <PhoneIcon className="btn__icon" />
        Позвонить
      </a>
      <a className="btn btn--wa" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="btn__icon" />
        WhatsApp
      </a>
    </nav>
  );
}
