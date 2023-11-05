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

const handleGmailClick = (event) => {
  // Prevent the default behavior (page refresh) of the anchor element
  event.preventDefault();

  // Display an alert message with the email ID link
  // window.alert(`Email ID: ${props.gmaillink}`);
  // Create a Gmail compose URL with the 'mailto' link format
  const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=datsolsolutions@gmail.com`;

  // Open a new window or tab with the Gmail compose URL
  window.open(gmailComposeURL, '_blank');
};


const Footer = () => {
  return (
    <footer className="footer" style={style2}>
      <div className="footer-columns">
      <div className="footer-column">
        <p><h4><b>Datsol Solutions</b></h4> <br/>IIT Kharagpur, India - 721302</p>
          <p className='items'>
            <a className='maillink' href="" onClick={handleGmailClick}>
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
