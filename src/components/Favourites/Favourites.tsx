import { useEffect } from 'react';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import { Box, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import no_bookmarks from '../../fakedata/no_bookmarks.png';
import { fetchFavourites } from '../../store/reducers/adverts';
import AdvertCard from '../Adverts/AdvertCard/AdvertCard';
import WhiteBar from './WhiteBar/WhiteBar';

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
    <div className="favorites-container">
      <WhiteBar />
      <Box
        width="100%"
        sx={{
          my: '2rem',
          borderRadius: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'flex-start',
        }}
      >
        {favouritesList.length === 0 ? (
          <Stack
            direction="column"
            padding="3rem"
            sx={{
              backgroundColor: 'white',
              borderRadius: '2rem',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                p: '1rem',
              }}
            >
              Vous navez pas encore de favoris ? <br />
              Cliquez sur cette icône{' '}
              <BookmarkBorderSharpIcon style={{ fontSize: '2rem' }} /> en haut à
              droite d&apos;une annonce pour qu&apos;elle apparaisse ici.
              <img
                width="200rem"
                src={no_bookmarks}
                alt="no bookmarks"
                style={{ margin: 'auto', padding: '2rem' }}
              />
            </Typography>
          </Stack>
        ) : (
          favouritesList
        )}
      </Box>
    </div>
  );
}
