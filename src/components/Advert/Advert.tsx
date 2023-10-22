import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Advert } from '../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserAdverts } from '../../store/reducers/adverts';
import { findAdvert } from '../../store/selectors/adverts';
import { calculateTimeSpent } from '../../utils/date';
import formatDate from '../../utils/date2';
import { calculateDistance } from '../../utils/gps';
import ContentUserAdvert from '../Adverts/ContentUserAdvert/ContentUserAdvert';
import FavouriteButton2 from '../Adverts/FavouriteButton/FavouriteButton2';
import ContactModal from '../Modals/ContactModal/ContactModal';
import TriplePointButton from '../TriplePointButton/TriplePointButton';
import ContactButton from './ContactButton/ContactButton.ContactButton';
import SeparateBar from './SeparateBar/SeparateBar';

export default function Annonce({ id, created_at }: Advert) {
  const userState = useAppSelector((state) => state.user);
  const advertState = useAppSelector((state) => state.adverts.list);
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const advert = useAppSelector((state) =>
    findAdvert(state.adverts.list, slug as string)
  );

  const [indexImg, setIndexImg] = useState(0);

  const handleClickNext = () => {
    if (indexImg === advert?.images.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };

  const handleClickPrevious = () => {
    if (indexImg === 0) {
      setIndexImg(advert?.images.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  };

  const distance = calculateDistance(
    userState.latitude,
    userState.longitude,
    advert?.advert_creator.latitude,
    advert?.advert_creator.longitude
  );

  const location = useLocation();
  // const AdvertPage = location.pathname === `/adverts/${slug}`;

  const context = 'advert';
  const date = formatDate(created_at);

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
                  color: '#a5a5a5',
                }}
              >
                Il y a {calculateTimeSpent(advert.created_at)}
              </Typography>
            </Stack>
            {/* <FavouriteButton2 id={id} favorited_by={favorited_by} /> */}
            <TriplePointButton id={advert.id} context={context} advert_creator={advert.advert_creator} />
          </Stack>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // maxWidth: '76rem',
              borderRadius: '2rem',
              pt: '2rem',
              pb: '2.5rem',
            }}
          >
            {advert.images.length > 1 && (
              <IconButton aria-label="delete" onClick={handleClickPrevious}>
                <ArrowBackIosIcon />
              </IconButton>
            )}
            <img
              src={
                advert.images.length === 0
                  ? 'http://localhost:3000/images/default-advert-picture.png'
                  : advert.images[indexImg].thumbnail
              }
              alt="images advert"
              style={{
                maxHeight: '50rem',
                objectFit: 'contain',
                borderRadius: '2rem',
              }}
            />
            {advert.images.length > 1 && (
              <IconButton aria-label="delete" onClick={handleClickNext}>
                <ArrowForwardIosIcon />
              </IconButton>
            )}
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
                {distance}
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
                km
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                p: '0.5rem 2rem',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '9.5rem',
              }}
            >
              <Typography
                align="center"
                width="center"
                sx={{
                  // display: 'flex',
                  // justifyContent: 'center',*
                  fontFamily: 'Manrope',
                  fontSize: '1.3rem',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '2.6rem',
                  color: '#A5A5A5',
                }}
              >
                {advert.tag.name}
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
          <Stack direction="row" justifyContent="center">
            <ContactModal id={advert.advert_creator.id} />
          </Stack>
        </Stack>
      </Paper>
      <SeparateBar advert={advert} />
      <ContentUserAdvert userAdverts={adverts} />
    </Grid>
  );
}
