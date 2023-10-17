import React, { useState, useEffect } from 'react';
import './seperation.css'; // Import your CSS file with styles

function ParallaxEffect() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundPositionY = scrollPosition * 0.025 + 'px';

  const containerStyle = {
    backgroundImage: `url('/s1.jpg')`,
    backgroundSize: 'cover', // Set background size to 'cover'
    backgroundPosition: `center ${backgroundPositionY}`,
    backgroundAttachment: 'fixed',
    height: '70vh', // Set the desired height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle} className="parallax-container">
      {/* Your content here */}
    </div>
  );
}

export default ParallaxEffect;
