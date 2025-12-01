import React, { useState, useEffect } from 'react';
import './SideNav.css';

const SideNav = (activeBlock) => {
  const [scrolled, setScrolled] = useState(false);
  console.log(activeBlock)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // run once on mount in case page isn't at top

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sideNav ${scrolled ? 'scrolled' : ''}`}>
      { activeBlock.activeBlock === 'home' && (
        <>
      <a href="#education" style={{ fontSize:'24px' , paddingTop:'15rem', paddingBottom : '3rem' }}>Education</a>
      <a href="#experience" style={{ fontSize:'24px', paddingBottom : '3rem'  }}>Experience</a>      
      <a href="#projects" style={{ fontSize:'24px' }}>Projects</a> </> ) }
      { activeBlock.activeBlock === 'education' &&
      (<> 
      <a href="#education" style={{ fontSize:'24px' , paddingTop:'15rem', paddingBottom : '3rem' }}>Master's</a>
      <a href="#experience" style={{ fontSize:'24px', paddingBottom : '3rem'  }}>Bachelor's</a>      
      <a href="#projects" style={{ fontSize:'24px' }}>Projects</a> </> ) }
      { activeBlock.activeBlock === 'experience' && (
        <>
      <a href="#education" style={{ fontSize:'24px' , paddingTop:'15rem', paddingBottom : '3rem' }}>Education</a>
      <a href="#experience" style={{ fontSize:'24px', paddingBottom : '3rem'  }}>Experience</a>      
      <a href="#projects" style={{ fontSize:'24px' }}>Projects</a> </> ) }
      { activeBlock.activeBlock === 'projects' && (
        <>
      <a href="#education" style={{ fontSize:'24px' , paddingTop:'15rem', paddingBottom : '3rem' }}>Education</a>
      <a href="#experience" style={{ fontSize:'24px', paddingBottom : '3rem'  }}>Experience</a>      
      <a href="#projects" style={{ fontSize:'24px' }}>Projects</a> </> ) }
      
    </div>
  );
};

export default SideNav;
