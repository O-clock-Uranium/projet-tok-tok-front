import { useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAdverts } from '../../store/reducers/adverts';
import AdvertModal from '../Modals/AdvertModal';
import ContentAdvert from './ContentAdvert/ContentAdvert';
import SortBar from './SortBar/SortBar';

function Adverts() {
  const adverts = useAppSelector((state) => state.adverts.list);
  const dispatch = useAppDispatch();
  const context = 'adverts';

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Box
      className="adverts-container"
      sx={{
        height: '100vh',
        width: '82rem',
        position: 'relative',
        padding: '11rem 0rem',
        margin: 'auto',
      }}
    >
      <Stack
        className="adverts-navigation"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2rem"
      >
        <SortBar />
        <AdvertModal />
      </Stack>

      <ContentAdvert adverts={adverts} context={context} />
    </Box>
  );
}

export default Adverts;
