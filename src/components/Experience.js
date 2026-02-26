import React from 'react';
import './Experience.css';

const experienceData = [
    {
        role: "Fullstack Developer",
        company: "Humanitarian Operations, Edinburgh",
        techStack: "TypeScript, JavaScript, Express, Next, React, Postgres, AWS, Git",
        points: [
            "Developed a greenfield property management system from the ground up, taking ownership of key components including contract management, lease tracking, and automated financial reporting.",
            "Built a server-side rendered web application using Next.js and Node.js, implementing secure JWT-based authentication and robust role-based access controls.",
            "Automated critical business processes like invoice generation to remove manual effort & streamline workflows.",
            "Implemented automated email notifications using Nodemailer and OAuth2, improving operational efficiency and reducing administrative overhead.",
            "Deployed the application on AWS Lightsail with AWS RDS AND S3 for scalable and reliable production hosting."
        ]
    },
    {
        role: "Senior Software Developer",
        company: "Amlire, Kochi",
        techStack: "Python, Django, React, PyTest, Docker, SQL, AWS, Git",
        points: [
            "Involved full software development life cycle, including designing architecture, writing code, testing, and deployment",
            "Developed scalable Django web application using Python, JavaScript and React",
            "Partnered cross-functionally to understand needs, identify dependencies, and proactively resolve issues",
            "Created RESTful APIs to manage user data and perform CRUD operations"
        ]
    },
    {
        role: "Software Developer",
        company: "Amlire, Kochi",
        techStack: "Python, Django, PyTest, Docker, SQL, AWS, Git",
        points: [
            "Involved full software development life cycle, including designing architecture, writing code, testing, and deployment",
            "Developed scalable Django web application using Python, JavaScript and React",
            "Partnered cross-functionally to understand needs, identify dependencies, and proactively resolve issues",
            "Created RESTful APIs to manage user data and perform CRUD operations"
        ]
    },
    {
        role: "Software Developer",
        company: "Reflexis (Zebra)",
        techStack: "Java, Spring Boot, JUnit, SQL, SVN",
        points: [
            "Collaborated with agile teams to build Java and Spring Boot web application with Angular JS",
            "Developed REST APIs consumed by retail web apps to track time across 50,000+ locations, improving operations",
            "Refactored legacy codebase from JSP to Angular JS templates, increasing performance 30% and boosting features",
            "Strengthened website's overall performance by fixing bugs and browser compatibility issues"
        ]
    }
];

const Experience = () => {
    return (
        <div className="experience-container">
            <h1 className="section-title">Experience</h1>
            <div className="timeline">
                {experienceData.map((job, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <div className="job-header">
                                <h3>{job.role}</h3>
                                <h4>{job.company}</h4>
                            </div>
                            <div className="tech-stack">
                                <strong>Tech Stack:</strong> {job.techStack}
                            </div>
                            <ul className="job-points">
                                {job.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;