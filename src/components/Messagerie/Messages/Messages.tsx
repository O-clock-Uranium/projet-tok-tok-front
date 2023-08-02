import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  subscribeToNewMessage,
  unsubscribeToNewMessage,
} from '../../../socket/messagerie';
import MessagesItem from './MessagesItem';

import './Messages.scss';
import { fetchMessages } from '../../../store/reducers/messagerie';

interface MessagesProps {
  room: number;
}

function Messages({ room }: MessagesProps) {
  const messages = useAppSelector((state) => state.messagerie.messages);
  const messagesRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMessages(room))
    subscribeToNewMessage();
    return () => {
      unsubscribeToNewMessage();
    };
  }, []);

  //! Revoir comment aimanté le scroll tout en bas à chaque nouveau message
  useEffect(() => {
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
