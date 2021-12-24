import React from 'react';
import img from '../assets/images/happy.svg';

const SendEmojiBtn = () => {
  return (
    <button className='send-action__btn' type='button'>
      <img className='send-action__btn-img' src={img} alt='gift' />
    </button>
  );
};

export default SendEmojiBtn;
