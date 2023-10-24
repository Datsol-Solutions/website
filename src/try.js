import React, { useState } from 'react';
import PropTypes from 'prop-types';

function MyForm({ formActionUrl }) {
  const [formData, setFormData] = useState({
    Email: '',
    Name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(formActionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! Your data has been submitted.');
        setFormData({
          Email: '',
          Name: ''
        });
      } else {
        alert('Failed to submit the data. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the data.');
    }
  };

  return (
    <form method="POST" mode='no-cors' onSubmit={handleSubmit}>
      <input
        name="Email"
        type="email"
        placeholder="Email"
        required
        value={formData.Email}
        onChange={handleChange}
      />
      <input
        name="Name"
        type="text"
        placeholder="Name"
        required
        value={formData.Name}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
}

MyForm.propTypes = {
  formActionUrl: PropTypes.string.isRequired,
};

export default MyForm;
