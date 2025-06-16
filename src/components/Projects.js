import React from 'react';
import { Row, Col } from "react-bootstrap";
import './Projects.css';

function Projects() {
  return (
    <div className="projectdiv">
        <br></br>
        <br></br>
        <div className="projects">
        <h1 className="fade-in">Projects</h1>

        <h2>SSO application for InteBloc   </h2>
        <br></br>
                                    <ul>
                                        <li>Led a team of six to build an SSO solution (AWS Cognito + Azure AD), enhancing cross-platform authentication.</li>
                                        <li>Enforced RBAC (20% security boost) and streamlined workflows using Git (30% fewer merge conflicts) and imple-
mented CI/CD pipelines.</li>
                                        <li>Designed .NET microservices to improve scalability and maintenance.</li>
                                    </ul>

        
        
    </div>
    
    </div>
  );
}

export default Projects;