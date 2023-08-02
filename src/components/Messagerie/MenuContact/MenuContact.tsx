import { useEffect, useState } from 'react';

import { Paper, Stack } from '@mui/material';
import AddContact from './AddContact/AddContact';
import { ContactUser } from '../../../@types';
import Contact from './Contact/Contact';
import { joinRoom } from '../../../socket/messagerie';
import { useAppSelector } from '../../../hooks/redux';

interface MenuContactProps {
  contacts: ContactUser[];
  room: number;
  setRoom: React.Dispatch<React.SetStateAction<number>>;
}

function MenuContact({ contacts, room, setRoom }: MenuContactProps) {
  const {messagerie} = useAppSelector((state) => state)
  
  const contactList = contacts.map((contact: any) => {

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      messagerie.currentRoom = contact.room_id
      joinRoom(messagerie.currentRoom)
    };

    return (
      <Contact
        firstname={messagerie.currentDestinataire.firstname}
        lastname={messagerie.currentDestinataire.lastname}
        onClick={handleClick}
      />
    );
  });

  return (
    <Paper
      sx={{
        mr: '5rem',
        p: '2rem',
        maxHeight: '60rem',
        id: 'test',
        borderRadius: '1rem',
        overflowY: 'scroll',
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
      <Stack direction="column">
        <AddContact />
        {contactList}
      </Stack>
    </Paper>
  );
}

export default MenuContact;
