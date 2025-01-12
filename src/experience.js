import React from "react";
import "./experience.css";

const experience = () => {
    const experienceData = [
        {
        role: "Graduate Teaching Assistant",
        company: "CSU",
        date: "January 2025 - Present",
        description: [
            "Working as TA for Data Structures course.",
            "Assist in teaching and holding office hours to help students to understand the course meterial.",
            "Grade assignments and maintain records."
        ],
        },
        {
            role: "Graduate Teaching Assistant",
            company: "CSU",
            date: "August 2024 - December 2024",
            description: [
                "Worked as TA for Artificial Intelligence course.",
                "Assist in teaching and holding office hours to help students to understand the course meterial.",
                "Grade assignments and maintain records."
            ],
            },
        {
        role: "Qualitative Data Expert",
        company: "CSU",
        date: "December 2023 - March 2024",
        description: [
            " I have Worked under Dr. Rama Jayanthi(Professor in CSU) on the Doi Tung Coffee Research Project. This project is basically to derive the insights, trends on the coffee production in thailand. First, I have collected data using web scrapping and then preprocessed the data. And then applied LDA(Latent Dirchlet allocation) to identify the topic frequencuies and to find the topics by clustering the identical words. Topic distributions and trends were visualized.",
            <React.Fragment key="tech">
                <span className="technology-highlight">
                    Technology and libraries:
                </span>  Python, BeautifulSoup, NLP, Pandas, Gensim, PyLDAvis.
            </React.Fragment>
        ],
        },
        {
            role: "Software Engineer",
            company: "INFOR",
            date: "August 2021 - June 2023",
            description: [
                "Designed Dataflow’s and Workflow architecture for order processing, inventory management and sending notifications to customers regarding order status.",
                "Designed and Developed RESTful APIs with OAuth integration, to ensure secure and standardized communication for Purchase orders, Shipments and Sales orders. ",
                "Responsible for/managing all testing, moving and configuration of changes/fixes into the ERP Systems.",
                "Experienced working with business users to identify the requirements and implement the same in the ERP through configuration changes, integration of third-party systems, customizations, and extensions.",
                <React.Fragment key="tech">
                    <span className="technology-highlight">
                        Technologies and FrameWorks:
                    </span><br />  Python, Java, Spring-Boot, MySQL, 4-GL, Shell-Scripting, XML, RESTFUL APIs.
                </React.Fragment>
            ],
        },
        {
            role: "Web Developer Intern",
            company: "Entrench Electronics",
            date: "May 2019 - August 2019",
            description: [
                "Worked as TA for Artificial Intelligence course.",
                "Assist in teaching and holding office hours to help students to understand the course meterial.",
                "Grade assignments and maintain records."
            ],
            },
    ];

    const educationData = [
        {
            school: "Cleveland State University",
            CGPA: "3.933",
            date: "August, 2023 - Present",
            description:
                "Doing Masters in Computer Science.",
        },
        {
            school: "Sri Venkateswara University",
            CGPA:"8.0",
            date: "July, 2017 - July, 2021",
            description:
                "Bachelors in Computer science and Engineering.",
            },
    ];

    return (
        <div className="experience">
        <section>
            <h2 className="experience-title">Experience</h2>
            {experienceData.map((item, index) => (
            <div className="experience-item" key={index}>
                <div className="experience-dot"></div>
                <div className="experience-content">
                <h3>
                    {item.role} <span>At {item.company}</span>
                </h3>
                <p className="experience-date">{item.date}</p>
                <ul className="dashed-list">
                    {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
                </div>
            </div>
            ))}
        </section>

        <section>
            <h2 className="experience-title">Education</h2>
            {educationData.map((item, index) => (
            <div className="experience-item" key={index}>
                <div className="experience-dot"></div>
                <div className="experience-content">
                    <div className="eddcontent">
                        <h3>{item.school}</h3>
                        <h3>CGPA : {item.CGPA}</h3>
                    </div>
                    <p className="experience-date">{item.date}</p><br />
                    <p className="exp-responsibilites">{item.description}</p>
                </div>
            </div>
            ))}
        </section>
        </div>
    );
    };

export default experience;
