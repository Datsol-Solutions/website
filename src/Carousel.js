import React, { useState, useEffect } from 'react';
import ServiceCard from './Card';
import './Carousel.css';
import PropTypes from 'prop-types';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
  margin: '5vw',
};

// Define a new set of card data
const newCards = [
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

function Carousel({ cards }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState(cards.length - 1);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate translateValue to achieve the desired layout
  const cardWidth = 26.66; // Width of each card in percentage
  const screenWidth = 80; // Total screen width in percentage
  const translateValue = -(activeIndex * cardWidth) + 10; // Adjusted translateValue


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [cards, isHovered]);

  useEffect(() => {
    if (activeIndex === lastIndex) {
      setActiveIndex(0);
    }
  }, [activeIndex, lastIndex]);

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 style={style1}> Our Services </h1>
      <div className="carousel" style={{ transform: `translateX(${translateValue}%)` }}>
        {cards.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            description={card.description}
            className={`card2 ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

// Pass the newCards array as a prop to the Carousel component
function App() {
  return (
    <div>
      <Carousel cards={newCards} />
    </div>
  );
}

// Combined PropTypes definition
Carousel.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
