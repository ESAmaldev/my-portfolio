import React from 'react';
import './TopNav.css';
import icon from './home-icon.jpg';

function TopNav() {
  return (
    <div className="topnav">
      <a href="#home"> <img className="icon" src={icon} alt="home"></img></a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#socials">Socials</a>
    </div>
  );
}

export default TopNav;
