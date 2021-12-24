import React from 'react';
import { auth } from '../firebase';
import { getTimeFromTimestamp } from '../utils/hooks';

const Message = ({ text, uid, createdAt, date }) => {
  const classNames =
    uid === auth.currentUser.uid ? 'message-wrap own' : 'message-wrap';
  const sendedAt = getTimeFromTimestamp(createdAt?.seconds);

  return (
    <div className={classNames}>
      {!!date && <div className='message-date'>{date}</div>}
      <p className='message'>{text}</p>
      <span className='message-time'>{sendedAt}</span>
    </div>
  );
};

export default Message;
