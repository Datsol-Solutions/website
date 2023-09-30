import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './OurTeam';
import ParallaxEffect from './seperation';
import AboutUsPage from './AboutUsPage';
import Achievement from './Achievement';
import Carousel from './Carousel';
import './ContactUs.css'; // Import your CSS file with styles
import Logo from './logo.jpeg'; // Import your logo image


export default function App() {
  const emailRef = useRef();
  const nameRef = useRef();
  const [loading, setLoading] = useState(false);

  const cardsData = [
    {
      title: 'Card 1',
      description: 'Description 1',
      imageSrc: 'card1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description 2',
      imageSrc: 'card2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Description 3',
      imageSrc: 'card3.jpg',
    },
    {
      title: 'Card 4',
      description: 'Description 2',
      imageSrc: 'card2.jpg',
    },
    {
      title: 'Card 5',
      description: 'Description 3',
      imageSrc: 'card3.jpg',
    },
    // Add more card data as needed
  ];

  useEffect(() => {
    emailjs.init("2WofZQzBCpYkpNIJI");//public key
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
    <Router>
      <Navibar />
      <div>
      
        <BackgroundVideo />
      </div>
      <div>
        <AboutUsPage />
      </div>
      <div>
        <ParallaxEffect />
      </div>
      <div>
        <Achievement />
      </div>
      <div>
        <OurTeam />
      </div>
      <div className="App">
        <Carousel cards={cardsData} />
      </div>
      <div className="contact-us-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        {/* <aside></aside> */}
        <div className="form-container">
          <h2>Contact Us</h2>
          <form className="for" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input ref={nameRef} type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input ref={emailRef} type="email" id="email" placeholder="Enter your email" required/>
            </div>
            <div className="form-group">
              <button className="btn" disabled={loading} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Router>
  );
}
