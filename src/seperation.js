
import React, { useState, useEffect } from 'react';
import './seperation.css'; // Import your CSS file with styles

function ParallaxEffect() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Update the scroll position when the user scrolls
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the background position based on the scroll position
  const backgroundPositionY = scrollPosition * 0.2 + 'px';

  const containerStyle = {
    backgroundImage: `url('/seperation.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: `center ${backgroundPositionY}`,
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>Your Content Goes Here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default ParallaxEffect;

