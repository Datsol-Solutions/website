import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './services.css'

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
  margin: '5vw',
};

const cards = [
  {
    title: 'Software Development',
    description: 'We craft software solutions that turn your ideas into efficient, user-friendly, and scalable digital realities',
  },
  {
    title: 'AI & ML Applications',
    description: 'We are experts in harnessing AI and ML to realize your vision and enhancing model performance, all while tailored to your unique requirements.',
  },
  {
    title: 'Strategy & Consulting',
    description: 'We are your partners in navigating the complex landscape of business, offering expert data-driven strategies to propel your company towards success.',
  },
  {
    title: 'Finance & Analytics',
    description: 'We meld deep financial acumen and technical proficiency to craft tailored financial analysis and evaluation models that precisely meet your needs.',
  },
];

const Article = ({ data }) => {
  const { title, description } = data;
  return (
    <figure className="snip1584 card2">
      <figcaption>
        <h3>{title}</h3>
        <h5>{description}</h5>
      </figcaption>
      <a href="#"></a>
    </figure>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const News = ({ data }) => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h1 style={style1}>Our Services</h1>
      <Slider ref={slider} {...settings}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <Article data={item} />
            </div>
          ))
        ) : (
          <p>Please add some cards</p>
        )}
      </Slider>
    </div>
  );
};

News.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Carousel2 = () => {
  return (
    <div>
      <News data={cards} />
    </div>
  );
};

export default Carousel2;
