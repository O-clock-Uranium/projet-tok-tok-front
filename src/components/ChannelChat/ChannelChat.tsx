import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import {
  sendMessage,
  subscribeToNewMessage,
  unsubscribeToNewMessage,
} from '../../socket/messagerie';

function ChannelChat() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const addChannelModalIsOpen = useAppSelector(
    (state) => state.addChannelModal.isOpen
  );
  const addGroupModalIsOpen = useAppSelector(
    (state) => state.addGroupModal.isOpen
  );
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    console.log('on est dans le useEffect de ChannelChat');

    // Connexion au serveur socket
    socketRef.current = io('http://localhost:3001', {
      autoConnect: false,
      auth: { token },
    });
    socketRef.current?.connect();

    // Abonnement aux nouveaux messages
    subscribeToNewMessage();

    return () => {
      console.log('on est dans le return du useEffect de ChannelChat');
      // Désabonnement des nouveaux messages
      unsubscribeToNewMessage();

      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [dispatch, token]);

  const sidebarIsOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <div>
      {addGroupModalIsOpen && <AddGroupModal socketRef={socketRef} />}
      {addChannelModalIsOpen && <AddChannelModal socketRef={socketRef} />}
      <div
        className={
          sidebarIsOpen
            ? 'channel-chat-container--sidebarIsOpen'
            : 'channel-chat-container'
        }
      >
        <Channel socketRef={socketRef} />
        <Chat socketRef={socketRef} />
      </div>
    </div>
  );
}

export default ChannelChat;
