import './TopNav.css';
import React, { useState } from 'react';

const TopNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`topNav ${isNavOpen ? 'responsive' : ''}`}>
      <span className="hamburger" onClick={toggleNav}>
        &#9776; {/* This is the hamburger icon (≡) */}
      </span>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default TopNav;
