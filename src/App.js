// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './OurTeam'
import ParallaxEffect from './seperation'
import AboutUsPage from './AboutUsPage';
import AchievementSection from './Achievement';
import Carousel from './Carousel';
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

function App() {
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
        <OurTeam />
      </div>
      <div>
        <AchievementSection/>
      </div>
      <div className="App">
      <Carousel cards={cardsData} />
    </div>
    </Router>
  );
}

export default App;
