import React from "react";
import { publications } from "../../profile";
import SectionStage from "../layouts/SectionStage";

const Publications = () => {
  const { papers, education } = publications;
  return (
    <section id="publications" className="section section--alt">
      <div className="section__head" data-reveal>
        <SectionStage variant="publications" />
        <span className="section__index">06</span>
        <h2 className="section__title">Publications & Education</h2>
      </div>

      <div className="pub-grid">
        <div className="pub-col" data-reveal>
          <h3 className="subsection-title">Research Papers</h3>
          {papers.map((p) => (
            <div className="pub-item" key={p.title}>
              <i className="fas fa-file-lines" />
              <div>
                <p className="pub-item__title">{p.title}</p>
                <p className="pub-item__venue">{p.venue}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pub-col" data-reveal>
          <h3 className="subsection-title">Education</h3>
          <div className="pub-item">
            <i className="fas fa-graduation-cap" />
            <div>
              <p className="pub-item__title">{education.degree}</p>
              <p className="pub-item__venue">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
