import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from './logo.jpeg';

function Navibar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt='Your Company Logo' />
      </div>
      <ul className="link-list nav-links">
        <li><a className={isScrolled ? 'scrolled' : ''} href="/">Home</a></li>
        <li><a className={isScrolled ? 'scrolled' : ''} href="/about">About Us</a></li>
        <li><a className={isScrolled ? 'scrolled' : ''} href="/services">Area Of Expertise</a></li>
        <li><a className={isScrolled ? 'scrolled' : ''} href="/contact">Our Team</a></li>
      </ul>
    </nav>
  );
}

export default Navibar;
