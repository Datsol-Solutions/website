import React from 'react';
import './ParallaxEffect.css'; // Import your CSS file with styles

function ParallaxEffect() {
  const containerStyle = {
    backgroundImage: `url('./')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Fixed background for the parallax effect
    minHeight: '100vh', // Ensure the container takes up the entire viewport height
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
