import { Box, Paper, Stack, Typography } from '@mui/material';
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
      {contacts ? (
        <Stack direction="row">
          <MenuContact
            contacts={contacts}
            destinataireId={destinataireId}
            setDestinataireId={setDestinataireId}
            destinataireName={destinataireName}
            setDestinataireName={setDestinataireName}
          />
          <Stack>
            <div className="chat">
              {/* barre du haut */}
              <Stack
                direction="row"
                sx={{
                  backgroundColor: '#fff',
                  p: '1rem',
                  mb: '0.5rem',
                  pl: '2rem',
                  borderRadius: '1rem',
                }}
              >
                <Typography
                  sx={{
                    color: 'primary.dark',
                    height: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '2rem',
                    fontFamily: 'DM Sans',
                  }}
                >
                  {destinataireName}
                </Typography>
              </Stack>
              {/* Bloc */}
              <Paper
                elevation={0}
                sx={{
                  width: '80rem',
                  // display: 'flex',
                  position: 'relative',
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
                <Stack
                  direction="row"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                >
                  <Form destinataireId={destinataireId} />
                </Stack>
              </Paper>
            </div>
          </Stack>
        </Stack>
      ) : (
        <Box
          width="100rem"
          sx={{ backgroundColor: '#fff', borderRadius: '2rem' }}
        >
          <Stack direction="column" padding="3rem">
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                p: '1rem',
              }}
            >
              Vous navez pas encore de messages ? <br />
              Cliquez sur le bouton "contacter le vendeur" dans une annonce pour
              que vos différentes conversations s&apos;affichent ici.
            </Typography>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
