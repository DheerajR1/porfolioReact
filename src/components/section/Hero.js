import React from "react";
import { identity, stats, ticker, social } from "../../profile";
import useCountUp from "../../hooks/useCountUp";

const Stat = ({ value, label }) => {
  const [ref, display] = useCountUp(value);
  return (
    <div className="stat">
      <span className="stat__value" ref={ref}>
        {display}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="hero__eyebrow" data-reveal>
              <span className="dot" /> {identity.location} — available for select work
            </p>

            <h1 className="hero__title" data-reveal>
              Dheeraj
              <span className="hero__title-em"> Rangarao</span>
            </h1>

            <p className="hero__role" data-reveal>
              {identity.role}
              <span className="hero__role-sub">{identity.tagline}</span>
            </p>

            <p className="hero__summary" data-reveal>
              {identity.summary}
            </p>

            <div className="hero__cta" data-reveal>
              <a href="#projects" className="btn btn--primary">
                View Work <i className="fas fa-arrow-right" />
              </a>
              <a href="#contact" className="btn btn--ghost">
                Get in Touch
              </a>
              <div className="hero__social">
                <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github" />
                </a>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin" />
                </a>
                <a href={social.email} aria-label="Email">
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero__photo" data-reveal>
            <div className="hero__photo-frame">
              <img src="profile.png" alt={identity.name} loading="eager" />
            </div>
            <span className="hero__photo-vtext" aria-hidden="true">
              Thinking outside the box
            </span>
            <figcaption className="hero__photo-cap">
              <span className="hero__photo-num">01</span>
              <span>{identity.role}, Samsung Research</span>
            </figcaption>
          </div>
        </div>

        <div className="hero__stats" data-reveal>
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...ticker, ...ticker].map((t, i) => (
            <span className="ticker__item" key={i}>
              {t}
              <span className="ticker__sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
