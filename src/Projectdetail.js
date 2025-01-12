import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

function Projectdetail({ project }) {
    const { name, description, technologies, link } = project;
    return (
        <div className="project-containers">
            <div className="name-container">
                <h3>{name}</h3>
                <a href={link} target="_blank"rel="noopener noreferrer"className="icon-wrapper">
                    <FontAwesomeIcon 
                        icon={faArrowUpRightFromSquare}
                        size="xl"
                        style={{ color: "#f2a807" }}
                        title="Visit Project"
                    />
                </a>
            </div>
            <p>{description}</p>
            <p>TechStack: {technologies}</p>
        </div>
    );
}

export default Projectdetail;
