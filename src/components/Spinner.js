import React from 'react';
import img from '../assets/images/spin.svg';

const Spinner = () => {
  return (
    <div className='spinner-box'>
      <img className='spinner' src={img} alt='spinner' />
    </div>
  );
};

export default Spinner;
