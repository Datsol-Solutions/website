import React from 'react';
import PropTypes from 'prop-types';


function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="card2">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ServiceCard;

