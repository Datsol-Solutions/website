import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file with styles
import Logo from './media/logo_b.png'; // Import your logo image
import { GoogleSpreadsheet } from 'google-spreadsheet'; // Import the Google Spreadsheet library

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function ContactUs() {
  const [formData, setFormData] = useState({});

  const {
    REACT_APP_PRIVATE_KEY,
    REACT_APP_CLIENT_EMAIL,
    REACT_APP_SPREADSHEET_ID,
    REACT_APP_SHEET_ID
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

      const result = await sheet.addRow(row);

      return result;
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    appendSpreadsheet(formData);
  };

  // Keep the commented code for reference
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to hold the form data
    const formData = {
      name: nameRef.current.value,
      businessEmail: businessEmailRef.current.value,
      businessName: businessNameRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    // Send the formData object to your Google Sheets using a fetch request
    try {
      setLoading(true);

      // Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL' with your Google Apps Script endpoint URL
      const response = await fetch('https://script.google.com/macros/s/AKfycbxvNidV0cwn_Ovnl9PRuEYyc1eGvpxNbyd9tNBBTKSuPSzGuvWZlYrA0rn3NArAwYkN/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for contacting us!'); // Display a success message
      } else {
        alert('Something went wrong. Please try again later.'); // Display an error message
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  */

  return (
    <div id="contact" className="contact-us-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-contact" />
      </div>
      <div className="form-container">
        <h1 style={style1}>Contact Us</h1>
        <form method="post" className="for" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={style1}>
              Name:
            </label>
            <input
              name="name"
              style={style2}
              type="text"
              id="name"
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
