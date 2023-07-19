import { Box, Paper, Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
import ColorToggleButton from '../Adverts/ToggleButton/ToggleButton';
import AppHeader from '../Homepage/AppHeader/AppHeader';
import Menu from '../Menu/Menu';
import FavoriteButton from './FavoriteButton/FavoriteButton';

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
          left: '30rem',
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <ColorToggleButton />
          <FavoriteButton />
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap="1rem" mt="2rem">
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
