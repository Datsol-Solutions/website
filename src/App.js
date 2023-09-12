// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import BackgroundVideo from './VideoBackground';
import Navibar from './Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <Route path="/" exact>
          <React.Fragment>
            <BackgroundVideo />
            
          </React.Fragment>
        </Route>
        {/* Define other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
