import React from "react";
import { skillGroups } from "../../profile";
import SectionStage from "../layouts/SectionStage";

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="section__head" data-reveal>
        <SectionStage variant="skills" />
        <span className="section__index">04</span>
        <h2 className="section__title">Skills & Stack</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className="skill-card" key={g.title} data-reveal>
            <div className="skill-card__head">
              <i className={g.icon} />
              <h3>{g.title}</h3>
            </div>
            <div className="skill-card__items">
              {g.items.map((it) => (
                <span key={it} className="stack-chip">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
