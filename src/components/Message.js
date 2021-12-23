import React from 'react';

const Message = (props) => {
  const classNames = props.own ? 'message own' : 'message';
  console.log(props);

  return <p className={classNames}>{props.message.text}</p>;
};

export default Message;
