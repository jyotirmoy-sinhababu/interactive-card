import React from 'react';

import './card.css';

const CardFront = ({ formData }) => {
  return (
    <div className='front-card-cnt'>
      <div className='front-card-empty-cnt'>
        <div className='first-empty-cnt'></div>
        <div className='second-empty-cnt'></div>
      </div>
      <div>
        {formData && formData.cardNum ? (
          <p>{formData.cardNum}</p>
        ) : (
          <p>0000 0000 0000 0000</p>
        )}

        <div>
          {formData && formData.name ? <p>{formData.name}</p> : <p>_______</p>}

          {formData && formData.cvc ? <p>{formData.cvc}</p> : <p>../....</p>}
        </div>
      </div>
    </div>
  );
};

export default CardFront;
