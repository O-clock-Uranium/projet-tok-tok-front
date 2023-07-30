import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFavourites } from '../../store/reducers/adverts';
import AdvertCard from '../Adverts/Advert/Advert';

export default function Favourites() {
  const favourites = useAppSelector((state) => state.adverts.favourites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavourites());
  }, [dispatch]);

  const favouritesList = favourites.map((e) => {
    return <AdvertCard key={e.id} {...e} />;
  });

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
      />
      <Stack direction="row" flexWrap="wrap" gap="1rem" mt="2rem">
        {!favouritesList ? <p>Vous navez pas de favoris</p> : favouritesList}
      </Stack>
    </Box>
  );
}
