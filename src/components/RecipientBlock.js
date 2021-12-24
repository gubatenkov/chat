import React from 'react';
import img from '../assets/images/user_heart_both.svg';
import img2 from '../assets/images/girl.png';

const RecipientBlock = () => {
  return (
    <div className='recipient'>
      <div className='recipient-avatar'>
        <img className='recipient-img' src={img2} alt='img' />
      </div>
      <div className='recipient-info'>
        <div className='recipient-info__wrap'>
          <div className='recipient-info__name verified'>Сара, 24</div>
          <div className='recipient-info__status'>
            <img src={img} alt='ico' />
            <p>Вы понравились друг другу вчера</p>
          </div>
        </div>
        <button className='recipient-info__btn' />
      </div>
    </div>
  );
};

export default RecipientBlock;
