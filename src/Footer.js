// Footer.js

import React from 'react';
import './Footer.css';
const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

const Footer = () => {
  return (
    <footer className="footer" style={style2}>
      <div className="footer-columns">
        <div className="footer-column">
          <a className='items' href="#home">Back to top</a>
          <a className='items' href="#about">About Us</a>
          <a className='items' href="#services">Services</a>
          <a className='items' href="#ourteam">Our Team</a>
        </div>

        <div className="footer-column">
          <p className='items'>Mail-<a className='maillink' href="mailto:datsolsolutions@gmail.com?subject="> datsolsolutions@gmail.com</a></p>
          <p className='items'>Ph No.- 7821040764</p>
          <p className='items'>Ph No.- 7060529746</p>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-company">Copyright © 2023datsolsolutions.com</p>
    </footer>
  );
};

export default Footer;
