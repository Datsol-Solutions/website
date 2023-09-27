import React, { useEffect, useState } from 'react';
import './AboutUsPage.css';

function AboutUsPage() {
  const [animationStates, setAnimationStates] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // Calculate the percentage scrolled
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Define the threshold for triggering animations gradually (adjust as needed)
      const triggerThreshold = 20; // Adjust this value to control when animations start

      // Check if each division is in the viewport and trigger animations gradually
        animationStates.forEach((animate, index) => {
          if (!animate && scrollPercentage >= triggerThreshold * index) {
            const updatedStates = [...animationStates];
            updatedStates[index] = true;
            setAnimationStates(updatedStates);
          }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationStates]);

  return (
    <div className="about-us-container">
      <div>ABOUT US</div>
      <div
        id="about-us-row-0"
        className={`about-us-row ${animationStates[0] ? 'fade-in-left' : ''}`}
      >
        <div className="about-us-box">
          <div className="about-us-image-0">Image 1</div>
          <div className="about-us-text">Text 1</div>
        </div>
      </div>
      <div
        id="about-us-row-1"
        className={`about-us-row ${animationStates[1] ? 'fade-in-right' : ''}`}
      >
        <div className="about-us-box">
          <div className="about-us-text">Text 2</div>
          <div className="about-us-image-1">Image 2</div>
        </div>
      </div>
      <div
        id="about-us-row-2"
        className={`about-us-row ${animationStates[2] ? 'fade-in-left' : ''}`}
      >
        <div className="about-us-box">
          <div className="about-us-image-2">Image 3</div>
          <div className="about-us-text">Text 3</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
