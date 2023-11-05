// Footer.js

import React from 'react';
import './Footer.css';
import email from './media/email.png';
import dial from './media/phone.png';
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
        <p>Datsol Solutions <br/>IIT Kharagpur, India - 721302</p>
          <p className='items'>
            <a className='maillink' href="mailto:datsolsolutions@gmail.com?subject=">
              <img className='dial-icon' src={email} alt="Email" /> datsolsolutions@gmail.com
            </a>
          </p>
          <a className='items' href="tel:+91 9044750387">
            <img className='dial-icon' src={dial} alt="Phone" />+91 9044750387
          </a>
          <a className='items' href="tel:+91 7060529746">
            <img className='dial-icon' src={dial} alt="Phone" />+91 7060529746
          </a>
          
          
        </div>
      
        <div className="footer-column">
          <a className='items' href="#home">Back to top</a>
          <a className='items' href="#about">About Us</a>
          <a className='items' href="#achievements">Achievements</a>
          <a className='items' href="#services">Services</a>
          <a className='items' href="#ourteam">Our Team</a>
        </div>
        </div>

        

      <hr className="footer-divider" />
      <p className="footer-company">Copyright © 2023datsolsolutions.com</p>
    </footer>
  );
};

export default Footer;
