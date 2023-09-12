// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
function App() {
  return (
    <Router>
      <Navibar />
      <div>
        <BackgroundVideo/>
      </div>
    </Router>
  );
}

export default App;
