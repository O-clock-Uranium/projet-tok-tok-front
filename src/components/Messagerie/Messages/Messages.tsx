import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../../hooks/redux';
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
    // j'écoute l'évènement `server_send_message`
    subscribeToNewMessage();

    // je n'oublie pas de nettoyer mon effet au démontage du composant
    // au risque de m'abonner À CHAQUE FOIS que <Messages /> est monté
    //   - React.StrictMode
    //   - à chaque fois qu'on sauvegarde le fichier (Vite)
    return () => {
      // au démontage : je me désabonne du Websocket
      unsubscribeToNewMessage();
    };
  }, []); // on ne s'abonne qu'au montage du composant

  //! Revoir comment aimanté le scroll tout en bas à chaque nouveau message
  useEffect(() => {
    // une référence spécial : c'est un objet avec une propriété `current`
    // on peut modifier sa valeur (current) sans modifier la référence
    // de l'objet et, donc, sans provoquer un nouveau rendu
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
