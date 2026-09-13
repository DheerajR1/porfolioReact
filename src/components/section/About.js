import React from "react";
import { about } from "../../profile";
import SectionStage from "../layouts/SectionStage";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section__head" data-reveal>
        <SectionStage variant="about" />
        <span className="section__index">01</span>
        <h2 className="section__title">About</h2>
      </div>

      <div className="about">
        <div className="about__body" data-reveal>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="about__highlights" data-reveal>
          {about.highlights.map((h) => (
            <li key={h}>
              <i className="fas fa-check" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
