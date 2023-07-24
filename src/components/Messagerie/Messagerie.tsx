import { Box, Paper, Stack } from '@mui/material';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';
import FlashMessage from './FlashMessage/FlashMessage';
import Form from './Form/Form';
import MenuContact from './MenuContact/MenuContact';
import Messages from './Messages/Messages';
import Settings from './Settings/Settings';

export default function Messagerie() {
  return (
    <>
      <AppHeader />
      <Menu />
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
          <MenuContact />
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
    </>
  );
}
