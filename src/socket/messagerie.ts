import store from '../store';
// import { addMessage } from '../store/reducers/messagerie';

// importe la connexion à socket
import { socket } from './io';

import { Message } from '../@types';
import { addMessage } from '../store/reducers/messagerie';


/* SERVER SENDS AN ID ------------------------------*/
export const receiveId = () => {
  socket.on('server_send_personal_id', (id) => {
    console.log(id)
  })
}

/* USER JOINS A ROOM ------------------------------*/
export const joinRoom = (roomId: number) => {
  socket.emit('join_room', roomId);
};

/* USER SEND A MESSAGE ------------------------------*/
interface SendMessageProps {
  expéditeur: number,
  content: string,
  room?: string
}

export const sendMessage = ({expéditeur, content, room}: SendMessageProps) => {
  socket.emit('client_send_message', {
    expéditeur,
    content,
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
