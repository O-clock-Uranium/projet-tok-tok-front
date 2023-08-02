import { useEffect, useState } from 'react';

import { Box, Paper, Stack } from '@mui/material';
import Form from './Form/Form';
import MenuContact from './MenuContact/MenuContact';
import Messages from './Messages/Messages';
import axiosInstance from '../../utils/axios';
import { socket } from '../../socket/io';
import { useAppSelector } from '../../hooks/redux';

export default function Messagerie() {
  const { id } = useAppSelector((state) => state.user);
  const [contacts, setContacts] = useState([]);
  const [room, setRoom] = useState(0);

  //!-----------------------------------------------------*/
  const [isConnected, setIsConnected] = useState(false);

  const connectToSocket = () => {
    socket.auth = { userId: id };
    socket.connect();
    setIsConnected(true);
  };

  !isConnected ? connectToSocket() : false;
  //!-----------------------------------------------------*/

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await axiosInstance.get('/contacts');
        setContacts(data);
      } catch (error: any) {
        throw new Error(error.response.data.error);
      }
    };
    fetchContacts();
  }, [contacts]);

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
      <Stack direction="row">
        <MenuContact contacts={contacts} room={room} setRoom={setRoom} />
        <Stack sx={{ flexGrow: 1 }}>
          <div className="chat">
            <Paper
              sx={{
                p: '2rem',
                borderRadius: '1rem',
                backgroundColor: '#fff',
                height: '60rem',
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '1rem',
                  backgroundColor: '#F5F5F5',
                },
                '&::-webkit-scrollbar-track': {
                  '&::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
                  backgroundColor: '#49c1ad',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#03665C',
                  borderRadius: '25px',
                },
              }}
            >
              {/* ici on passera roomId */}
              <Messages room={room} />
              {/* ici on passera roomId, userId, destId*/}
              <Form />
            </Paper>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
