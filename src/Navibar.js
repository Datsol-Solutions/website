import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './media/logo_b.png';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function Navibar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Detect the active section based on scroll position
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const achievementsSection = document.getElementById('achievements');
      const servicesSection = document.getElementById('services');
      const teamSection = document.getElementById('ourteam');

      if (teamSection && window.scrollY >= teamSection.offsetTop - 100) {
        setActiveSection('ourteam');
      } else if (
        servicesSection &&
        window.scrollY >= servicesSection.offsetTop - 100
      ) {
        setActiveSection('services');
      } else if (
        achievementsSection &&
        window.scrollY >= achievementsSection.offsetTop - 100
      ) {
        setActiveSection('achievements');
      } else if (
        aboutSection &&
        window.scrollY >= aboutSection.offsetTop - 100
      ) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }

      // Check if the user has scrolled down a certain distance
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
      // Calculate the offset based on the height of the navbar
      const offset = sectionId === 'about' ? 59 : 0; // Adjust the offset for the "About Us" section
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth', // Smooth scrolling
      });
  
      // Manually set the active section to 'about' when 'About Us' is clicked
      if (sectionId === 'about') {
        setActiveSection('about');
      } else {
        // Delay closing the mobile menu to ensure the section is scrolled to first
        setTimeout(() => {
          setIsMobileMenuOpen(false); // Close mobile menu after a short delay
        }, 500); // You can adjust the delay duration as needed
      }
    }
  };
  
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt='Your Company Logo' />
      </div>
      <div
        className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul
        className={`link-list nav-links ${isMobileMenuOpen ? 'open' : ''}`}
        style={style2}
      >
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('home')}
        >
          <a
            className={activeSection === 'home' ? 'active' : ''}
            href="#home"
          >
            Home
          </a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('about')}
        >
          <a
            className={activeSection === 'about' ? 'active' : ''}
            href="#about"
          >
            About Us
          </a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('achievements')}
        >
          <a
            className={activeSection === 'achievements' ? 'active' : ''}
            href="#achievements"
          >
            Achievements
          </a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('services')}
        >
          <a
            className={activeSection === 'services' ? 'active' : ''}
            href="#services"
          >
            Our Services
          </a>
        </li>
        <li
          className={isScrolled ? 'scrolled' : ''}
          onClick={() => handleNavLinkClick('ourteam')}
        >
          <a
            className={activeSection === 'ourteam' ? 'active' : ''}
            href="#ourteam"
          >
            Our Team
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navibar;
