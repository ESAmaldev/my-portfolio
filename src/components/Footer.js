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
              <a href="#"><FaGithub /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <Button href="https://drive.google.com/file/d/1Bi7ULA19-ovnnNyF1JaQmumGzKC6h6Gm/view?usp=sharing" target="_blank" rel="noopener noreferrer">SEE MY RESUME</Button>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>

          
        </div>

      </div>
    </footer>
  );
};

export default Footer;