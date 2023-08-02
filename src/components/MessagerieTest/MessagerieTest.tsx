import React, { useState } from 'react';

import { Box } from '@mui/system';

import { useEffect } from 'react';

// importe la connexion à socket
import { socket } from '../../socket/io';
import { useAppSelector } from '../../hooks/redux';
import { receiveId, sendMessage } from '../../socket/messagerie';

export default function MessagerieTest() {
  const [room, setRoom] = React.useState('');
  const [message, setMessage] = React.useState('');
  const { id } = useAppSelector((state) => state.user);

  //!-----------------------------------------------------*/
  const [isConnected, setIsConnected] = useState(false);

  const connectToSocket = () => {
    socket.connect();
    receiveId()
    setIsConnected(true);
  };

  !isConnected ? connectToSocket() : false;
  //!-----------------------------------------------------*/

  const send = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    sendMessage({ expéditeur: id, content: message, room });
    //socket.emit('client_send_message', { expéditeur: id, message, room });

    //* alternative avec formdata. Dans ce cas, il faudra un champ caché pour l'id du user loggué et un pour la room
    //const formData = new FormData(e.currentTarget);
    //const objData = Object.fromEntries(formData);
    //? quand on clique sur une conversation dans la liste, on transmet en props l'id de la room/conversation à cet input ?
  };

  const changeRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    //* idem
    // const formData = new FormData(e.currentTarget);
    // const objData = Object.fromEntries(formData);
    // console.log(objData, objData.room);

    socket.emit('join_room', room);
  };

  /* A chaque événement reçu ------------------------------- */
  useEffect(() => {
    socket.on('server_send_message', (data: any) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <Box
      sx={{
        height: '80vh',
        width: '100rem',
        position: 'relative',
        top: '15rem',
        margin: 'auto',
      }}
    >
      <form onSubmit={changeRoom}>
        <label htmlFor="room">Select a room: </label>
        <input
          type="number"
          name="room"
          id="room"
          placeholder="Room..."
          autoComplete="off"
          value={room}
          onChange={(e) => setRoom(e.currentTarget.value)}
        />
        <button type="submit">Enter</button>
      </form>

      <form onSubmit={send}>
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type your message..."
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <input type="text" name="room" value={room} hidden readOnly />
        <input type="text" name="expéditeur" value={id} hidden readOnly />

        <button type="submit">Send</button>
      </form>
    </Box>
  );
}
