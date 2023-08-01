import store from '../store';
import { addMessage } from '../store/reducers/messagerie';

// importe la connexion à socket
import { socket } from './io';

import { Message } from '../@types';


/* USER JOINS A ROOM ------------------------------*/
export const joinRoom = (roomId: number) => {
  socket.emit('join_room', roomId);
};

/* USER SEND A MESSAGE ------------------------------*/
interface sendMessageProps {
  expéditeur: number,
  message: string,
  room?: string
}
export const sendMessage = ({expéditeur, message, room}: sendMessageProps) => {
  socket.emit('client_send_message', {
    expéditeur,
    message,
    room
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
