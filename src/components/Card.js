import React from 'react';
import './Card.css';

function Card({ card }) {
  return (
    <div className="card-container">
      <div className={`card ${card.rarity.toLowerCase()}`}>
        <img src={card.image} alt={card.name} />
        {/* Hover info removed as requested */}
      </div>
    </div>
  );
}

export default Card;
