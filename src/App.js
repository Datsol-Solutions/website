// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/" exact>
          {/* <BackgroundVideo /> */}
          
        </Route>
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
