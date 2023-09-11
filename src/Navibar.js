import React from 'react';
import './navbar.css';
import logo from './logo.jpeg'

function Navibar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {logo}
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}


export default Navibar;