import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import { findAdvert } from '../../store/selectors/adverts';
import calculateTimeSpent from '../../utils/date';
import { calculateDistance } from '../../utils/gps';
import ContentUserAdvert from '../Adverts/ContentUserAdvert/ContentUserAdvert';
import ContactModal from '../Modals/ContactModal/ContactModal';
import TriplePointButton from '../TriplePointButton/TriplePointButton';
import SeparateBar from './SeparateBar/SeparateBar';

export default function Advert() {
  const userState = useAppSelector((state) => state.user);
  const { slug } = useParams();
  const advert = useAppSelector((state) =>
    findAdvert(state.adverts.list, slug as string)
  );

  const [indexImg, setIndexImg] = useState(0);

  const handleClickNext = () => {
    if (advert?.images && indexImg === advert.images.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };

  const handleClickPrevious = () => {
    if (advert?.images && indexImg === 0) {
      setIndexImg(advert.images.length - 1);
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

  const context = 'advert';

  if (!advert) {
    throw new Error(
      JSON.stringify(
        new Response('', {
          status: 404,
          statusText: 'Not Found',
        })
      )
    );
  }

  const adverts = useAppSelector((state) => state.adverts.userAdverts);
  return (
    <Box
      className="advert-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '82rem',
        position: 'relative',
        top: '11rem',
        margin: 'auto',
        gap: '2.5rem',
        paddingBottom: '10rem',
      }}
    >
      <Stack
        direction="column"
        gap="1.5rem"
        sx={{ p: '2rem', borderRadius: '2rem', backgroundColor: '#fff' }}
      >
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
          <TriplePointButton
            id={advert.id}
            context={context}
            advert_creator={advert.advert_creator}
          />
        </Stack>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '2rem',
            pt: '2rem',
            pb: '2.5rem',
          }}
        >
          {advert?.images && advert.images.length > 1 && (
            <IconButton aria-label="delete" onClick={handleClickPrevious}>
              <ArrowBackIosIcon />
            </IconButton>
          )}
          <img
            src={
              advert?.images?.length === 0
                ? 'https://tok-tok-api.onrender.com/images/default-advert-picture.png'
                : advert?.images?.[indexImg]?.thumbnail
            }
            alt="images advert"
            style={{
              maxHeight: '50rem',
              objectFit: 'contain',
              borderRadius: '2rem',
            }}
          />
          {advert?.images && advert.images.length > 1 && (
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
      <SeparateBar advert={advert} />
      <ContentUserAdvert userAdverts={adverts} />
    </Box>
  );
}
