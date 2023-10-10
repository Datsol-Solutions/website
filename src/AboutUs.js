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
    text:'We are a dynamic company, exclusively composed of students from the prestigious Indian Institute of Technology Kharagpur (IIT Kharagpur). Recognized for its rigorous academic standards and an exceptionally low acceptance rate of just 0.5%, IIT Kharagpur is renowned in India. As IITians, we epitomize qualities synonymous with our educational background: an unwavering dedication, unrelenting perseverance, and an unyielding commitment to excellence. These shared attributes propel us not only in our academic pursuits but also ignite our drive to deliver exceptional results in the realms of business and technology.'
  },
  {
    image: image2,
    heading: 'WHAT WE DO?',
    text: "At Datsol Solutions, we're experts in innovative and creative technical and business services, embodying our tagline, 'Implementing Innovations.' Our top-tier students from IIT Kharagpur are at the heart of this excellence. They contribute to a diverse range of projects, handling everything from initial assignment to final delivery. We ensure dedicated quality for our clients, making success accessible. We serve as the bridge between exceptional talent and impactful projects, simplifying the process for both students and companies.",
  },
  {
    image: image3,
    heading: 'WHY TRUST US?',
    text: "Elevate your project experience with Datsol Solutions, where excellence meets efficiency. Our elite team of IIT students ensures rapid, efficient, and cost-effective execution, delivering top-tier results while sparing you HR complexities. Trust us for a polished and professional project execution, and discover a comprehensive, one-stop solution for your project needs. Datsol Solutions: Your partner in seamless innovation and success, backed by India's top IIT talent.",
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
