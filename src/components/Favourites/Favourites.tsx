import { Box, Stack } from '@mui/material';
import AdvertCard from '../Adverts/Advert/Advert';
import ColorToggleButton from '../Adverts/ToggleButton/ToggleButton';

export default function Favourites() {
  return (
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
      </Stack>
    </Box>
  );
}
