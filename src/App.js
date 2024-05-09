//import "./App.css";

import "./input.css";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import MenuP from "./components/MenuP";
import About from "./components/About";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <MenuP />
      <About />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
