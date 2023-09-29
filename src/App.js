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
import Achievement from './Achievement';
import ContactUs from './ContactUs';
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
        <Achievement />
      </div>
      <div>
        <OurTeam />
      </div>
      <div>
        <ContactUs />
      </div>
    </Router>
  );
}

export default App;
