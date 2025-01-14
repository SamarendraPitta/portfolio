import React, { useState } from "react";
import Projectdetail from "./Projectdetail";
import "./projects.css";

function Projects() {

    const [showproj, setallproj] = useState(false);

    const projectDetails = [
        {
            name: (
                <span className="highlight-title">Car Rentals Web Application</span>
            ),
            description: (
                <>
                    Developed{" "}
                    <a
                        href="https://khaathwiktravels.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "orange",
                            textDecoration: "underline",
                        }}
                    >
                        Khaathwik Travels
                    </a>
                    , a user-friendly car rental website enabling seamless vehicle
                    browsing and booking. Integrated Amazon SES for automated email
                    notifications and enhanced communication. Implemented secure
                    backend APIs with SSL and Nginx for HTTPS, ensuring a smooth and
                    reliable user experience.
                </>
            ),
            technologies: (
                <span className="highlight-tech">
                    HTML, CSS, JavaScript, Node.js, NGINX, MySQL
                </span> 
            ),
            link: "https://khaathwiktravels.com/",
        },
        {
            name: (
                <span className="highlight-title">
                    Savoring Insights using Sentiment Analysis
                </span>
            ),
            description: (
                <>
                    This is the{" "}
                    <span className="highlight-keyword">BigData</span> project,
                    analyzes restaurant reviews by extracting features, classifying them
                    into Food, Ambience, and Service, and calculating sentiment polarity
                    scores. This system uses MongoDB for data storage, Flask for backend processing, and
                    Matplotlib for visualizations. The system simplifies restaurant comparisons, aiding quick and
                    informed dining decisions. In addition, I have built a model with an
                    accuracy of 85% to classify the features into categories.
                </>
            ),
            technologies: (
                <span className="highlight-tech">
                    JS, Python, Flask, MongoDB, NLTK, Spacy, Scikit-learn, Matplotlib
                </span>
            ),
            link: "https://github.com/SamarendraPitta/Savouring-Insights-Bigdata-",
        },
        {
            name: (
                <span className="highlight-title">
                    Custom Shell
                </span>
            ),
            description: (
                <>
                    Developed a custom shell in C with interactive and batch modes, utilizing the execv() system call for command execution. In interactive mode, commands are executed after setting a directory path, with support for multiple commands separated by ;. In batch mode, the shell processes commands sequentially from a file until encountering EOF or a quit command.
                </>
            ),
            technologies: (
                <span className="highlight-tech">
                    C
                </span>
            ),
            link: "https://github.com/SamarendraPitta/concurrent-command-custom-path-shell",
        },
        {
            name: (
                <span className="highlight-title">
                    Fire Detection using Mesh Network and AWS.
                </span>
            ),
            description: (
                <>
                    Developed an fire detection system using IoT components and a mesh network with the BATMAN routing protocol for seamless communication. The system integrates AWS Rekognition for image classification, AWS SNS for fire alerts, and AWS cloud for real-time data storage and analysis. It uses Raspberry Pi 4, DS18B20 temperature sensors, MQ135 gas sensors, and cameras to monitor forest conditions, ensuring timely detection and response.
                </>
            ),
            technologies: (
                <span className="highlight-tech">
                    Python, AWS.
                </span>
            ),
            link: "https://github.com/SamarendraPitta/Savouring-Insights-Bigdata-",
        },
    ];

    const allprojects = projectDetails.slice(0,2);
    const hiddenprojects = projectDetails.slice(2);

    const handlehiddenprojects = ()=> {
        setallproj(!showproj);
    };

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            {allprojects.map((singleProject,index) => (
                <div className="each-project" key={index}>
                    <Projectdetail project={singleProject} />
                </div>
            ))}
            {showproj && hiddenprojects.map((hidepro, index)=>(
                <div className="each-project" key={index + allprojects.length}>
                    <Projectdetail project={hidepro} />
                </div>
            ))}
            <div className="button-wrapper">
                <button onClick={handlehiddenprojects}>
                    {showproj ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
}

export default Projects;
