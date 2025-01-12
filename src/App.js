import {
  faDiscord,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { default as AOS, default as Aos } from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import Exppage from "./exp";
import Projectspage from "./Projects";
import Skillspage from "./skills";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror:true,
      easing: "ease-in-out",
    });
    Aos.refresh();
  }, []);
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };
  const toggleNav = () => {
    setIsNavActive(!isNavActive); // Toggle the navbar visibility
  };

  const redirecttogit = ()=>{
    window.open("https://github.com/SamarendraPitta", "_blank")
  }
  const redirecttolinkedin = ()=>{
    window.open("https://www.linkedin.com/in/samarendrapitta/", "_blank")
  }
  const redirecttoresume = ()=>{
    window.open("https://github.com/SamarendraPitta", "_blank")
  }
  return (
    <div className={`container ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Navbar */}
      <header className="navbar" data-aos = "zoom-in">
        <h1>#Sam.me</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="toggle-theme" onClick={toggleNav}>
          {isNavActive ? "✖" : "☰"} {/* Change the button text based on the state */}
        </button>
        <button className="toggle-theme" onClick={toggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-left">
          <h2>Samarendra</h2>
          <p>Backend-Developer | Master Student | TA</p>
          <div className="links">
            <FontAwesomeIcon icon={faGithub} fade size="xl" onClick={redirecttogit} />
            <FontAwesomeIcon icon={faLinkedinIn} fade size="xl" onClick={redirecttolinkedin}/>
            <a href="https://discord.gg/35w3MtPD" target="_blank" alt="discord" rel="noreferrer" >
              <FontAwesomeIcon icon={faDiscord} fade size="xl" style={{color: "#f7f8fa",}}/>
            </a>
            <a href="mailto:samarendra.pitta99@gmail.com" className="mail-button" >
              <FontAwesomeIcon icon={faEnvelope} fade size="xl" style={{color: "#FFD43B",}}/>
            </a>
            <FontAwesomeIcon icon={faFilePdf} fade size="xl" onClick={redirecttoresume}/>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://via.placeholder.com/150"
            alt="Samarendra"
            className="profile-photo"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="about" id="about" data-aos="fade-right">
        <h3>About Me</h3>
        <p>
          Hello! My name is Samarendra, but my friends call me Sam. I'm a
          Developer, Master’s Student, and a Teaching Assistant with a passion for coding and learning new technologies.
        </p>
        <p>
          Currently, I work as a consultant specializing in developer tooling and
          infrastructure, with expertise in cloud technologies, distributed systems, and web apps.
        </p>
      </section>

      <section className="skills" data-aos="zoom-in"> 
        <Skillspage />
      </section>

      <section className="Projects" data-aos="zoom-in-down">
        <Projectspage />
      </section>

      <section className="exp" data-aos="fade-left">
        <Exppage/>
      </section>

      {/* Support Section */}
      <section className="support" data-aos = "zoom-in">
        <h3>❤️ Support Me</h3>
        <p>
          If you enjoy my work, consider <a href="https://github.com/SamarendraPitta" className="support-link" target="_blank" rel="noopener noreferrer">supporting me</a> through my open-source contributions or projects.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Made with ❤️ by Sam. Find me on
          <a href="https://github.com/SamarendraPitta" target="_blank" rel="noopener noreferrer">GitHub</a> or
          <a href="https://www.linkedin.com/in/samarendrapitta/">LinkiedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
