import React from 'react';
import Message from '../components/Message';
import RecipientBlock from '../components/RecipientBlock';
import SendMessageBar from '../components/SendMessageBar';

import { useFetchMessages } from '../utils/hooks';

const Chat = ({ db }) => {
  const [messages, isLoading] = useFetchMessages(db);
  console.log(messages, isLoading);

  return (
    <div className='chat'>
      <div className='chat-header'>
        <RecipientBlock />
      </div>
      <div className='chat-body'>
        <div className='chat-body__messages'>
          {messages &&
            messages.map((msg) => <Message key={msg.id} message={msg} />)}
          {/* <Message />
          <Message own={true} />
          <Message /> */}
        </div>
        <SendMessageBar />
      </div>
    </div>
  );
};

export default Chat;
