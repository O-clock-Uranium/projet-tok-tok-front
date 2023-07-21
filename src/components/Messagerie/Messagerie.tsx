import { Box, Paper, Stack } from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import AppHeader from '../Homepage/AppHeader/AppHeader';
import Menu from '../Menu/Menu';
import FlashMessage from './FlashMessage/FlashMessage';
import Form from './Form/Form';
import MenuContact from './MenuContact/MenuContact';
import Messages from './Messages/Messages';
import Settings from './Settings/Settings';

export default function Messagerie() {
  const flash = useAppSelector((state) => state.settings.flash);

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
              {flash && (
                <FlashMessage type={flash.type} duration={flash.duration}>
                  {flash.children}
                </FlashMessage>
              )}
              <Settings />
              <Paper
                sx={{
                  p: '2rem',
                  borderRadius: '2.5rem',
                  backgroundColor: '#fff',
                  height: '60rem',
                  overflowY: 'auto',
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
