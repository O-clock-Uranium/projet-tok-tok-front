import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import no_bookmarks from '../../fakedata/no_bookmarks.png';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
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
    <Box
      sx={{
        display: 'flex',
        direction: 'column',
        gap: '2rem',
        width: '100rem',
        margin: 'auto',
        pt: '11rem',
      }}
    >
      <Stack
        display="flex"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="8.2rem"
      >
        <WhiteBar />
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex"
          alignItems="flex-start"
          gap="5rem"
          alignSelf="stretch"
        >
          {favouritesList.length === 0 ? (
            <Box
              width="100rem"
              sx={{ backgroundColor: '#fff', my: '2rem', borderRadius: '2rem' }}
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
                <BookmarkBorderSharpIcon style={{ fontSize: '2rem' }} /> en haut
                à droite d&apos;une annonce pour qu&apos;elle apparaisse ici.
                <img
                  width="200rem"
                  src={no_bookmarks}
                  alt="no bookmarks"
                  style={{ margin: 'auto' }}
                />
              </Typography>
            </Box>
          ) : (
            favouritesList
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
