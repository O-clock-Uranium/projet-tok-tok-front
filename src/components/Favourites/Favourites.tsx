import { Box, Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
import AdvertCard2 from '../Adverts/Advert/Advert2';
import AdvertCard3 from '../Adverts/Advert/Advert3';
import ColorToggleButton from '../Adverts/ToggleButton/ToggleButton';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

export default function Favourites() {
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
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap="1rem" mt="2rem">
          <AdvertCard />
          <AdvertCard2 />
          <AdvertCard3 />
        </Stack>
      </Box>
    </>
  );
}
