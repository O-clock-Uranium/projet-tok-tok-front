import store from '../store';
import { addMessage } from '../store/reducers/messagerie';
import { socket } from './io';

import { Message } from '../@types';

// eslint-disable-next-line import/prefer-default-export
export const sendMessage = (content: string) => {
  // j'ai besoin du state pour récupérer mon pseudo ;
  // je ne suis pas dans un composant, je n'ai pas accès au _hook_ ;
  // comme en Vanilla JS, j'importe mon store et j'utilise `getState()`
  const state = store.getState();

  // j'envoie un évènement à mon serveur (accompagné du message)
  // pour prévenir que j'ai un nouveau message
  // côté serveur, il écoute cet évènement et agit en conséquence
  socket.emit('client_send_message', {
    // mon message
    // id: 42, // pas besoin : il est généré par le serveur
    author: state.user.firstname ?? 'Anne Onyme',
    content,
  });
};

export const subscribeToNewMessage = () => {
  // j'écoute l'évènement émis par le serveur à chaque fois
  // qu'un message est envoyé
  // je pourrai enregistrer ce message dans le store
  // et mettre à jour ma liste de messages
  // → je dispatche une action
  socket.on('server_send_message', (message: Message) => {
    // console.log('Le serveur a envoyé un nouveau message : ');
    // console.log(message);
    store.dispatch(addMessage(message));
  });
};

export const unsubscribeToNewMessage = () => {
  // j'arrête d'écouter `server_send_message`
  socket.off('server_send_message');
};
