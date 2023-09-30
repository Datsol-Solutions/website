// ScrollButton.js
import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down a certain distance
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollY > 100);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      {showButton ? <span>&#9650;</span> : 'Contact Us'}
    </div>
  );
};

export default ScrollButton;
