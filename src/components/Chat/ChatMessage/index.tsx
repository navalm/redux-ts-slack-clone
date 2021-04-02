import React from 'react';
import { Message, MessageInfo } from './style';

const ChatMessage = (props: any) => {
  const { message, timestamp, user, userImage } = props;
  return (
    <Message>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>{user}{' '}<span>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
        <p>{message}</p>
      </MessageInfo>
    </Message>
  );
}

export default ChatMessage;