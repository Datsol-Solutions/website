import React, { useState, useEffect, useRef } from 'react';
import './Achievement.css';
import worldmap from './worldmap.gif';

const AchievementSection = () => {
  const [numberClients, setNumberClients] = useState(0);
  const [numberEmployees, setNumberEmployees] = useState(0);
  const [capital, setCapital] = useState(0);
  const [sectionAppeared, setSectionAppeared] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = sectionRef.current.offsetTop;
      const progress = Math.max(0, Math.min(1, scrollPosition / (sectionPosition + 300)));

      if (progress > 0.8 && !sectionAppeared) {
        setSectionAppeared(true);

        // Assuming user inputs are in state or props
        const targetNumberClients =  1000;
        const targetNumberEmployees =  50;
        const targetCapital = 2000000;

        animateNumber('numberClients', targetNumberClients);
        animateNumber('numberEmployees', targetNumberEmployees);
        animateNumber('capital', targetCapital);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionAppeared]);

  const animateNumber = (type, targetValue) => {
    let startValue = 0;
    const step = targetValue / 60; // Assuming 60 frames per second for smooth animation

    const intervalId = setInterval(() => {
      startValue += step;
      startValue = Math.min(startValue, targetValue);

      switch (type) {
        case 'numberClients':
          setNumberClients(Math.floor(startValue));
          break;
        case 'numberEmployees':
          setNumberEmployees(Math.floor(startValue));
          break;
        case 'capital':
          setCapital(Math.floor(startValue));
          break;
        default:
          break;
      }

      if (startValue >= targetValue) {
        clearInterval(intervalId);
      }
    }, 16.67); // 1000ms / 60 frames = 16.67ms per frame
  };

  return (
    <div>
         <div  className='header_achievement'>
        <h4> Achievements/Testimonials </h4>
    </div>
    <div id="achievement-section" className="achievement-section" ref={sectionRef}>
      <div className="map-gif">
        <img src={worldmap} alt="World Map" />
      </div>
      <div className="text-content">
        <div className="achievement-item">
          <h5 className='number_text'>Number of Clients</h5>
          <p className='numbers'>{numberClients}+</p>
        </div>
        <div className="achievement-item">
        <p className='numbers'>{numberEmployees}+</p>
          <h5 className='number_text'>Number of Employees</h5>
        </div>
        <div className="achievement-item">
          <h5 className='number_text'>Capital</h5>
          <p className='numbers'>${capital}+</p>
        </div>
      </div>
    </div>
    </div>

    
  );
};

export default AchievementSection;
