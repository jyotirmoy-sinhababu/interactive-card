import React from 'react';

const FormInput = ({ handleChange, isEmpty, formData }) => {
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
        {isEmpty ? (
          !formData.name ? (
            <p>name field should not be empty</p>
          ) : !/^[a-zA-Z ]+$/.test(formData.name) ? (
            <p>Please enter a valid name</p>
          ) : null
        ) : null}
        <label>CARD NUMBER</label>
        <input
          onChange={handleChange}
          type='text'
          name='cardNum'
          className='number'
        />
        {isEmpty ? (
          !formData.cardNum ? (
            <p>Card number field should not be empty</p>
          ) : !/^\d+$/.test(formData.name) ? (
            <p>Please enter a valid card number</p>
          ) : null
        ) : null}
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
          {isEmpty ? (
            !formData.year && !formData.month ? (
              <p>Exp date field should not be empty</p>
            ) : (!/^\d+$/.test(formData.month || formData.year) &&
                formData.year <= 2060) ||
              formData.month <= 12 ? (
              <p>Please enter a valid exp date</p>
            ) : null
          ) : null}
        </div>
        <div>
          <label>CVC</label>
          <input
            onChange={handleChange}
            type='number'
            name='cvc'
            className='cvc'
          />
          {isEmpty ? (
            !formData.cvc ? (
              <p>CVC field should not be empty</p>
            ) : !/^[a-zA-Z ]+$/.test(formData.cvc) ? (
              <p>Please enter a valid CVC</p>
            ) : null
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default FormInput;
