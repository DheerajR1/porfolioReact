import React from "react";
import { projects, sideProjects } from "../../profile";
import SectionStage from "../layouts/SectionStage";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section__head" data-reveal>
        <SectionStage variant="projects" />
        <span className="section__index">03</span>
        <h2 className="section__title">Featured Projects</h2>
      </div>

      <div className="proj-grid">
        {projects.map((p) => (
          <article className="proj-card" key={p.name} data-reveal>
            <div className="proj-card__top">
              <span className="proj-card__tag">{p.tag}</span>
            </div>
            <h3 className="proj-card__name">{p.name}</h3>
            <p className="proj-card__sub">{p.subtitle}</p>
            <p className="proj-card__blurb">{p.blurb}</p>

            <div className="proj-card__metrics">
              {p.metrics.map((m) => (
                <span key={m} className="metric-pill">
                  {m}
                </span>
              ))}
            </div>

            <div className="proj-card__stack">
              {p.stack.map((s) => (
                <span key={s} className="stack-chip">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h3 className="subsection-title" data-reveal>
        Also built
      </h3>
      <div className="side-grid">
        {sideProjects.map((p) => {
          const Wrapper = p.url ? "a" : "div";
          const linkProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              className={`side-card ${p.url ? "side-card--link" : ""}`}
              key={p.name}
              data-reveal
              {...linkProps}
            >
              <div className="side-card__head">
                <h4>{p.name}</h4>
                {p.url && <i className="fas fa-arrow-up-right-from-square" />}
              </div>
              <p className="side-card__blurb">{p.blurb}</p>
              <div className="proj-card__stack">
                {p.stack.map((s) => (
                  <span key={s} className="stack-chip">
                    {s}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
