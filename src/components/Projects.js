import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "SSO Application for InteBloc",
    description: "Led a team of six to build an SSO solution (AWS Cognito + Azure AD), enhancing cross-platform authentication. Enforced RBAC (20% security boost) and streamlined workflows using Git.",
    tags: ["AWS Cognito", "Azure AD", ".NET", "Microservices"],
    links: {
      // demo: "https://example.com", // Add if available
      // code: "https://github.com/example" // Add if available
    }
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.code && (
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
