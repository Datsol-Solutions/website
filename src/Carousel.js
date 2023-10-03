import React, { useState, useEffect } from 'react';
import ServiceCard from './Card';
import './Carousel.css';
import PropTypes from 'prop-types';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

function Carousel({ cards }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Ensure at least 3 cards are in the array
  if (cards.length < 3) {
    cards = [...cards, ...cards, ...cards]; // Duplicate cards to ensure at least 3
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [cards, isHovered]);

  // Calculate translateValue to achieve the desired layout
  const cardWidth = 26.66; // Width of each card in percentage
  const screenWidth = 80; // Total screen width in percentage
  const translateValue = -(activeIndex * cardWidth) + 26.66; // Adjusted translateValue

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
// Add prop type validation
Carousel.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  })).isRequired,
};
export default Carousel;
