import React, { useState } from 'react';
import './TopNav.css'; 

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
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
    </div>
  );
}

export default TopNav;
