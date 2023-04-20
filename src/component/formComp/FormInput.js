import React, { useState, useEffect } from 'react';

import './formStyle.css';

const FormInput = ({ handleChange, formData, setIsTask }) => {
  const [error, setError] = useState({
    nameEr: '',
    cardNumEr: '',
    monthEr: '',
    yearEr: '',
    cvcEr: '',
  });

  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const currentDate = new Date();
    setCurrentYear(currentDate.getFullYear());
  }, []);

  console.log(currentYear);

  const handleSubmit = (e) => {
    if (!formData.name) {
      setError({ ...error, nameEr: 'Please enter your name' });
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      setError({ ...error, nameEr: 'wrong format, letters only' });
    } else if (!formData.cardNum) {
      setError({ ...error, cardNumEr: 'Please enter your number' });
    } else if (!/^[0-9]+$/.test(formData.cardNum)) {
      setError({ ...error, cardNumEr: 'wrong format, numbers only' });
    } else if (!formData.month) {
      setError({
        ...error,
        monthEr: 'Please enter your card expiry month',
      });
    } else if (
      !/^[0-9]+$/.test(formData.month) ||
      !(1 <= parseInt(formData.month, 10) && parseInt(formData.month, 10) <= 12)
    ) {
      setError({ ...error, monthEr: 'wrong format, numbers only' });
    } else if (!formData.cvc) {
      setError({ ...error, cvcEr: 'Please enter your CVC' });
    } else if (!/^[0-9]+$/.test(formData.cvc) && formData.cvc.length != 3) {
      setError({
        ...error,
        cvcEr: 'wrong format , numbers only and number should be three digits',
      });
    } else if (!formData.year) {
      setError({ ...error, yearEr: 'please enter your expiry year' });
    } else if (formData.year < currentYear) {
      setError({
        ...error,
        yearEr: 'Expiry year can not be less than current year',
      });
    } else {
      e.preventDefault();
      setIsTask(false);
    }
  };

  return (
    <div className='form-cnt'>
      <form className='form'>
        <div className='form-name-num-cnt'>
          <div className='small-input-cnt'>
            <label>CARDHOLDER NAME</label>
            <input
              onChange={handleChange}
              type='text'
              name='name'
              className='name'
            />
            <div>{error && <p className='err'>{error.nameEr}</p>}</div>
          </div>
          <div className='small-input-cnt'>
            {' '}
            <label>CARD NUMBER</label>
            <input
              onChange={handleChange}
              type='text'
              name='cardNum'
              className='number'
            />
            <div>{error && <p className='err'>{error.cardNumEr}</p>}</div>
          </div>
        </div>

        <div className='month-yr-cvc-input-cnt'>
          <div>
            <label>EXP.DATE (MM/YY)</label>
          </div>
          <div className='month-yr-input-cnt'>
            <input
              onChange={handleChange}
              type='text'
              name='month'
              className='month'
            />
            <div>{error && <p className='err'>{error.monthEr}</p>}</div>
            <div className='year-input-cnt'>
              <input
                onChange={handleChange}
                type='text'
                name='year'
                className='year'
              />
              <div>{error && <p className='err'>{error.yearEr}</p>}</div>
            </div>{' '}
            <div className='small-cvc-cnt'>
              <label>CVC</label>
              <div>
                {' '}
                <input
                  onChange={handleChange}
                  type='number'
                  name='cvc'
                  className='cvc'
                />
              </div>

              <div>{error && <p className='err'>{error.cvcEr}</p>}</div>
            </div>
          </div>{' '}
        </div>
      </form>
      <div className='frm-submit-btn-cnt'>
        <button className='submit-btn' onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FormInput;
