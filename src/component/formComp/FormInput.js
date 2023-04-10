import React from 'react';

const FormInput = ({ handleChange }) => {
  return (
    <form>
      <div>
        {' '}
        <label>CARDHOLDER NAME</label>
        <input
          onChange={handleChange}
          type='text'
          name='name'
          className='name'
        />
        <label>CARD NUMBER</label>
        <input
          onChange={handleChange}
          type='text'
          name='cardNum'
          className='number'
        />
      </div>
      <div>
        <div>
          {' '}
          <label>EXP.DATE (MM/YY)</label>
          <input
            onChange={handleChange}
            type='text'
            name='day'
            className='day'
          />
          <input
            onChange={handleChange}
            type='text'
            name='month'
            className='month'
          />
        </div>
        <div>
          <label>CVC</label>
          <input
            onChange={handleChange}
            type='number'
            name='cvc'
            className='cvc'
          />
        </div>
      </div>
    </form>
  );
};

export default FormInput;
