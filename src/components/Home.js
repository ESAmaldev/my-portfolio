import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Amaldev</span>
          </h1>
          <div className="typewriter">
            <h2>Full Stack Developer</h2>
          </div>
          <p className="hero-description">
            Passionate about building scalable web applications and solving complex problems.
            Let's build something amazing together.
          </p>

          <div className="social-links">
            <a href="https://github.com/ESAmaldev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/esamaldev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:esamaldev@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="cta-buttons">
            <a className="btn btn-outline" style={{backgroundColor:"rgba(67, 221, 221, 0.81)"}} href="https://drive.google.com/file/d/1TQuFc5wBLYtFXuY5JrtLIU1cA34eLdg6/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</a>
           
          </div>
        </div>

        <div className="hero-image">
          {/* Placeholder for profile image if available, or a nice illustration */}
          <div className="profile-placeholder">
            <span>AD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;