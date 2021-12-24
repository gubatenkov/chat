import React from 'react';
import { auth } from '../firebase';

const Message = ({ text, uid, createdAt }) => {
  const textClassNames =
    uid === auth.currentUser.uid ? 'message own' : 'message';
  const timeClassNames =
    uid === auth.currentUser.uid ? 'message-time own' : 'message-time';
  const timestamp = new Date(createdAt.seconds * 1000);
  let hours = timestamp.getHours();
  let minutes = timestamp.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const sendedAt = `${hours}:${minutes}`;

  return (
    <>
      <p className={textClassNames}>{text}</p>
      <span className={timeClassNames}>{sendedAt}</span>
    </>
  );
};

export default Message;
