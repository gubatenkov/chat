import React, { useEffect, useRef } from 'react';

import Message from '../components/Message';
import RecipientBlock from '../components/RecipientBlock';
import SendMessageBar from '../components/SendMessageBar';
import Spinner from '../components/Spinner';
import { useFetchMessages } from '../utils/hooks';

const Chat = () => {
  const [messages, isLoading] = useFetchMessages();
  const ref = useRef(null);
  const containerRef = useRef(null);
  // watch container height changes and fire callback
  const onHeightChange = (containerRef) => {
    new ResizeObserver(() => {
      ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }).observe(containerRef);
  };

  useEffect(() => {
    // scroll chat to bottom on mounting
    if (ref?.current && !isLoading) {
      ref.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
    // scroll chat to bottom on new message
    if (containerRef?.current) {
      onHeightChange(containerRef.current);
    }
  }, [isLoading]);

  return (
    <div className='chat'>
      <div className='chat-header'>
        <RecipientBlock />
      </div>
      <div className='chat-body scrollbox' tabIndex='0'>
        <div className='chat-body__messages' ref={containerRef}>
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
