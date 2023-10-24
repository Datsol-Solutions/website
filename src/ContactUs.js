import React, { useState } from 'react';
import './ContactUs.css';
import Logo from './media/logo_b.png';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    businessName: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    REACT_APP_PRIVATE_KEY,
    REACT_APP_CLIENT_EMAIL,
    REACT_APP_SPREADSHEET_ID,
    REACT_APP_SHEET_ID,
  } = process.env;

  const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: REACT_APP_CLIENT_EMAIL,
        private_key: REACT_APP_PRIVATE_KEY,
      });

      await doc.loadInfo();

      const sheet = doc.sheetsById[REACT_APP_SHEET_ID];

      await sheet.addRow(row);

      setSuccessMessage('Form submitted successfully');
      setErrorMessage(''); // Clear any previous error message
    } catch (e) {
      console.error('Error: ', e);
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    appendSpreadsheet(formData);
  };

  return (
    <div id="contact" className="contact-us-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-contact" />
      </div>
      <div className="form-container">
        <h1 style={style1}>Contact Us</h1>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form className="for" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={style1}>
              Name:
            </label>
            <input
              name="name"
              style={style2}
              type="text"
              id="name"
              value={formData.name}
              placeholder="Enter your name"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessEmail" style={style1}>
              Business Email:
            </label>
            <input
              name="businessEmail"
              style={style2}
              type="email"
              id="businessEmail"
              value={formData.businessEmail}
              placeholder="Enter your business email"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessName" style={style1}>
              Business Name:
            </label>
            <input
              name="businessName"
              style={style2}
              type="text"
              id="businessName"
              value={formData.businessName}
              placeholder="Enter your business name"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={style1}>
              Phone Number:
            </label>
            <input
              name="phone"
              style={style2}
              type="tel"
              id="phone"
              value={formData.phone}
              placeholder="Enter your phone number"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={style1}>
              Message:
            </label>
            <textarea
              name="message"
              style={style2}
              id="message"
              value={formData.message}
              placeholder="Enter your message"
              rows="4"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button className="btn" style={style1} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
