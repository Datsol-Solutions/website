import React from 'react';

function ServiceCard({ title, description, imageSrc }) {
  return (
    <div className="card2">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
