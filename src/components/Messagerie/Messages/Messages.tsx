import { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import {
  subscribeToNewMessage,
  unsubscribeToNewMessage,
} from '../../../socket/messagerie';
import MessagesItem from './MessagesItem';

import './Messages.scss';

function Messages() {
  const messages = useAppSelector((state) => state.messagerie.messages);

  const messagesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Abonnement aux nouveaux messages
    subscribeToNewMessage();

    return () => {
      // Désabonnement des nouveaux messages
      unsubscribeToNewMessage();
    };
  }, []);

  //! Revoir comment aimanter le scroll tout en bas à chaque nouveau message
  useEffect(() => {
    // Scroll vers le bas à chaque nouveau message
    messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
  }, [messages]);

  return (
    <section className="messages" ref={messagesRef}>
      {messages.map((message) => (
        <MessagesItem key={message.id} {...message} />
      ))}
    </section>
  );
}

export default Messages;
