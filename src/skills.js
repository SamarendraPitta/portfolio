import {
  faAws,
  faDocker,
  faGit,
  faGithub,
  faJava,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./skills.css";

const Skills = () => {
const [activeTab, setActiveTab] = useState("Language"); // Default active tab

  // Tab data for dynamic rendering
const tabData = {
    Language: [
        { name: "Java", icon: faJava, color: "#d31212" },
        { name: "Python", icon: faPython, color: "#306998"},
        { name: "JavaScript", icon: faJsSquare, color: "#FFD43B"},
        { name: "C", icon: faCopyright, color: "#3de8ff" },
    ],
    Framework: [
        { name: "React", icon: faReact, color: "#043f6c" },
        { name: "Node.js", icon: faNodeJs, color: "#16983d"},
        {name: "Spring-Boot" },
        {name: "Spring-JPA"},
        {name: "Hibernate"},
        {name: "Flask"}
    ],
    Library: [
        { name: "NLTK"},
        { name: "pyLDAvis"},
        { name: "gensim"},
        { name: "WebScrapping"},
    ],
    Database: [
        { name: "MySQL"},
        { name: "MongoDB"},
        { name: "Cassandra"},
    ],
    AWS: [
        { name: "SES", icon: faAws},
        { name: "S3", icon: faAws },
        {name:"Lambda", icon:faAws}
    ],
    "CI/CD": [
        { name: "Git", icon: faGit , color: "#044d86"},
        { name: "GitHub", icon: faGithub},
        { name: "Docker", icon: faDocker, color: "#74C0FC"},
        { name: "NGNIX" },
    ],
    "Other Skills/Tools":[
        { name: "RESTFUL API"},
        { name:"Hadoop - MapReduce"},
        { name: "XSLT"},
        { name: "Postman"},
        { name: "soapUI"},
        { name: "Swagger"},
        { name: "VS Code"},
        { name: "Ecllipse"},
        { name: "Android Studio"},
        {name:"XAMPP"}
    ],
};

  return (
    <div className="skills-container">
      <h1>Technologies</h1>
      {/* Tabs */}
      <div className="categories">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="skills-grid">
        {tabData[activeTab].map((skill) => (
          <div className="skill-card" key={skill.name}>
            {typeof skill.icon === "string" ? (
              <img src={skill.icon} alt={skill.name} />
            ) : (
              <FontAwesomeIcon icon={skill.icon} size="3x" style={{ color: skill.color || "#000" }} />
            )}
            <p><b>{skill.name}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
