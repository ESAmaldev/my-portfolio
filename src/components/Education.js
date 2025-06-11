import React from 'react';
import { Row, Col } from "react-bootstrap";
import './Education.css';

function Education() {
  return (
    <div className="educationdiv">
        <br></br>
        <br></br>
        <h1 className="fade-in">Education</h1>

        <Row className="section">
        <Col xs={10} md={5} xl={5} className="degree1">
        <h2>Masters</h2>
            <h4>MSc in Information Technology</h4>
            <span className="uni"> University of Aberdeen, Aberdeen </span>
                                <div className="courses">
                                    <p>Courses:</p>
                                    <ul>
                                        <li><span>Software Project Management (Scrum & Agile methodologies)</span></li>
                                        <li><span>Database Management Systems (DBMS, SQL, MySQL)</span></li>
                                        <li><span>Web Development(Javascript, Node.js, Express)</span></li>
                                        <li><span>Enterprise Software Development (Python, Flask, Django, Git)</span></li>
                                    </ul>
                                </div>

        </Col>
        <Col xs={10} md={5} xl={5} className="degree2">
        <h2>Bachelors</h2>
        <h4>B.Tech in Naval Architecture and Ocean Engineering</h4>
        <span className="uni"> Indian Institute of Technology, Madras </span>
                                <div className="courses">
                                    <p>Courses:</p>
                                    <ul>
                                        <li><span>Introduction to programming (Java, OOPS Concepts)</span></li>
                                        <li><span>Computational Fluid Dynamics</span></li>
                                        <li><span>Engineering Design</span></li>
                                        <li><span>Offshore Structures</span></li>
                                    </ul>
                                </div>
        </Col>
        </Row>

    
    </div>
  );
}

export default Education;