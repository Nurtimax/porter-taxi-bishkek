import type { ReactNode } from 'react';
import { site } from '../config/site';
import { BoltIcon, ClockIcon, MapPinIcon, PinIcon, TagIcon } from './icons';

function Item({ icon, title, children }: { icon: ReactNode; title: string; children?: ReactNode }) {
  return (
    <li className="cond">
      <span className="cond__icon">{icon}</span>
      <div className="cond__body">
        <h3 className="cond__title">{title}</h3>
        {children}
      </div>
    </li>
  );
}

export function Conditions() {
  const c = site.conditions;
  return (
    <section className="section" aria-labelledby="conditions-title">
      <div className="container">
        <h2 id="conditions-title" className="section__title">
          {c.heading}
        </h2>
        <ul className="conds">
          <Item icon={<ClockIcon />} title={c.hours.title}>
            <p className="cond__text">{c.hours.text}</p>
          </Item>
          <Item icon={<BoltIcon />} title={site.values.join(' · ')} />
          <Item icon={<MapPinIcon />} title={c.coverage.title}>
            <ul className="chips" aria-label="Города">
              {site.cities.map((city) => (
                <li key={city} className="chip">
                  <PinIcon className="chip__pin" />
                  {city}
                </li>
              ))}
              <li className="chip chip--tail">{site.citiesTail}</li>
            </ul>
          </Item>
          <Item icon={<TagIcon />} title={c.price.title}>
            <p className="cond__text">{c.price.text}</p>
          </Item>
        </ul>
      </div>
    </section>
  );
}
