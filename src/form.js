import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessEmail: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzbgJPc6rRCe0in9J3lkr14NbJQtkdymm15BevPTgYw3OyLRE6wTaTuQqwUXB3rXr8/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! Our team will contact you soon.');
        // Clear the form
        setFormData({
          name: '',
          businessName: '',
          businessEmail: '',
          phoneNumber: '',
          message: ''
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} />
        <input type="email" name="businessEmail" placeholder="Business Email" value={formData.businessEmail} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
