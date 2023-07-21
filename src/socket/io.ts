import { io } from 'socket.io-client';

// eslint-disable-next-line import/prefer-default-export
export const socket = io('http://localhost:3001');