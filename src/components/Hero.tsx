import { site } from '../config/site';
import { Wordmark } from './Wordmark';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 id="hero-title" className="hero__title">
            <Wordmark />
          </h1>
          <span className="swoosh" aria-hidden="true" />
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__lead">{site.lead}</p>
        </div>
        <div className="hero__media">
          <img
            className="hero__img"
            src="/img/tow-truck-1056.webp"
            srcSet="/img/tow-truck-640.webp 640w, /img/tow-truck-1056.webp 1056w"
            sizes="(min-width: 900px) 640px, 100vw"
            width={1056}
            height={640}
            alt="Эвакуатор в Бишкеке — оранжевый эвакуатор с платформой на трассе, позади горы"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
