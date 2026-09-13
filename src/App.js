import React from "react";
import Nav from "./components/section/Nav";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Experience from "./components/section/Experience";
import Projects from "./components/section/Projects";
import Skills from "./components/section/Skills";
import Hobbies from "./components/section/Hobbies";
import Publications from "./components/section/Publications";
import Contact from "./components/section/Contact";
import Companion from "./components/layouts/Companion";
import useReveal from "./hooks/useReveal";
import useTheme from "./hooks/useTheme";

function App() {
  useReveal();
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="App">
      <div className="bg-texture" aria-hidden="true" />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Hobbies />
        <Publications />
        <Contact />
      </main>
      <Companion />
    </div>
  );
}

export default App;
