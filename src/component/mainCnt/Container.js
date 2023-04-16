import React, { useState } from 'react';
import './container.css';

import FormInput from '../formComp/FormInput';
import CardFront from '../cards/CardFront';
import CardBack from '../cards/CardBack';
import TaskComMsg from '../taskComplete/TaskComMsg';

const Container = () => {
  const [isTask, setIsTask] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  return (
    <>
      <div className='main-cnt'>
        <div className='card-cnt'>
          <div className='main-card-back-cnt'>
            <CardBack formData={formData} />
          </div>
          <div className='main-card-front-cnt'>
            <CardFront formData={formData} />
          </div>
        </div>
        <div className='main-form-cnt'>
          {!isTask ? (
            <FormInput
              handleChange={handleChange}
              formData={formData}
              setIsTask={setIsTask}
            />
          ) : (
            <TaskComMsg setIsTask={setIsTask} />
          )}
        </div>
      </div>
    </>
  );
};

export default Container;
