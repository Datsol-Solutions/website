import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './logo.png';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function Navibar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect the active section based on scroll position
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const achievementsSection = document.getElementById('achievements');
      const servicesSection = document.getElementById('services');
      const teamSection = document.getElementById('ourteam');

      if (teamSection && window.scrollY >= teamSection.offsetTop) {
        setActiveSection('ourteam');
      } else if (
        servicesSection &&
        window.scrollY >= servicesSection.offsetTop
      ) {
        setActiveSection('services');
      } else if (
        achievementsSection &&
        window.scrollY >= achievementsSection.offsetTop
      ) {
        setActiveSection('achievements');
      } else if (aboutSection && window.scrollY >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    // Scroll to the section when a navigation link is clicked
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt='Your Company Logo' />
      </div>
      <ul className="link-list nav-links" style={style2}>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('home')}
        >
          <a className={activeSection === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('about')}
        >
          <a className={activeSection === 'about' ? 'active' : ''}>About Us</a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('achievements')}
        >
          <a className={activeSection === 'achievements' ? 'active' : ''}>
            Achievements
          </a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('services')}
        >
          <a className={activeSection === 'services' ? 'active' : ''}>
            Our Services
          </a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('ourteam')}
        >
          <a className={activeSection === 'ourteam' ? 'active' : ''}>
            Our Team
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navibar;
