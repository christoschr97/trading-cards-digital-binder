import React from 'react';
import './PageFlip.css';

const PageFlip = ({ isFlipping, direction }) => {
  if (!isFlipping) return null;
  
  return (
    <div className={`page-flip-container ${direction}`}>
      <div className="page-flip">
        <div className="page-flip-front"></div>
        <div className="page-flip-back"></div>
        <div className="page-flip-shadow"></div>
      </div>
    </div>
  );
};

export default PageFlip;
