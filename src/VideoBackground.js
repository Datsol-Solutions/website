import React, { useEffect, useState } from 'react';
import './Video.css';
import video from './media/background_HD.mp4';
import logo from './media/logo_b.png';

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: 16,
};

export default function BackgroundVideo() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollPosition * 0.3; // Adjust the parallax effect strength as needed

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset - 50, behavior: 'smooth' });
    }
  };

  return (
    <section className="background-video-section">
      <div className="main" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <video src={video} autoPlay loop muted />
        <div className="logoandtagline">
          <img className="mainlogo" src={logo} alt="logo" />
          <h1 style={style2}>Implementing Innovations</h1>
        </div>
        <div className="button-container">
          <button className="button button1" onClick={scrollToContact}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
