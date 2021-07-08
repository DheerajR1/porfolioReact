const animation = {
  animate: true,
  duration: 750,
  once: false,
};
// Change display name on tha landing display
const header = {
  name: "Dheeraj",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about me
const section2title = "About Me";
const about = {
  paragraph:
    "Software Engineer who loves to transform ideas into reality using code. With over three years of development using the latest technologies and full-fledged APIs. Motivated developer with experience creating custom applications with Java, ReactJs, NodeJs and Python.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
];
// projects: name, skills used, url.
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "CryptoWebScrapper",
    skills: ["ReactJs, HTML, CSS, JS"],
    url: "https://waypoint-optimizer.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project1
    id: "project2",
    name: "Waypoint Optimizer",
    skills: ["HTML, CSS, JS"],
    url: "https://waypoint-optimizer.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project3",
    name: "PokeDex",
    skills: ["HTML, CSS, JS"],
    url: "https://pokeexplore.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project4",
    name: "Emoji Dictionary",
    skills: ["ReactJS, HTML, CSS, JS"],
    url: "https://e3why.csb.app/#",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project6",
    name: "Emoticon API",
    skills: ["NodeJs , JS"],
    url: "https://github.com/kaustubhai",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Anime Recommendations",
    url: "https://jv0h0.csb.app/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "CryptoWebScrapping",
    url: "https://github.com/DheerajR1/CryptoWebScrapper",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Minion Talk",
    url: "https://learn-minionese.netlify.app/",
  },
];
// Contact form text, and Jotforms link
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "",
  contactUrl: "https://formspree.io/f/xvodqebl",
};
// respective social media link
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
