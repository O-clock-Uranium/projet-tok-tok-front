import { Box, Paper, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchContacts } from '../../store/reducers/messagerie';
import Form from './Form/Form';
import MenuContact from './MenuContact/MenuContact';
import Messages from './Messages/Messages';

export default function Messagerie() {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.messagerie.contacts);

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
        <MenuContact contacts={contacts} />
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
              <Messages />
              <Form />
            </Paper>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
