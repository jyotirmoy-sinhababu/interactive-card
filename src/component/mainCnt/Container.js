import React, { useState } from 'react';
import './container.css';

import FormInput from '../formComp/FormInput';
import CardFront from '../cards/CardFront';
import CardBack from '../cards/CardBack';

const Container = () => {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  return (
    <>
      <div className='main-cnt'>
        <div className='card-cnt'>
          <CardBack formData={formData} />
          <CardFront formData={formData} />
        </div>
        <div className='main-form-cnt'>
          <FormInput handleChange={handleChange} formData={formData} />
        </div>
      </div>
    </>
  );
};

export default Container;
