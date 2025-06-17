import React, { useState, useEffect } from 'react';
import './TopNav.css';

import Logo from './static/logo.png';

const TopNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`topNav ${isNavOpen ? 'responsive' : ''} ${scrolled ? 'scrolled' : ''}`}>

    <div className="logo">
    <a href="#home">
      <img  src={Logo} alt="My Logo" />
    </a>
  </div>

      <span className="hamburger" onClick={toggleNav}>
        &#9776;
      </span>
      <a href="#home">Home</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>      
      <a href="#projects">Projects</a>
    </div>
  );
};

export default TopNav;