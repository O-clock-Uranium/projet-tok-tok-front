import { Box, Stack } from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import AppHeader from '../AppHeader/AppHeader';

import Menu from '../Menu/Menu';

import ContentAdvert from './ContentAdvert/ContentAdvert';
import CreateAdvertButton from './CreateAdvertButton/CreateAdvertButton';
import SortBar from './SortBar/SortBar';

function Adverts() {
  const adverts = useAppSelector((state) => state.adverts.list);
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
          <CreateAdvertButton />
        </Stack>
        <SortBar />
        <ContentAdvert adverts={adverts} />
      </Box>
    </>
  );
}

export default Adverts;
