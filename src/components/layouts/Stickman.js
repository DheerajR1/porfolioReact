import React from "react";

// Section-relevant prop held by the figure.
export const PROPS = {
  experience: (
    <g className="prop">
      <rect x="33" y="34" width="14" height="10" rx="1.5" />
      <path d="M37 34v-3h6v3" />
    </g>
  ),
  projects: (
    <g className="prop">
      <rect x="32" y="30" width="14" height="14" rx="1" />
      <path d="M32 36h14" />
    </g>
  ),
  skills: (
    <g className="prop prop--curl">
      <line x1="32" y1="39" x2="48" y2="39" />
      <circle cx="32" cy="39" r="3.2" />
      <circle cx="48" cy="39" r="3.2" />
    </g>
  ),
  hobbies: (
    <g className="prop">
      <rect x="33" y="31" width="15" height="11" rx="1.5" />
      <circle cx="40.5" cy="36.5" r="3.2" />
      <path d="M35 31v-2h4v2" />
    </g>
  ),
  publications: (
    <g className="prop">
      <path d="M33 31h14v13H33z" />
      <line x1="40" y1="31" x2="40" y2="44" />
    </g>
  ),
  contact: <path className="prop prop--fly" d="M32 38l16-6-5 15-3.5-6.5L32 38z" />,
  about: null,
};

const Stickman = ({ variant = "about", size = 46 }) => {
  const isWave = variant === "about";
  return (
    <svg
      className="stickman"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="26" cy="12" r="6" />
      <line x1="26" y1="18" x2="26" y2="40" />
      <line className="leg leg--b" x1="26" y1="40" x2="19" y2="58" />
      <line className="leg leg--f" x1="26" y1="40" x2="33" y2="58" />
      <line className="arm arm--b" x1="26" y1="23" x2="17" y2="33" />
      {isWave ? (
        <line className="arm arm--wave" x1="26" y1="23" x2="36" y2="12" />
      ) : (
        <line className={`arm arm--f arm--${variant}`} x1="26" y1="23" x2="34" y2="34" />
      )}
      {PROPS[variant]}
    </svg>
  );
};

export default Stickman;
