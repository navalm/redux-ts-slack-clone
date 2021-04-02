import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import StarIcon from '@material-ui/icons/StarOutlineSharp';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { selectRoomId, selectRoomName } from '../../features/appSlice';
import { ChatSect, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatContent, ChatBottom } from './style';
import { db } from '../../firebase';

const Chat = (props: any) => {
  const roomId = useSelector(selectRoomId);
  const roomName = useSelector(selectRoomName);
  const [roomDetails] = useDocument(roomId && db.collection('rooms').doc(roomId));
  const [roomMessages] = useCollection(
    roomId &&
    db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  );
  const chatRef = useRef(null);

  console.log(roomName);
  return (
    <ChatSect>
      {roomDetails && roomMessages && (
        <>
          <ChatHeader>
            <ChatHeaderLeft><h4>{roomId? `#${roomName}`: '#room-name'} <StarIcon /></h4></ChatHeaderLeft>
            <ChatHeaderRight><p><InfoIcon/> Details</p></ChatHeaderRight>
          </ChatHeader>
          <ChatContent>
            {roomMessages?.docs.map(doc => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <ChatMessage
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatRef} />
          </ChatContent>
          <ChatInput 
            channelId={roomId}
            channelName={roomName}
            chatRef={chatRef}
          />
        </>
      )}
    </ChatSect>
  );
}

export default Chat;