import React from 'react';
import './navbar.css';
import logo from './logo.jpeg'

function Navibar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Area of Expertise</a></li>
        <li><a href="#">Our Team</a></li>
      </ul>
    </nav>
  );
}


export default Navibar;