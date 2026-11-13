import { site } from '../config/site';
import { ClockIcon } from './icons';

export function HoursBadge() {
  return (
    <span className="badge" title="Работаем круглосуточно">
      <ClockIcon className="badge__icon" />
      {site.hours}
    </span>
  );
}
