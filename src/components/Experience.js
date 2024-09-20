import React from 'react';
import './Experience.css';
import { Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <div className="experiencediv">
      <br></br>
        <br></br>
        <h1 className='word-art'>Experience</h1>
        
        <Row className="section">
        <Col xs={10} md={6} xl={6} className="jobCol1">
        <div className="job1">
            <h4>Software Developer/Technical manager</h4>
            <span className="exp">Tech stack: Python, Django, PyTest, Docker, SQL, AWS, Git</span>
                                <div className="job">
                                <h5> Amlire, Kochi </h5>
                                <ul className="custom-list">
                                        <li><span>Involved full software development life cycle, including designing architecture, writing code, testing, and deployment</span></li>
                                        <li><span>Developed scalable Django web application using Python, JavaScript and React</span></li>
                                        <li><span>Partnered cross-functionally to understand needs, identify dependencies, and proactively resolve issues</span></li>
                                        <li><span>Created RESTful APIs to manage user data and perform CRUD operations</span></li>
                                    </ul>
                                </div>

        </div>   

        </Col>
        
        <Col xs={10} md={4} xl={4} className="jobCol2"></Col>
        </Row>
        <Row className="section">
        <Col xs={10} md={4} xl={4} className="jobCol1"></Col>
        <Col xs={10} md={6} xl={6} className="jobCol2">
            <div className="job2">
                <h4>Application Support Engineer</h4>
                <span className="exp">Tech stack: Shell, SQL, JIRA, IBM Cognos, RDS, Solaris</span>
                                    <div className="job">
                                        <h5> Reflexis(Zebra) </h5>
                                        <ul className="custom-list">
                                                <li><span>Resolved alerts and issues promptly, minimizing disruptions and preventing outages by 40%</span></li>
                                                <li><span>Automated tasks using Bash shell scripting, enhancing efficiency in system administration</span></li>
                                                <li><span>Conducted stakeholder meetings and used JIRA to track tickets and document actions</span></li>
                                                <li><span>Developed optimized SQL queries, improving system stability and performance by 30%</span></li>
                                            </ul>
                                    </div>

            </div>       
        </Col>
        </Row>
        <Row className="section">
        <Col xs={10} md={6} xl={6} className="jobCol1">
        <div className="job3">
            <h4>Software Developer</h4>
            <span className="exp">Tech stack: Java, Spring Boot, JUnit, SQL, SVN</span>
                                <div className="job">
                                <h5> Reflexis(Zebra) </h5>
                                    <ul className="custom-list">
                                        <li>Collaborated with agile teams to build Java and Spring Boot web application with Angular JS</li>
                                        <li>Developed REST APIs consumed by retail web apps to track time across 50,000+ locations, improving operations</li>
                                        <li>Refactored legacy codebase from JSP to Angular JS templates, increasing performance 30% and boosting features</li>
                                        <li>Strengthened website's overall performance by fixing bugs and browser compatibility issues</li>
                                    </ul>
                                </div>

        </div>  
        </Col>    
        
        <Col xs={10} md={4} xl={4} className="jobCol2"></Col>
        </Row>    
    </div>
  );
}

export default Experience;