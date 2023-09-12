import React from 'react';
import { VideoCover } from 'react-video-cover'; // Corrected import
import './Video.css';

function BackgroundVideo() {
  const videoOptions = {
    src: 'bg1.mp4', // Replace with the path to your video file
    autoPlay: true,
    loop: true,
    muted: true,
  };

  return (
    <section className="background-video-section">
      <VideoCover videoOptions={videoOptions} />
      {/* Add other content or components you want to display on top of the video */}
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content here!</p>
      </div>
    </section>
  );
}

export default BackgroundVideo;
