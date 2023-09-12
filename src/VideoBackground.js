import React from 'react';
//import { VideoCover } from 'react-video-cover'; // Corrected import
import './Video.css';
import video from './bg1.mp4'

function BackgroundVideo() {
  // const videoOptions = {
  //   src: {video}, // Replace with the path to your video file
  //   autoPlay: true,
  //   loop: true,
  //   muted: true,
  // };
  
  return (
    <section>
       <div className='main'>

        <video src={video} autoPlay loop muted/>

    </div>
    <div className="content">
        <h1>Welcome to Our Website</h1>
         <p>Discover amazing content here!</p>
      </div>
    </section>
    
  )

  // return (
  //   <section className="background-video-section">
  //     <VideoCover videoOptions={videoOptions} />
  //     {/* Add other content or components you want to display on top of the video */}
  //     <div className="content">
  //       <h1>Welcome to Our Website</h1>
  //       <p>Discover amazing content here!</p>
  //     </div>
  //   </section>
  // );
}

export default BackgroundVideo;
