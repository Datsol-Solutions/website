// ScrollButton.js
import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // Function to scroll to the bottom when the button is clicked
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-button ${showButton ? 'show' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={scrollToBottom}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="button-content">
        {showButton && !isHovered && <span>&#9660;</span>}
        <span className={`button-text ${isHovered ? 'hovered' : ''}`}>
          {isHovered ? 'Contact Us' : ''}
        </span>
      </div>
    </div>
  );
};

export default ScrollButton;
