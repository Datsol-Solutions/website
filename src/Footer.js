// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <p><b>Get to know us</b></p>
          <p>Text 1</p>
          <p>Text 2</p>
          <p>Text 3</p>
        </div>

        <div className="footer-column">
          <p><b>Contact us</b></p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>

        <div className="footer-column">
          <p><b>Support and Education</b></p>
          <p>Terms and Conditions</p>
          <p>Text 2</p>
          <p>Text 3</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-company">© Datsol Solutions</p>
    </footer>
  );
};

export default Footer;
