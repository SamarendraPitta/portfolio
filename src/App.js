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
import Connect from "./contact";
import Exppage from "./exp";
import Projectspage from "./Projects";
import Skillspage from "./skills";

function App() {

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
  
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavClick = (sectionId) => {
    setIsNavActive(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirecttogit = ()=>{
    window.open("https://github.com/SamarendraPitta", "_blank")
  }
  const redirecttolinkedin = ()=>{
    window.open("https://www.linkedin.com/in/samarendrapitta/", "_blank")
  }

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar" data-aos="zoom-in">
        <h1>#Sam.me</h1>
        <nav>
          <ul className={isNavActive ? "active" : ""}>
            <li>
              <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
            </li>
            <li>
              <a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a>
            </li>
            <li>
              <a href="#experience"  onClick={() => handleNavClick('experience')}>Experience</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
            </li>
          </ul>
        </nav>
        <button className="toggle-theme" onClick={toggleNav}>
          {isNavActive ? "✖" : "☰"}
        </button>
      </header>

      <section className="hero" data-aos="fade-up">
        <div className="hero-left">
          <h2>Samarendra</h2>
          <p>Full-Stack Developer | Master Student | TA</p>
          <div className="links">
            <FontAwesomeIcon icon={faGithub} fade size="xl" onClick={redirecttogit} />
            <FontAwesomeIcon icon={faLinkedinIn} fade size="xl" onClick={redirecttolinkedin}/>
            <a href="https://discord.gg/35w3MtPD" target="_blank" alt="discord" rel="noreferrer" >
              <FontAwesomeIcon icon={faDiscord} fade size="xl" style={{color: "#f7f8fa",}}/>
            </a>
            <a href="mailto:samarendra.pitta99@gmail.com" className="mail-button" >
              <FontAwesomeIcon icon={faEnvelope} fade size="xl" style={{color: "#FFD43B",}}/>
            </a>
            <FontAwesomeIcon icon={faFilePdf} fade size="xl" onClick={() => window.open('images/resume.pdf', '_blank')}/>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="images/pic2.jpeg"
            alt=""
            className="profile-photo"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="about" id="about" data-aos="fade-right">
        <h3>About Me</h3>
        <p>
          Hello! My name is Samarendra, but my friends call me Sam. I'm a Developer, Master’s Student, and a Teaching Assistant with a passion for coding and learning new technologies.
        </p>
        <p>
          I am a Software Engineer with up to 3 years of professional experience in building software across a diverse range of technologies. A passionate Developer in creating user-friendly, complex web applications and Software components, utilizing cloud technology like AWS and Linux systems. In addition, I have experience in Python, ML and NLP libraries, as well as analyzing, processing, and visualizing Big Data.
        </p>    
      </section>
      <section className="skills" id="skills" data-aos="zoom-in"> 
        <Skillspage />
      </section>

      <section className="Projects" id="projects" data-aos="zoom-in-down">
        <Projectspage />
      </section>

      <section className="exp" id="experience" data-aos="zoom-in-down">
        <Exppage/>
      </section>

      <section className="connect" id="contact" data-aos="zoom-in-down">
        <Connect />
      </section>

      {/* Support Section */}
      <section className="support" data-aos = "zoom-out">
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
