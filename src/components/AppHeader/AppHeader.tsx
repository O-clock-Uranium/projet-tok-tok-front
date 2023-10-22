import { Box, Stack } from '@mui/material';

import LogoHeader from './LogoHeader/LogoHeader';
import NotificationHeader from './Notifications/NotificationHeader';
import SearchBar from './SearchBar/SearchBar';
import UserHeader from './UserHeader/UserHeader';

import './style.scss';

export default function AppHeader() {
  return (
    <Box
      className="app-header"
      sx={{
        backgroundColor: 'white',
        height: '10rem',
        py: '3rem',
        px: '10rem',
        position: 'fixed',
        width: 1,
        zIndex: 1000,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <LogoHeader />
        <SearchBar />
        <Stack direction="row" alignItems="center">
          <NotificationHeader />
          <UserHeader />
        </Stack>
      </Stack>
    </Box>
  );
}
