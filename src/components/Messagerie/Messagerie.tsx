import { Box, Paper, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchContacts } from '../../store/reducers/messagerie';
import Form from './Form/Form';
import MenuContact from './MenuContact/MenuContact';
import Messages from './Messages/Messages';

export default function Messagerie() {
  const [destinataireId, setDestinataireId] = useState(0);
  const [destinataireName, setDestinataireName] = useState('');

  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.messagerie.contacts);

  // const contactId = contacts.map((contact) => contact.id);
  // console.log(contactId);

  // 0:2
  // 1:3

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        <MenuContact
          contacts={contacts}
          destinataireId={destinataireId}
          setDestinataireId={setDestinataireId}
          destinataireName={destinataireName}
          setDestinataireName={setDestinataireName}
        />
        <Stack sx={{ flexGrow: 1 }}>
          <div className="chat">
            <Stack
              direction="row"
              sx={{
                backgroundColor: 'primary.dark',
                color: '#fff',
                height: '4rem',
                display: 'flex',
                alignItems: 'center',
                fontSize: '2rem',
                fontFamily: 'DM Sans',
                borderRadius: '1rem',
                mb: '0.5rem',
                pl: '2rem',
              }}
            >
              {destinataireName}
            </Stack>
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
              <Messages />
              <Form destinataireId={destinataireId} />
            </Paper>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
