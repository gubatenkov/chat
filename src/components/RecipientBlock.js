import React from 'react';
import img from '../assets/images/user_heart_both.svg';

const RecipientBlock = () => {
  return (
    <div className='recipent'>
      <div className='recipent-avatar'>
        <img
          className='recipent-img'
          src='https://ice.dating/files/girl_1.png'
          alt='img'
        />
      </div>
      <div className='recipent-info'>
        <div className='recipient-info__name verified'>Сара, 24</div>
        <div className='recipent-info__status'>
          <img src={img} alt='ico' />
          <p>Вы понравились друг другу вчера</p>
        </div>
      </div>
    </div>
  );
};

export default RecipientBlock;
