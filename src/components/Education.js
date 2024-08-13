import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="educationdiv">
      <br></br>
        <br></br>
        <br></br>
        <h1>Education</h1>
        <div className="section">
        <div className="degree1">
        <p>Masters</p>
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

        </div>
        <div className="degree2">
        <p>Bachelors</p>
        <h4>B.Tech in Naval Architecture and Ocean Engineering</h4>
        <span className="uni"> Indian Institute of Technology, Madras </span>
                                <div className="courses">
                                    <p>Courses:</p>
                                    <ul>
                                        <li><span>Introduction to programming (Java, OOPS Concepts)</span></li>
                                    </ul>
                                </div>
        </div>
    </div>
    </div>
  );
}

export default Education;