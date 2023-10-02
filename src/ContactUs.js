import React, { useRef, useState } from 'react';
import './ContactUs.css'; // Import your CSS file with styles
import Logo from './logo.png'; // Import your logo image

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef(); // Add a reference for the phone number input
  const queryRef = useRef(); // Add a reference for the query input
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to hold the form data
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value, // Get the phone number value
      query: queryRef.current.value, // Get the query value
    };

    // Send the formData object to your Google Sheets using a fetch request or any preferred method
    try {
      setLoading(true);

      // Use the fetch API to send the form data to your server or Google Sheets
      const response = await fetch('/api/submit-contact-form', {
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

  return (
    <div className="contact-us-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="form-container">
        <h2 style={style1}>Contact Us</h2>
        <form className="for" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={style1}>Name:</label>
            <input ref={nameRef} style={style2} type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={style1}>Email:</label>
            <input ref={emailRef} style={style2} type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={style1}>Phone Number:</label>
            <input ref={phoneRef} style={style2} type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="query" style={style1}>Query:</label>
            <textarea ref={queryRef} style={style2} id="query" placeholder="Enter your query" rows="4" required />
          </div>
          <div className="form-group">
            <button className="btn" style={style1} disabled={loading} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
