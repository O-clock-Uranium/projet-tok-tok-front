import store from '../store';
import { addMessage } from '../store/reducers/messagerie';
import { socket } from './io';

import { Message } from '../@types';

// Fonction pour envoyer un nouveau message
export const sendMessage = (content: string) => {
  const state = store.getState();

  socket.emit('client_send_message', {
    author: state.user.firstname ?? 'Anne Onyme',
    content,
  });
};

// Fonction pour s'abonner aux nouveaux messages
export const subscribeToNewMessage = () => {
  socket.on('server_send_message', (message: Message) => {
    store.dispatch(addMessage(message));
  });
};

// Fonction pour se désabonner des nouveaux messages
export const unsubscribeToNewMessage = () => {
  socket.off('server_send_message');
};
