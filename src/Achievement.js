import React, { useState, useEffect, useRef } from 'react';
import './Achievement.css';
// import worldmap from './media/worldmap.gif';
import WorldMap from "react-svg-worldmap";

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
  margin: '5vw',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

const AchievementSection = () => {
  const [numberProjects, setnumberProjects] = useState(0);
  const [numberTeamMembers, setnumberTeamMembers] = useState(0);
  const [companies, setcompanies] = useState(0);
  const [sectionAppeared, setSectionAppeared] = useState(false);
  const sectionRef = useRef(null);

  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = sectionRef.current.offsetTop;
      const progress = Math.max(0, Math.min(1, scrollPosition / (sectionPosition + 300)));

      if (progress > 0.8 && !sectionAppeared) {
        setSectionAppeared(true);

        // Assuming user inputs are in state or props
        const targetnumberProjects =  11;
        const targetnumberTeamMembers =  22;
        const targetcompanies = 34;

        animateNumber('numberProjects', targetnumberProjects);
        animateNumber('numberTeamMembers', targetnumberTeamMembers);
        animateNumber('companies', targetcompanies);
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
        case 'numberProjects':
          setnumberProjects(Math.floor(startValue));
          break;
        case 'numberTeamMembers':
          setnumberTeamMembers(Math.floor(startValue));
          break;
        case 'companies':
          setcompanies(Math.floor(startValue));
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
        <h1 style={style1}> Achievements/Testimonials </h1>
    </div>
    <div id="achievement-section" className="achievement-section" ref={sectionRef}>
      <div className="map-gif">
      <WorldMap
        color="Blue"
        title="Our Clients"
        value-suffix="people"
        size="lg"
        data={data}

      />
      </div>
      <div className="text-content">
        <div className="achievement-item">
          <h5 className='number_text' style={style2}>Number of projects </h5>
          <p className='numbers'>{numberProjects}+</p>
        </div>
        <div className="achievement-item">
        <p className='numbers'>{numberTeamMembers}+</p>
          <h5 className='number_text' style={style2}>Number of Team Members</h5>
        </div>
        <div className="achievement-item">
          <h5 className='number_text' style={style2}>Companies served</h5>
          <p className='numbers'>{companies}+</p>
        </div>
      </div>
    </div>
    </div>

    
  );
};

export default AchievementSection;
