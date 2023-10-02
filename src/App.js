import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './OurTeam';
import ParallaxEffect from './seperation';
import AboutUsPage from './AboutUsPage';
import Achievement from './Achievement';
import Carousel from './Carousel';
import ContactUs from './ContactUs';
import ScrollButton from './ScrollButton';
import Footer from './Footer';

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
      <Navibar />
      <ScrollButton />
      <section id="home">
        <div>
          <BackgroundVideo />
        </div>
      </section>
      <section id="about">
        <div>
          <AboutUsPage />
        </div>
        <div>
          <ParallaxEffect />
        </div>
      </section>
      <section id="services">
        <div>
          <Achievement />
        </div>
        <div className="App">
          <Carousel cards={cardsData} />
        </div>
      </section>
      <section id="ourteam">
        <div>
          <OurTeam />
        </div>
      </section>
      <section id="contact">
        <div>
          <ContactUs />
        </div>
      </section>
      <Footer />
    </Router>
  );
}
