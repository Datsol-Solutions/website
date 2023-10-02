import React, { useState, useEffect } from 'react';
import ServiceCard from './Card';
import './Carousel.css';
import PropTypes from 'prop-types';
const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function Carousel({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [cards, isHovered]);

  const translateValue = -activeIndex * 33.33;

  Carousel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  };
  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <h2 style={style1}> Our Services </h2>
      <div className="carousel" style={{ transform: `translateX(${translateValue}%)` }}>
        {cards.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            className={`card2 ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
Carousel.propTypes = {
  cards: PropTypes.array.isRequired,
};
export default Carousel;
