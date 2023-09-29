import React, { useState, useEffect } from 'react';
import ServiceCard from './Card';
import './Carousel.css';

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

  const translateValue = -activeIndex * 33;

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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

export default Carousel;
