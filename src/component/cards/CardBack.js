import React from 'react';

import './card.css';

const CardBack = ({ formData }) => {
  return (
    <div className='card-back-cnt'>
      <div className='card-back-empty'></div>
      <div className='card-back-cvc-cnt'>
        {formData && formData.cvc ? (
          <p className='card-back-cvc'>{formData.cvc}</p>
        ) : (
          <p>000</p>
        )}
      </div>
    </div>
  );
};

export default CardBack;
