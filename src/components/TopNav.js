import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './TopNav.css';

const TopNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

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
    <nav className={`topNav ${isNavOpen ? 'responsive' : ''} ${scrolled ? 'scrolled' : ''} `}>
      <div className="nav-brand">
        <NavLink to="/" end>AmalDev</NavLink>
      </div>

      <div className={`nav-links ${isNavOpen ? 'show' : ''} `}>
        <NavLink to="/" end onClick={() => setIsNavOpen(false)}>Home</NavLink>
        <NavLink to="/education" onClick={() => setIsNavOpen(false)}>Education</NavLink>
        <NavLink to="/experience" onClick={() => setIsNavOpen(false)}>Experience</NavLink>
        <NavLink to="/projects" onClick={() => setIsNavOpen(false)}>Projects</NavLink>
      </div>

      <div className="nav-actions">
        <button
          className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <div className="theme-toggle-icon">
            <svg className="sun-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="moon-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </button>

        <div className={`hamburger ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;