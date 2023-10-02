import React, { useRef, useState, useEffect } from 'react';
import './ContactUs.css'; // Import your CSS file with styles
import Logo from './logo.png'; // Import your logo image
import emailjs from '@emailjs/browser';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function ContactUs() {
  const emailRef = useRef();
  const nameRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("2WofZQzBCpYkpNIJI"); // public key
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_scc5n2u";
    const templateId = "template_4x1a0nq";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
      });
      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      console.log(error);
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
        {/* <form className="for" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={style1}>Name:</label>
            <input ref={nameRef} style={style2} type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={style1}>Email:</label>
            <input ref={emailRef} style={style2} type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <button className="btn" style={style1} disabled={loading} type="submit">
              Submit
            </button>
          </div>
        </form> */}
        {/* Add your Google Form iframe below */}
        <iframe className='details' src="https://docs.google.com/forms/d/e/1FAIpQLSeUeI-rZNLGRgXGROUu3oYwJ_bgfilMlqlRw5dqzfSpj1mwgg/viewform?embedded=true" width="640" height="1212" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
    </div>
  );
}

export default ContactUs;
