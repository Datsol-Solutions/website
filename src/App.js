import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './OurTeam';
import ParallaxEffect from './seperation';
import AboutUs from './AboutUs';
import Achievement from './Achievement';
import Carousel from './Carousel';
import ContactForm from './contact';
import ScrollButton from './ScrollButton';
import Footer from './Footer';
import ParallaxEffect2 from './separation2';

export default function App() {
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
    {
      title: 'Card 6',
      description: 'Description 6',
      imageSrc: 'card3.jpg',
    },
    {
      title: 'Card 7',
      description: 'Description 7',
      imageSrc: 'card3.jpg',
    },
    {
      title: 'Card 8',
      description: 'Description 8',
      imageSrc: 'card3.jpg',
    },
    {
      title: 'Card 9',
      description: 'Description 9',
      imageSrc: 'card3.jpg',
    },
    // Add more card data as needed
  ];

  return (
    <Router>
      <div className='navigation-bar abc'>
      <Navibar />
      </div>
      <div className='rest-content abc'>
      <ScrollButton />
      <section id="home">
        <div>
          <BackgroundVideo />
        </div>
      </section>
      <section id="about">
        <div>
          <AboutUs />
        </div>
        <div>
          <ParallaxEffect />
        </div>
      </section>
      
      
      <section id="achievements">
        <div>
          <Achievement />
        </div>
      </section>
        
      <section id="services">
        <div className="App">
          <Carousel cards={cardsData} />
        </div>
        <div>
          <ParallaxEffect2 />
        </div>
      </section>
      <section id="ourteam">
        <div>
          <OurTeam />
        </div>
      </section>
      <section id="contact">
        <div>
          <ContactForm />
        </div>
      </section>
      <Footer />
      </div>
    </Router>
  );
}
