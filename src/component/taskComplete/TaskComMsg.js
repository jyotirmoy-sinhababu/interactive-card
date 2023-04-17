import React from 'react';

import './task.css';

const TaskComMsg = ({ setIsTask }) => {
  return (
    <div className='task-cnt'>
      <div className='task-svg-cnt'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='36'
          height='36'
          fill='currentColor'
          className='bi bi-check2'
          viewBox='0 0 16 16'
        >
          <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
        </svg>
      </div>
      <h2>THANK YOU!</h2>
      <p>We'he added your card details</p>
      <div>
        <button
          onClick={() => {
            setIsTask(true);
          }}
          className='continue-btn'
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TaskComMsg;
