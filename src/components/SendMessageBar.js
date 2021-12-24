import React, { useState } from 'react';
import { doc, setDoc, collection, Timestamp } from 'firebase/firestore';

import SendEmojiBtn from './SendEmojiBtn';
import SendGiftBtn from './SendGiftBtn';
import SendImageBtn from './SendImageBtn';
import SendMessageBtn from './SendMessageBtn';
import { auth, db } from '../firebase';

const SendMessageBar = ({ scrollTo }) => {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(collection(db, 'messages'));
    const { uid } = auth.currentUser;
    if (!messageText.trim()) return;
    // Add a new message in collection "messages"
    await setDoc(docRef, {
      text: messageText,
      uid,
      photoUrl: 'https://ice.dating/files/girl_2.png',
      createdAt: Timestamp.now(),
    });
    // clear user input
    setMessageText('');
    // scroll messages down
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form className='send-message' onSubmit={handleSubmit}>
      <input
        className='send-message__input'
        value={messageText}
        type='text'
        placeholder='Твое сообщение... (Enter отправить)'
        onChange={(e) => setMessageText(e.target.value)}
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
