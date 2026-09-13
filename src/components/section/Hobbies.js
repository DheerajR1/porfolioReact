import React, { useState } from "react";
import { hobbies } from "../../profile";
import SectionStage from "../layouts/SectionStage";

const HobbyTile = ({ title, blurb, image, span, url }) => {
  const [failed, setFailed] = useState(false);
  const showImg = image && !failed;

  const Tag = url ? "a" : "figure";
  const linkProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      className={`hobby ${span === "wide" ? "hobby--wide" : ""} ${
        url ? "hobby--link" : ""
      }`}
      data-reveal
      {...linkProps}
    >
      <div className="hobby__media">
        {showImg ? (
          <img src={image} alt={title} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <div className="hobby__placeholder">
            <i className="fas fa-camera" />
            <span>add image</span>
          </div>
        )}
        {url && (
          <span className="hobby__open">
            <i className="fab fa-instagram" /> View
            <i className="fas fa-arrow-up-right-from-square" />
          </span>
        )}
      </div>
      <figcaption className="hobby__cap">
        <h3>{title}</h3>
        <p>{blurb}</p>
      </figcaption>
    </Tag>
  );
};

const Hobbies = () => {
  return (
    <section id="hobbies" className="section">
      <div className="section__head" data-reveal>
        <SectionStage variant="hobbies" />
        <span className="section__index">05</span>
        <h2 className="section__title">Beyond Work</h2>
      </div>

      <div className="hobby-grid">
        {hobbies.map((h) => (
          <HobbyTile key={h.title} {...h} />
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
