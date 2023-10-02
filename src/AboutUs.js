import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';


const boxesData = [
  {
    image: 'image1.jpg',
    heading: 'Box 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'image2.jpg',
    heading: 'Box 2',
    text: 'Nulla quis lorem ut libero malesuada feugiat.',
  },
  {
    image: 'image3.jpg',
    heading: 'Box 3',
    text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
  },
];

function Box({ image, heading, text, delay, animation }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the animation duration as needed
      once: false, // Set to true if you want animations to occur only once
    });
  }, []);

  return (
    <div
      className={`box ${animation}`}
      style={{ animationDelay: `${delay}ms` }}
      data-aos={animation}
    >
      <img src={image} alt={heading} data-aos="fade-up" />
      <h2 data-aos="fade-up">{heading}</h2>
      <p data-aos="fade-up">{text}</p>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="container">
      {boxesData.map((box, index) => (
        <Box
          key={index}
          image={box.image}
          heading={box.heading}
          text={box.text}
          delay={index * 1000} // Adjust the delay as needed
          animation={index === 1 ? 'fade-right' : 'fade-left'}
        />
      ))}
    </div>
  );
}
Box.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  animationDirection: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};
export default AboutUs;
