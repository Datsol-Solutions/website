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
  margin: '5vw',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};
const style3 = {
  fontFamily: 'Rokkitt, sans-serif',
  fontSize: '2vw',
};
const boxesData = [
  {
    image: image1,
    heading: 'WHO WE ARE?',
    text: <p>At Datsol Solutions, <span style={{ color: '#68869A' }}>we are a dynamic team that embodies qualities synonymous with excellence</span>. We&apos;re a diverse group, comprising the <span style={{ color: '#FFD369' }}>top 0.5%</span> of India&apos;s young talent, hailing from the prestigious <span style={{ color: '#FFD369' }}>Indian Institute of Technology Kharagpur</span> <span style={{ color: '#66869a' }}>(IIT Kharagpur)</span>. Our journey mirrors the path of ambitious young minds, highlighting the potential one can unleash with determination and commitment. We excel not only in traditional education but also in the cutting-edge realms of business and technology. Our story is a fusion of passion and potential, continually sparking curiosity and fueling <span style={{ color: '#FFD369' }}>progress</span>.</p>,

   },
  {
    image: image2,
    heading: 'WHAT WE DO?',
    text: <p>At Datsol Solutions, <span style={{ color: '#68869A' }}>we excel in pioneering and creative technical and business services, epitomizing our tagline,</span> <span style={{ color: '#FFD369' }}>&apos;Implementing Innovations.&apos;</span> Our team, handpicked from the elite talent pool of <span style={{ color: '#FFD369' }}>IIT Kharagpur</span>, takes on a diverse spectrum of projects, managing them from inception to completion. This comprehensive approach guarantees unwavering <span style={{ color: '#FFD369' }}>quality</span> for our clients, offering a simplified path to success. We serve as the conduit between exceptional talent and high-impact projects, streamlining the process for both students and companies.</p>,
      },
  {
    image: image3,
    heading: 'WHY TRUST US?',
    text:
     <p> <span style={{ color: '#68869A' }}>Elevate your project experience with Datsol Solutions, where excellence meets efficiency</span>. Our elite team of IIT students ensures <span style={{ color: '#FFD369' }}>rapid, efficient</span>, and <span style={{ color: '#FFD369' }}>cost-effective execution</span>, delivering top-tier results while sparing you HR complexities. Trust us for a polished and professional project execution, and discover a comprehensive, one-stop solution for your project needs. Datsol Solutions: <span style={{ color: '#68869A' }}>Your partner in seamless innovation and success</span>, backed by India&apos;s top IIT talent.</p>,
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
      <img className="images" src={image} alt={heading} data-aos="fade-up" />
      <div className={`info ${layout === 'right' ? 'info-right' : ''}`}>
        <h2 className="textual" data-aos="fade-up" style={style2}>
          <b>{heading }</b>
        </h2>
        <p className="textual" data-aos="fade-up" style={style2}>
          {text}
        </p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="container">
      <h1 style={style1}>About Us</h1>
      {boxesData.map((box, index) => (
        <Box
          style={style2}
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
