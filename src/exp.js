import React, { useState } from "react";
import "./exp.css";

const Exp = () => {
    const [selectedCompany, setSelectedCompany] = useState("CSU");

    const experienceData = [
        {
            role: "Graduate Teaching Assistant",
            company: "CSU",
            date: "August 2024 - Present",
            description: [
                "Working as TA for Object-Oriented Program. In Fall 2024 worked as TA for Artificial Intelligence course.",
                "Assist in teaching and holding office hours to help students understand the course material.",
                "Grade assignments and maintain records.",
            ],
        },
        {
            role: "Qualitative Data Expert",
            company: "CSU",
            date: "December 2023 - March 2024",
            description: [
                "Worked under Dr. Rama Jayanthi on the Doi Tung Coffee Research Project. This project derived insights and trends on coffee production in Thailand. Collected data using web scraping, preprocessed the data, and applied LDA to identify topic frequencies. Visualized topic distributions and trends.",
                <React.Fragment key="tech">
                    <span className="technology-highlight">Technology and libraries:</span>{" "}
                    Python, BeautifulSoup, NLP, Pandas, Gensim, PyLDAvis.
                </React.Fragment>,
            ],
        },
        {
            role: "Software Engineer",
            company: "INFOR",
            date: "August 2021 - June 2023",
            description: [
                "Designed Dataflow’s and Workflow architecture for order processing, inventory management, and sending notifications to customers regarding order status.",
                "Designed and developed RESTful APIs with OAuth integration, ensuring secure and standardized communication for Purchase orders, Shipments, and Sales orders.",
                "Responsible for managing all testing, moving, and configuration of changes/fixes into ERP systems.",
                "Worked with business users to identify requirements and implement them in ERP systems through configuration changes, integration of third-party systems, customizations, and extensions.",
                <React.Fragment key="tech">
                    <span className="technology-highlight">Technologies and Frameworks:</span>{" "}
                    Python, Java, Spring Boot, MySQL, 4-GL, Shell Scripting, XML, RESTful APIs.
                </React.Fragment>,
            ],
        },
        {
            role: "Web Developer Intern",
            company: "Entrench Electronics",
            date: "May 2019 - August 2019",
            description: [
                "Debugged and fixed front-end and back-end issues, improving site performance.",
                "Designed and developed a fashion website using HTML, CSS, JavaScript, and Node.js to create an engaging and responsive user experience. Utilized GIT to manage codebase updates.",
            ],
        },
    ];

    const uniqueCompanies = [...new Set(experienceData.map((exp) => exp.company))];

    return (
        <div className="exp-cont">
            <h1>Experience</h1>
            <div className="experience-container">
                <div className="experience-left">
                    {uniqueCompanies.map((company, index) => (
                        <div
                            key={index}
                            className={`experience-company ${
                                selectedCompany === company ? "active" : ""
                            }`}
                            onClick={() => setSelectedCompany(company)}
                        >
                            {company}
                        </div>
                    ))}
                </div>
                <div className="experience-right">
                    {experienceData
                        .filter((exp) => exp.company === selectedCompany)
                        .map((exp, idx) => (
                            <div key={idx} className="experience-details">
                                <h3>{exp.role}</h3>
                                <p className="experience-date">{exp.date}</p>
                                <ul>
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>
                                            <div className="dot"></div>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Exp;
