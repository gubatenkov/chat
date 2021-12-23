import React from 'react';
import img from '../assets/images/plane.svg';

const SendBtn = () => {
  return (
    <button className='send-action__btn send-message__btn' type='submit'>
      <img className='send-message__btn-img' src={img} alt='plane' />
    </button>
  );
};

export default SendBtn;
