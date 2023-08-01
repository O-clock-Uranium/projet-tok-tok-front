import { Avatar, Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Advert } from '../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserAdverts } from '../../store/reducers/adverts';
import { findAdvert } from '../../store/selectors/adverts';
import { calculateTimeSpent } from '../../utils/date';
import ContentUserAdvert from '../Adverts/ContentUserAdvert/ContentUserAdvert';

// import FavouriteButton2 from '../Adverts/FavouriteButton/FavouriteButton2';
// import TriplePointButton from '../TriplePointButton/TriplePointButton';
// import AdvertCaroussel from './AdvertCaroussel/AdvertCaroussel';
import Caroussel from './AdvertCaroussel/Caroussel';
import ContactButton from './ContactButton/ContactButton.ContactButton';
import SeparateBar from './SeparateBar/SeparateBar';
import AdvertCaroussel from './AdvertCaroussel/AdvertCaroussel';

export default function Annonce({ id }: Advert) {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const advert = useAppSelector((state) =>
    findAdvert(state.adverts.list, slug as string)
  );
  const userId = advert?.advert_creator.id;

  if (!advert) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  useEffect(() => {
    dispatch(fetchUserAdverts(userId));
  }, [dispatch, userId]);

  const adverts = useAppSelector((state) => state.adverts.userAdverts);
  console.log('advert', advert);
  console.log('adverts', adverts);
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        width: '100rem',
        position: 'relative',
        top: '12rem',
        margin: 'auto',
        gap: '2.5rem',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100rem',
          mx: 'auto',
          borderRadius: '2rem',
          p: '3rem',
        }}
      >
        <Stack direction="column" gap="1.5rem">
          <Stack
            direction="row"
            justifyContent="space-between"
            my="1rem"
            gap="1rem"
          >
            <Avatar
              alt="User-Avatar"
              src={advert.advert_creator.thumbnail}
              sx={{ width: 60, height: 60 }}
            />
            <Stack direction="column" flex="1" justifyContent="center">
              <Typography
                sx={{
                  fontFamily: 'Manrope',
                  fontSize: '1.6rem',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                <Link
                  to={`/profil/${advert.advert_creator.slug}`}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  {advert.advert_creator.firstname}{' '}
                  {advert.advert_creator.lastname}
                </Link>
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Manrope',
                  fontSize: '1.2rem',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                Il y a {calculateTimeSpent(advert.created_at)}
              </Typography>
            </Stack>
            {/* {!isProfilePage && (
            <FavouriteButton2
            id={id} favorited_by={favorited_by}
            />
            )}
            <TriplePointButton
            id={id} context={context}
            /> */}
          </Stack>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '76rem',
              borderRadius: '2rem',
              pt: '2rem',
              pb: '2.5rem',
            }}
          >
            <img
              src={
                advert.images.length === 0 ? (
                  'http://localhost:3000/images/default-advert-picture.png'
                ) : (
                  <>
                    <AdvertCaroussel advert={advert} />
                    {/* <Caroussel advert={advert} /> */}
                  </>
                )
              }
              alt="caroussel images advert"
              style={{ objectFit: 'cover', borderRadius: '2rem' }}
            />
          </Box>

          <Stack
            direction="row"
            gap="2rem"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontFamily: 'Manrope',
                fontSize: '1.7rem',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                display: 'flex',
                flex: '1',
              }}
            >
              {advert.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Manrope',
                fontSize: '1.5rem',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                textAlign: 'right',
                // mr: '9rem',
              }}
            >
              {advert.price} €
            </Typography>
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                p: '0.5rem 2rem',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '9.5rem',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Manrope',
                  fontSize: '1.3rem',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '2.6rem',
                  color: '#A5A5A5',
                }}
              >
                {/* Distance */}
                Distance
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Manrope',
                  fontSize: '1.3rem',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '2.6rem',
                }}
              >
                {} km
              </Typography>
            </Paper>
          </Stack>
          <Typography
            sx={{
              mb: 0,
              pb: 0,
              fontFamily: 'DM Sans',
              fontSize: '1.5rem',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%',
            }}
          >
            {advert.content}
          </Typography>
          <ContactButton />
        </Stack>
      </Paper>
      <SeparateBar advert={advert} />
      <ContentUserAdvert userAdverts={adverts} />
    </Grid>
  );
}
