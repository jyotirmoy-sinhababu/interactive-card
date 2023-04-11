import React, { useState } from 'react';

import FormInput from '../formComp/FormInput';

const Container = () => {
  const [formData, setFormData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  return (
    <>
      <div>
        <div></div>
        <div>
          <FormInput
            handleChange={handleChange}
            isEmpty={isEmpty}
            formData={formData}
          />
        </div>
      </div>
    </>
  );
};

export default Container;
