import React from 'react';
import './Video.css';
import video from './bg1.mp4';
import logo from './logo.png';

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};


export default function BackgroundVideo() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <section className="background-video-section">
      <div className="main">
        <video src={video} autoPlay loop muted />
        <div className="logoandtagline">
          <img className="mainlogo" src={logo} alt="logo" />
          <h1 style={style2}>Welcome to Our Website</h1>
        </div>
        <div className="button-container" onClick={scrollToBottom}>
          <button className="button button1">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
