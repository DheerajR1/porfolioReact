import React from "react";
import Stickman from "./Stickman";

// Inline, in-place emoting figure that sits on the section header line.
const SectionStage = ({ variant }) => (
  <span className={`hstick hstick--${variant}`} aria-hidden="true">
    <Stickman variant={variant} size={46} />
  </span>
);

export default SectionStage;
