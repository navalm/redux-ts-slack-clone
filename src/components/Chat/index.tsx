import React from 'react';
import InfoIcon from '@material-ui/icons/InfoSharp';
import { ChatSect, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatContent } from './style';

const Chat = (props: any) => {
  return (
    <ChatSect>
      <ChatHeader>
        <ChatHeaderLeft><h4>#room-name</h4></ChatHeaderLeft>
        <ChatHeaderRight><p><InfoIcon/> Details</p></ChatHeaderRight>
      </ChatHeader>
      <ChatContent>
        <h1>I am the chat screen...</h1>
        <h1>I am the chat screen...</h1>
        <h1>I am the chat screen...</h1>
        <h1>I am the chat screen...</h1>
      </ChatContent>
    </ChatSect>
  );
}

export default Chat;