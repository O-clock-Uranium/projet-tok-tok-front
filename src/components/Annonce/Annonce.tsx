import {
  Avatar,
  Box,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { useParams } from 'react-router-dom';
import bookmark from '../../assets/icons/bookmark.svg';
import { useAppSelector } from '../../hooks/redux';
import { findAdvert } from '../../store/selectors/adverts';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

export default function Annonce() {
  const { slug } = useParams();

  const advert = useAppSelector((state) =>
    findAdvert(state.adverts.list, slug as string)
  );

  if (!advert) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

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
        <Paper
          elevation={0}
          sx={{
            width: '50rem',
            height: '30rem',
            mx: 'auto',
            borderRadius: '2rem',
          }}
        >
          <Stack direction="column">
            <Stack
              paddingBottom="2.5rem"
              spacing={5}
              direction="row"
              justifyContent="space-around"
            >
              <Avatar
                alt="Jean-Jacques"
                src="src/fakedata/jjg.jpg"
                sx={{ width: 40, height: 40, ml: '1rem', mt: '1rem' }}
              />
              <Stack direction="column">
                <Typography
                  sx={{
                    fontFamily: 'Manrope',
                    fontSize: '1.1rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    my: '0.5rem',
                  }}
                >
                  {advert.advert_creator.firstname}{' '}
                  {advert.advert_creator.lastname}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Manrope',
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                  }}
                >
                  {advert.created_at}
                </Typography>
              </Stack>
              <IconButton
                aria-label="Favorite"
                sx={{
                  px: '2rem',
                  py: '1rem',
                  borderRadius: '9.5rem',
                  gap: '1rem',
                }}
              >
                <img alt="Add-Favorite" src={bookmark} />
              </IconButton>
            </Stack>
            {/* //TODO: insérer un carroussel */}
            <CardMedia
              component="img"
              height="120rem"
              src={
                advert.images.length == 0
                  ? 'http://localhost:3000/images/default-advert-picture.png'
                  : advert.images[0].thumbnail
              }
              alt="green iguana"
            />
            <Stack direction="row" justifyContent="space-around">
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {advert.title}
              </Typography>
              <Typography sx={{ fontSize: '1.5rem' }}>
                {advert.price} €
              </Typography>
            </Stack>
            <Typography sx={{ textAlign: 'center' }}>
              {advert.content}
            </Typography>
            <Stack direction="row" justifyContent="space-around">
              <Paper
                sx={{
                  backgroundColor: '#F5F6FA',
                  width: '10rem',
                  m: '1rem',
                  p: '1rem',
                }}
              >
                <Stack direction="row" gap="1rem" justifyContent="center">
                  <Typography>Distance</Typography>
                  <Typography>1 km</Typography>
                </Stack>
              </Paper>
              <Paper
                sx={{
                  backgroundColor: '#03665C',
                  color: '#fff',
                  width: '10rem',
                  m: '1rem',
                  p: '1rem',
                }}
              >
                <Stack direction="row" gap="1rem" justifyContent="center">
                  <Typography>Contacter le vendeur</Typography>
                </Stack>
              </Paper>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
