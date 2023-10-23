import React, { useState } from 'react';
import './contact.css'; // Import your CSS file for styling
import Logo from './media/logo_b.png'; // Import your logo image

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessEmail: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://script.google.com/macros/s/AKfycbwcg2xtNTP1uKe6WndmX7M56z75LnpsG-eAasXKoL9vNhoWZIFw4h_dhaV1j8lE7Dk6/exec'; // Replace with your Google Apps Script web app URL
    const data = new URLSearchParams(formData);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting the form.');
    }
  };

  return (
    <div className="contact-container">
      <div className="logocontact">
        <img src={Logo} alt="Logo" className="logo-contact" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Business Name</label>
            <input type="text" name="businessName" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Business Email</label>
            <input type="email" name="businessEmail" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
