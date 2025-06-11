import React, { useState, useEffect } from 'react';
import './TopNav.css';

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
      <span className="hamburger" onClick={toggleNav}>
        &#9776;
      </span>
      <a href="#home">Home</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
    </div>
  );
};

export default TopNav;