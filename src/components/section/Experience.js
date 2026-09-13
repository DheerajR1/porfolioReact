import React from "react";
import { experience } from "../../profile";
import SectionStage from "../layouts/SectionStage";

const Experience = () => {
  return (
    <section id="experience" className="section section--alt">
      <div className="section__head" data-reveal>
        <SectionStage variant="experience" />
        <span className="section__index">02</span>
        <h2 className="section__title">Experience</h2>
      </div>

      <div className="timeline">
        {experience.map((job) => (
          <article className="tl-item" key={job.company + job.period} data-reveal>
            <div className="tl-marker">
              <span className={`tl-dot ${job.current ? "tl-dot--live" : ""}`} />
            </div>
            <div className="tl-card">
              <div className="tl-card__head">
                <div>
                  <h3 className="tl-role">{job.role}</h3>
                  <p className="tl-company">{job.company}</p>
                </div>
                <span className="tl-period">{job.period}</span>
              </div>
              <ul className="tl-points">
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              {job.awards && (
                <p className="tl-awards">
                  <i className="fas fa-award" /> {job.awards}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
