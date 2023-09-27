// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurTeam from './OurTeam'
function App() {
  return (
    <Router>
      <Navibar />
      <div>
        <BackgroundVideo />
      </div>
      <div>
        <OurTeam />
      </div>
    </Router>
  );
}

export default App;
