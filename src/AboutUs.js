import React, { useEffect } from 'react';
import './AboutUs.css';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image3 from './media/How_we_help_you.jpg';
import image1 from './media/Who_we_are.png';
import image2 from './media/What_we_do.jpg';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

const boxesData = [
  {
    image: image1,
    heading: 'WHO WE ARE?' ,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: image2,
    heading: 'WHAT WE DO?',
    text: 'Nulla quis lorem ut libero malesuada feugiat.',
  },
  {
    image: image3,
    heading: 'HOW CAN WE HELP YOU?',
    text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
  },
];

function Box({ image, heading, text, delay, animation }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className={`box ${animation}`}
      style={{ animationDelay: `${delay}ms` }}
      data-aos={animation}
    >
      <img className='images' src={image} alt={heading} data-aos="fade-up" />
      <div className='info'><h2 data-aos="fade-up">{heading}</h2>
      <p data-aos="fade-up">{text}</p></div>
      
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
          delay={index * 1000}
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
