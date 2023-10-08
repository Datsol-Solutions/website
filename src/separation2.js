
import React, { useState, useEffect } from 'react';
import './separation2.css'; // Import your CSS file with styles

function ParallaxEffect2() {
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
  const backgroundPositionY = scrollPosition * 0.25 + 'px';

  const containerStyle = {
    backgroundImage: `url('/s2.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: `center ${backgroundPositionY}`,
    backgroundAttachment: 'fixed',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>

    </div>
  );
}

export default ParallaxEffect2;

