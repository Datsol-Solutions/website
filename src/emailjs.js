import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './email.css';
import 
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_smx66xn', 'template_4x1a0nq', form.current, '2WofZQzBCpYkpNIJI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container">
      <div className="logo">
        {/* Your logo content */}
        <img src="logo" alt="Your Logo" />
      </div>
    <form ref={form} onSubmit={sendEmail} className='emailForm'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactUs;