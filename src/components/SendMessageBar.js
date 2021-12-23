import React from 'react';
import SendEmojiBtn from './SendEmojiBtn';
import SendGiftBtn from './SendGiftBtn';
import SendImageBtn from './SendImageBtn';
import SendMessageBtn from './SendMessageBtn';

const SendMessageBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='send-message' onSubmit={handleSubmit}>
      <input
        className='send-message__input'
        type='text'
        placeholder='Твое сообщение... (Enter чтобы отправить)'
      />

      <div className='send-message__actions'>
        <SendEmojiBtn />
        <SendImageBtn />
        <SendGiftBtn />
        <SendMessageBtn />
      </div>
    </form>
  );
};

export default SendMessageBar;
