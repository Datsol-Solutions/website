// VideoBackground.js
import React, { useState } from 'react';
import { VideoBackground } from 'react-video-cover';

function BackgroundVideo() {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      const video = document.querySelector('video');
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div className="video-player">
        <video controls>
          <source src="bg1.mp4" type="video/mp4" />
          {/* Add additional source elements for different formats if needed */}
          Your browser does not support the video tag.
        </video>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    );
}

export default BackgroundVideo;
