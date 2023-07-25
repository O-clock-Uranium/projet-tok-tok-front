import store from '../store';
import { addMessage } from '../store/reducers/messagerie';
import { socket } from './io';

import { Message } from '../@types';

export const sendMessage = (content: string) => {
  const state = store.getState();

  socket.emit('client_send_message', {
    author: state.user.firstname ?? 'Anne Onyme',
    content,
  });
};

export const subscribeToNewMessage = () => {
  socket.on('server_send_message', (message: Message) => {
    store.dispatch(addMessage(message));
  });
};

export const unsubscribeToNewMessage = () => {
  socket.off('server_send_message');
};
