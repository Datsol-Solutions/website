import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; 
const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};
function ServiceCard({ title, description}) {
  return (
    <div className="card2" style={style2}>
      <h3><b>{title}</b></h3>
      <p>{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;

