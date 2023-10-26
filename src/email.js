import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './email.css';
import logo from './media/logo_b.png';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_zbs7ivc';
    const templateId = 'template_7e98q9k';
    const publicKey = 'A8vcwyJZlHICUnjIt';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: name,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        alert('Thank you! Your message has been received. Our team will get in touch with you soon.');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Oops! There was an error submitting your application. Please try again later.');
      });
  };

  return (
    <div className="formcontainer">
      <div className="contactlogo">
        <img src={logo} alt='Your Company Logo' />
      </div>
      <form onSubmit={handleSubmit} className="emailForm">
      <h1 style={style1}>Contact Us</h1>
        <label htmlFor="name" style={style1}>
              <h5>Name:</h5>
          </label>
          <input
            name="name"
            style={style2}
            type="text"
            placeholder="Enter your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        <label htmlFor="email" style={style1}>
              <h5>Email:</h5>
          </label>
        <input
          name="email"
          style={style2}
          type="email"
          placeholder="Enter your Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message" style={style1}>
              <h5>Message:</h5>
            </label>
        <textarea
        name="message"
        style={style2}
          cols="30"
          rows="4"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="button-content" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
