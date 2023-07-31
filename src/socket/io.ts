import { io } from 'socket.io-client';

// Export de la connexion au serveur socket
// eslint-disable-next-line import/prefer-default-export
export const socket = io('http://localhost:3001');
