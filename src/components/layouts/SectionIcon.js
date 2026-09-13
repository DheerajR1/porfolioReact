import React from "react";

// Thin, single-weight line icons for section headers. Inline SVG (stroke-based)
// keeps them cohesive and truly hairline — not filled glyphs.
const P = {
  about: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.2 3.8-6.5 8-6.5s8 2.3 8 6.5" />
    </>
  ),
  experience: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
      <path d="M3 13h18" />
    </>
  ),
  projects: (
    <>
      <path d="M8.5 8 4.5 12l4 4" />
      <path d="M15.5 8l4 4-4 4" />
    </>
  ),
  skills: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  hobbies: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <circle cx="12" cy="13.5" r="3.5" />
      <path d="M8.5 7 10 4.8h4L15.5 7" />
    </>
  ),
  publications: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12.5h6M9 16h6" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
};

const SectionIcon = ({ name }) => (
  <svg
    className="section__icon"
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {P[name] || null}
  </svg>
);

export default SectionIcon;
