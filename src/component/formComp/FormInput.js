import React from 'react';

const FormInput = ({ handleChange }) => {
  return (
    <div className='form-cnt'>
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
              name='month'
              className='month'
            />
            <input
              onChange={handleChange}
              type='text'
              name='year'
              className='year'
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
      <div>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default FormInput;
