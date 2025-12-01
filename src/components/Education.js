import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: "Masters in Information Technology",
        university: "University of Aberdeen, Aberdeen",
        courses: [
            "Software Project Management (Scrum & Agile methodologies)",
            "Database Management Systems (DBMS, SQL, MySQL)",
            "Web Development (Javascript, Node.js, Express)",
            "Enterprise Software Development (Python, Flask, Django, Git)"
        ]
    },
    {
        degree: "Bachelors in Naval Architecture and Ocean Engineering",
        university: "Indian Institute of Technology, Madras",
        courses: [
            "Introduction to programming (Java, OOPS Concepts)",
            "Computational Fluid Dynamics",
            "Engineering Design"
        ]
    }
];

const Education = () => {
    return (
        <div className="education-container">
            <h1 className="section-title">Education</h1>
            <div className="timeline">
                {educationData.map((edu, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <div className="edu-header">
                                <h3>{edu.degree}</h3>
                                <h4>{edu.university}</h4>
                            </div>
                            <div className="courses-section">
                                <h5>Key Courses:</h5>
                                <ul className="courses-list">
                                    {edu.courses.map((course, i) => (
                                        <li key={i}>{course}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;