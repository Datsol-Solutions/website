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

    // Replace 'YOUR_GOOGLE_SHEETS_CSV_LINK' with your Google Sheets link
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTx6Uf-NT1XxnuFHHyGQVV4RKJWjJzFA4V8KegL7gg9m-qqYkzqq_ovggNUVjBJm-K71ps72MDB5HSg/pub?gid=459561842&single=true&output=csv', {
      method: 'POST',
      body: new FormData(e.target),
    });

    if (response.ok) {
      // Show a success message
      alert('Form submitted successfully!');
    } else {
      // Show an error message
      alert('Error submitting the form.');
    }
  };

  return (
    <div className="contact-container">
      <div className="logo">
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
            <textarea name="message" onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
