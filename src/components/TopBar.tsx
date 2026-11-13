import { site } from '../config/site';
import { HoursBadge } from './HoursBadge';
import { PhoneIcon } from './icons';
import { Wordmark } from './Wordmark';

export function TopBar() {
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Wordmark className="topbar__logo" />
        <div className="topbar__end">
          <a className="topbar__phone" href={site.phone.href}>
            <PhoneIcon className="topbar__phone-icon" />
            {site.phone.display}
          </a>
          <HoursBadge />
        </div>
      </div>
    </header>
  );
}
