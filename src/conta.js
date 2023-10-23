// conta.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessEmail: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/submit-form', formData);
      // Reset the form or show a success message
      setFormData({
        name: '',
        businessName: '',
        businessEmail: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} />
        <input type="email" name="businessEmail" placeholder="Business Email" value={formData.businessEmail} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
