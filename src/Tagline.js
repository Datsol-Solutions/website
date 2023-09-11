// Tagline.js
import React from 'react';

function Tagline() {
  // Your tagline text goes here
  const tagline = "Your Website Tagline";

  return (
    <div className="App">
      <header>
        <h1>Your Website Name</h1>
        <p>{tagline}</p> {/* Display the tagline here */}
      </header>
      {/* Rest of your website content */}
    </div>
  );
}

export default Tagline;
