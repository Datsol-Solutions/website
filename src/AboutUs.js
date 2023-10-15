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
  fontSize: '4vw',
  padding: '5vw',
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
    text: <p fontSize= '10px'>At <span style={{ color: '#FFD369' }}>Datsol Solutions</span>, <span style={{ color: '#68869A' }}>we are a dynamic team that embodies qualities synonymous with excellence</span>. We&apos;re a diverse group, comprising the <span style={{ color: '#FFD369' }}>top 0.5%</span> of India&apos;s young talent, hailing from the prestigious <span style={{ color: '#FFD369' }}>Indian Institute of Technology Kharagpur</span> <span style={{ color: '#66869a' }}>(IIT Kharagpur)</span>. Our journey mirrors the path of ambitious young minds, highlighting the potential one can unleash with <span style={{ color: '#FFD369' }}>determination</span> and <span style={{ color: '#FFD369' }}>commitment</span>. We excel not only in traditional education but also in the cutting-edge realms of business and technology. Our story is a fusion of <span style={{ color: '#FFD369' }}>passion</span> and <span style={{ color: '#FFD369' }}>potential</span>, continually sparking curiosity and fueling progress.</p>,

   },
  {
    image: image2,
    heading: 'WHAT WE DO?',
    text:
      "At Datsol Solutions, we're experts in innovative and creative technical and business services, embodying our tagline, 'Implementing Innovations.' Our top-tier students from IIT Kharagpur are at the heart of this excellence. They contribute to a diverse range of projects, handling everything from initial assignment to final delivery. We ensure dedicated quality for our clients, making success accessible. We serve as the bridge between exceptional talent and impactful projects, simplifying the process for both students and companies.",
  },
  {
    image: image3,
    heading: 'WHY TRUST US?',
    text:
      "Elevate your project experience with Datsol Solutions, where excellence meets efficiency. Our elite team of IIT students ensures rapid, efficient, and cost-effective execution, delivering top-tier results while sparing you HR complexities. Trust us for a polished and professional project execution, and discover a comprehensive, one-stop solution for your project needs. Datsol Solutions: Your partner in seamless innovation and success, backed by India's top IIT talent.",
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
        <h2 className="textual" data-aos="fade-up" style={style3}>
          {heading }
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
      <h1 style={style1} fontSize='4vw'>About Us</h1>
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
