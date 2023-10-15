import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; 

function ServiceCard({ title, description}) {
  return (
    <div className="card2">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;

