import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Import CSS file
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Socials</h3>
            <div className="social-icons">
              <a href="https://github.com/ESAmaldev"><FaGithub /></a>
              <a href="https://www.instagram.com/amaldev_es/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/dev0amal/"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <Button href="https://drive.google.com/file/d/1u10jK7GcuxSS-bo-nJXMbjR8VaJkAXX4/view?usp=sharing" target="_blank" rel="noopener noreferrer">SEE MY RESUME</Button>
          </div>

         

          
        </div>

      </div>
    </footer>
  );
};

export default Footer;