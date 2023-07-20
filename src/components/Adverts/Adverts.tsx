import { Box, Stack } from '@mui/material';
import AppHeader from '../AppHeader/AppHeader';

import Menu from '../Menu/Menu';
import AdvertCard from './Advert/Advert';
import AdvertCard2 from './Advert/Advert2';
import AdvertCard3 from './Advert/Advert3';
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
          margin: 'auto',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="8.2rem"
        >
          <ColorToggleButton />
          <CreateAdvertButton />
        </Stack>
        <SortBar />
        <Stack direction="row" flexWrap="wrap" gap="1rem">
          <AdvertCard />
          <AdvertCard2 />
          <AdvertCard3 />
          <AdvertCard3 />
          <AdvertCard />
          <AdvertCard2 />
          <AdvertCard2 />
          <AdvertCard3 />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard2 />
          <AdvertCard3 />
        </Stack>
      </Box>
    </>
  );
}

export default Adverts;
