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

  // Function to scroll to the contact section when the button is clicked
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact'); // Replace 'contact' with the actual ID of your contact section
    if (contactSection) {
      const yOffset = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset - 50, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`scroll-button ${showButton ? 'show' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={scrollToContact} // Call the scrollToContact function
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
