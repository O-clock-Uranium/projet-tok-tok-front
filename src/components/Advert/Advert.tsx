import {
  Avatar,
  Box,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { findAdvert } from '../../store/selectors/adverts';
import ContentAdvert from '../Adverts/ContentAdvert/ContentAdvert';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';
import ContactButton from './ContactButton/ContactButton.ContactButton';
import FavouriteButton from '../Adverts/FavouriteButton/FavouriteButton';
import { Advert } from '../../@types';
import { calculateTimeSpent } from '../../utils/date';

export default function Annonce({ id }: Advert) {
  const adverts = useAppSelector((state) => state.adverts.list);
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
          top: '12rem',
          margin: 'auto',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: '55rem',
            maxHeight: '50rem',
            mx: 'auto',
            borderRadius: '2rem',
          }}
        >
          <Stack direction="column">
            <Stack
              spacing={12}
              direction="row"
              justifyContent="space-around"
              my="2rem"
            >
              <Avatar
                alt="User-Avatar"
                src={advert.advert_creator.thumbnail}
                sx={{ width: 50, height: 50, ml: '1rem' }}
              />
              <Stack direction="column">
                <Typography
                  sx={{
                    fontFamily: 'Manrope',
                    fontSize: '1.4rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    mb: '0.5rem',
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
                  Il y a {calculateTimeSpent(advert.created_at)}
                </Typography>
              </Stack>
              <FavouriteButton id={id} />
            </Stack>
            <CardMedia
              component="img"
              height="200rem"
              src={advert.images.map((image) => image.thumbnail)}
              alt="green iguana"
            />
            <Stack direction="row" justifyContent="space-between" m="1rem">
              <Paper
                sx={{
                  backgroundColor: '#F5F6FA',
                  width: '10rem',
                  p: '1rem',
                }}
              >
                <Stack direction="row" gap="1rem" justifyContent="center">
                  <Typography>Distance</Typography>
                  <Typography>1 km</Typography>
                </Stack>
              </Paper>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {advert.title}
              </Typography>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {advert.price} €
              </Typography>
            </Stack>
            <Typography
              sx={{ fontSize: '1.4rem', textAlign: 'center', mb: '1rem' }}
            >
              {advert.content}
            </Typography>

            <ContactButton />
          </Stack>
        </Paper>
        <Paper
          sx={{
            textAlign: 'center',
            fontSize: '3rem',
            mt: '2rem',
            mb: '2rem',
            p: '0.2rem',
            borderRadius: '2rem',
            borderBottom: '0.5rem solid #03665C',
          }}
        >
          <p>Les autres annonces proposées par ce vendeur.</p>
        </Paper>
        <ContentAdvert adverts={adverts} />
      </Box>
    </>
  );
}
