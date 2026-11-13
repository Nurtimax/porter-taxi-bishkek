import { site } from '../config/site';
import { PhoneIcon, WhatsAppIcon } from './icons';

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <h2 id="contact-title" className="section__title">
          {site.contact.heading}
        </h2>
        <a className="phone-pill" href={site.phone.href} aria-label={`Позвонить: ${site.phone.display}`}>
          <span className="phone-pill__icon">
            <PhoneIcon />
          </span>
          <span className="phone-pill__divider" aria-hidden="true" />
          <span className="phone-pill__number">{site.phone.display}</span>
        </a>
        <a className="btn btn--wa btn--block" href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="btn__icon" />
          {site.contact.whatsappLabel}
        </a>
        <p className="contact__note">{site.contact.note}</p>
      </div>
    </section>
  );
}
