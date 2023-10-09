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
    text: '"Lorem ipsum dollabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: image2,
    heading: 'WHAT WE DO?',
    text: '"Loreabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: image3,
    heading: 'HOW CAN WE HELP YOU?',
    text: '"Lorem ipsum dolor sit amet, conselaboregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

function Box({ image, heading, text, delay, animation, layout }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className={`box ${animation} ${layout === 'right' ? 'box-right' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      data-aos={animation}
    >
      <div className={`info ${layout === 'right' ? 'info-right' : ''}`}>
        <h2 className='textual' data-aos="fade-up">{heading}</h2>
        <p className='textual' data-aos="fade-up">{text}</p>
      </div>
      <img className='images' src={image} alt={heading} data-aos="fade-up" />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="container">
      <h1 style={style1}>About Us</h1>
      {boxesData.map((box, index) => (
        <Box
          key={index}
          image={box.image}
          heading={box.heading}
          text={box.text}
          delay={index * 1000}
          animation={index === 1 ? 'fade-right' : 'fade-left'}
          layout={index === 1 ? 'right' : 'left'}
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
  animation: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
};

export default AboutUs;
