import React, { useEffect, useRef } from 'react';

import Message from '../components/Message';
import RecipientBlock from '../components/RecipientBlock';
import SendMessageBar from '../components/SendMessageBar';
import Spinner from '../components/Spinner';
import { useFetchMessages } from '../utils/hooks';

const Chat = () => {
  const [messages, isLoading] = useFetchMessages();
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current && !isLoading) {
      ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, [isLoading]);

  return (
    <div className='chat'>
      <div className='chat-header'>
        <RecipientBlock />
      </div>
      <div className='chat-body scrollbox' tabIndex='0'>
        <div className='chat-body__messages'>
          {isLoading ? (
            <Spinner />
          ) : (
            messages &&
            messages.map((msg, idx) => <Message key={idx} {...msg} />)
          )}
          <div ref={ref}></div>
        </div>
      </div>
      <div className='chat-footer'>
        <SendMessageBar scrollTo={ref} />
      </div>
    </div>
  );
};

export default Chat;
