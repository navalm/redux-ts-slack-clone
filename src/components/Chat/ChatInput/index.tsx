import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@material-ui/core/Button';
import { InputContainer, CustomChatInput } from './style';
import { db, auth } from '../../../firebase';
import firebase from 'firebase';

const ChatInput = (props: any) => {
  const { channelId, channelName, chatRef } = props;
  const [message, setMessage] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = (e: any) => {
    e.preventDefault(); // prevents refresh
    if (!channelId) {
      return false;
    }
    if (message.length > 0) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user? user.displayName: '',
        userImage: user? user.photoURL: ''
      });
      setMessage('');
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
    
  }
  return (
    <InputContainer>
      <form>
        <CustomChatInput 
          placeholder={`Message #${channelName}`}
          value={message} 
          onChange={event => setMessage(event.target.value)}
        />
        <Button
          size="small"
          hidden
          type="submit"
          onClick={sendMessage}
        >SEND</Button>
      </form>
    </InputContainer>
  );
}

export default ChatInput;