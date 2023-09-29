// ContactUs.js
import React from 'react';
import './ContactUs.css'; // Import your CSS file with styles
import Logo from './logo.jpeg'; // Import your logo image

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
