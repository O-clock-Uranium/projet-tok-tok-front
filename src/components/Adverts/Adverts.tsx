import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAdverts } from '../../store/reducers/adverts';

import AdvertModal from '../Modals/AdvertModal';
import ContentAdvert from './ContentAdvert/ContentAdvert';
import SortBar from './SortBar/SortBar';

function Adverts() {
  const adverts = useAppSelector((state) => state.adverts.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

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
        <AdvertModal />
      </Stack>
      <Stack alignItems="center" width="100%">
        <SortBar />
      </Stack>

      <ContentAdvert adverts={adverts} />
    </Box>
  );
}

export default Adverts;
