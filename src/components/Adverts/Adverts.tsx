import { Box, Stack } from '@mui/material';
import AppHeader from '../Homepage/AppHeader/AppHeader';

import Menu from '../Menu/Menu';
import AdvertCard from './Advert/Advert';
import CreateAdvertButton from './CreateAdvertButton/CreateAdvertButton';
import SortBar from './SortBar/SortBar';
import ColorToggleButton from './ToggleButton/ToggleButton';

function Adverts() {
  return (
    <>
      <AppHeader />
      <Menu />

      <Box
        sx={{
          height: '100vh',
          width: '100rem',
          position: 'relative',
          top: '11rem',
          left: '30rem',
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <ColorToggleButton />
          <CreateAdvertButton />
        </Stack>
        <SortBar />
        <Stack direction="row" flexWrap="wrap" gap="1rem">
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
        </Stack>
      </Box>
    </>
  );
}

export default Adverts;
