import { site } from '../config/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          {site.service} {site.hours} ·{' '}
          <a href={site.phone.href}>{site.phone.display}</a>
        </p>
      </div>
    </footer>
  );
}
