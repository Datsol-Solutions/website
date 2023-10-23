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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform your form submission logic here, e.g., send data to an API

    // Reset the form after submission if needed
    setFormData({
      Email: '',
      Name: ''
    });
  };

  return (
    <form method="POST" action={formActionUrl} onSubmit={handleSubmit}>
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
