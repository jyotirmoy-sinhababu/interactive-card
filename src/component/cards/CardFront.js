import React from 'react';

import './card.css';

const CardFront = ({ formData }) => {
  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        {formData && formData.cardNum ? (
          <p>{formData.cardNum}</p>
        ) : (
          <p>0000 0000 0000 0000</p>
        )}

        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
