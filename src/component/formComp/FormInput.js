import React, { useState } from 'react';

const FormInput = ({ handleChange, formData }) => {
  const [error, setError] = useState({
    nameEr: '',
    cardNumEr: '',
    monthYearEr: '',
    cvcEr: '',
  });

  const handleSubmit = (e) => {
    if (!formData.name) {
      setError({ ...error, [nameEr]: 'Please enter your name' });
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      setError({ ...error, [nameEr]: 'wrong format, letters only' });
    } else if (!formData.cardNum) {
      setError({ ...error, [cardNumEr]: 'Please enter your number' });
    } else if (!/^[0-9]+$/.test(formData.cardNum)) {
      setError({ ...error, [cardNumEr]: 'wrong format, numbers only' });
    } else if (!formData.month && !formData.year) {
      setError({
        ...error,
        [monthYearEr]: 'Please enter your card expairy date',
      });
    } else if (!/^[0-9]+$/.test(formData.month && formData.year)) {
      setError({ ...error, [monthYearEr]: 'wrong format, numbers only' });
    } else if (!formData.cvc) {
      setError({ ...error, [cvcEr]: 'Please enter your CVC' });
    } else if (!/^[0-9]+$/.test(formData.cvc) && formData.cvc.length != 3) {
      setError({
        ...error,
        [cvcEr]: 'wrong format , numers only and number should be three digits',
      });
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
          <div>{error && <p>{error.nameEr}</p>}</div>
          <label>CARD NUMBER</label>
          <input
            onChange={handleChange}
            type='text'
            name='cardNum'
            className='number'
          />
          <div>{error && <p>{error.cardNumEr}</p>}</div>
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
            <div>{error && <p>{error.monthYearEr}</p>}</div>
            <input
              onChange={handleChange}
              type='text'
              name='year'
              className='year'
            />
            <div>{error && <p>{error.monthYearEr}</p>}</div>
          </div>
          <div>
            <label>CVC</label>
            <input
              onChange={handleChange}
              type='number'
              name='cvc'
              className='cvc'
            />
            <div>{error && <p>{error.cvcEr}</p>}</div>
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
