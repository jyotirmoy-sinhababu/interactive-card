import React from 'react';

import './card.css';

const CardFront = ({ formData }) => {
  return (
    <div className='front-card-cnt'>
      <div className='front-card-empty-cnt'>
        <div className='first-empty-cnt'></div>
        <div className='second-empty-cnt'></div>
      </div>
      <div className=''>
        {formData && formData.cardNum ? (
          <p>{formData.cardNum}</p>
        ) : (
          <p>0000 0000 0000 0000</p>
        )}

        <div className='card-font-name-date-cnt'>
          {formData && formData.name ? <p>{formData.name}</p> : <p>_______</p>}

          {(formData && formData.month) || formData.year ? (
            <p>
              {formData.month}
              {formData.year}
            </p>
          ) : (
            <p>../....</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardFront;
