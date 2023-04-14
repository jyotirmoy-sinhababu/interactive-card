import React from 'react';

import './card.css';

const CardBack = ({ formData }) => {
  return (
    <div className='card-back-cnt'>
      <div className='card-back-empty'></div>
      <div className='card-back-cvc-cnt'>
        {formData ? <p>{formData.cvv}</p> : <p>000</p>}
      </div>
    </div>
  );
};

export default CardBack;
