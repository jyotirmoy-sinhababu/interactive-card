import React, { useState } from 'react';

const FormInput = ({ handleChange, formData }) => {
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    if (!formData.name) {
      setError('Please enter your name');
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      setError('write proper name');
    } else if (!formData.cardNum) {
      setError('Please enter your number');
    } else if (!/^[0-9]+$/.test(formData.cardNum)) {
      setError('wrong format, numbers only');
    } else if (!formData.month && !formData.year) {
      setError('please give the card expiry date');
    } else if (!/^[0-9]+$/.test(formData.month && formData.year)) {
      setError('wrong format, numbers only');
    } else if (!formData.cvc) {
      setError('Please enter your CVC');
    } else if (!/^[0-9]+$/.test(formData.cvc) && formData.cvc.length != 3) {
      setError('Please give proper CVC number');
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className='form-cnt'>
      <form className='form'>
        <div>
          {' '}
          <label>CARDHOLDER NAME</label>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            className='name'
          />
          <div>
            <p>{error}</p>
          </div>
          <label>CARD NUMBER</label>
          <input
            onChange={handleChange}
            type='text'
            name='cardNum'
            className='number'
          />
          <div>
            <p>{error}</p>
          </div>
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
            <div>
              <p>{error}</p>
            </div>
            <input
              onChange={handleChange}
              type='text'
              name='year'
              className='year'
            />
            <div>
              <p>{error}</p>
            </div>
          </div>
          <div>
            <label>CVC</label>
            <input
              onChange={handleChange}
              type='number'
              name='cvc'
              className='cvc'
            />
            <div>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </form>
      <div>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
};

export default FormInput;
