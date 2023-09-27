import React, { useState, useEffect } from 'react';
import './AboutUs.css'; // Import your CSS file for styling

function AboutUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add a delay to the animation to create the desired sequence
    setTimeout(() => {
      setAnimate(true);
    }, 500); // Adjust the delay as needed
  }, []);

  return (
    <div className="about-us-container">
      <div className={`about-us-box ${animate ? 'fade-in-left' : ''}`}>
        <div className="about-us-image">Image 1</div>
        <div className="about-us-text">Text 1</div>
      </div>
      <div className={`about-us-box ${animate ? 'fade-in-right' : ''}`}>
        <div className="about-us-image">Image 2</div>
        <div className="about-us-text">Text 2</div>
      </div>
      <div className={`about-us-box ${animate ? 'fade-in-left' : ''}`}>
        <div className="about-us-image">Image 3</div>
        <div className="about-us-text">Text 3</div>
      </div>
    </div>
  );
}

export default AboutUs;
