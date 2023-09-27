import React, { useEffect, useState } from 'react';
import './AboutUs.css';

const boxesData = [
  {
    image: 'image1.jpg',
    heading: 'Box 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'image2.jpg',
    heading: 'Box 2',
    text: 'Nulla quis lorem ut libero malesuada feugiat.',
  },
  {
    image: 'image3.jpg',
    heading: 'Box 3',
    text: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
  },
];

function Box({ image, heading, text, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`box fade-${isVisible ? 'in' : 'out'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={image} alt={heading} />
      <h2>{heading}</h2>
      <p>{text}</p>
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
          delay={index * 1000} // Adjust the delay as needed
        />
      ))}
    </div>
  );
}

export default AboutUs;
