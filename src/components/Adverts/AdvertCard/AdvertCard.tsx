import { Avatar, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { AdvertCreator, Favourite, Image } from '../../../@types';

import { calculateTimeSpent } from '../../../utils/date';
import TriplePointButton from '../../TriplePointButton/TriplePointButton';
import FavouriteButton2 from '../FavouriteButton/FavouriteButton2';

import { useAppSelector } from '../../../hooks/redux';
import { calculateDistance } from '../../../utils/gps';

interface AdvertCardProps {
  id: number;
  slug: string;
  title: string;
  // content: string;
  price: number;
  advert_creator: AdvertCreator;
  images: Image[];
  created_at: any;
  favorited_by: Favourite[];
}

export default function AdvertCard({
  id,
  price,
  advert_creator,
  title,
  // content,
  slug,
  images,
  created_at,
  favorited_by,
}: AdvertCardProps) {
  const userState = useAppSelector((state) => state.user);
  const location = useLocation();
  const isProfilePage = location.pathname === `/profil/${advert_creator.slug}`;
  const context = 'adverts';

  const distance = calculateDistance(
    userState.latitude,
    userState.longitude,
    advert_creator.latitude,
    advert_creator.longitude
  );

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '30rem',
        height: '34rem',
        mx: 'auto',
        borderRadius: '2rem',
        gap: '1.5rem',
        p: '2rem',
      }}
    >
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        alignSelf="stretch"
      >
        <Stack direction="row" alignItems="center" gap="1rem" flex="1">
          {/* Avatar */}
          <Avatar
            alt="photo de profil"
            src={advert_creator.thumbnail}
            sx={{ width: '4rem', height: '4rem' }}
          />
          <Stack direction="column" gap="0.3rem">
            <Typography
              sx={{
                fontFamily: 'Manrope',
                fontSize: '1.5rem',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
              }}
            >
              <Link
                to={`/profil/${advert_creator.slug}`}
                style={{ textDecoration: 'none', color: '#000' }}
              >
                {/* Nom de l'utilisateur */}
                {advert_creator.firstname} {advert_creator.lastname}
              </Link>
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Manrope',
                fontSize: '1.2rem',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                color: '#A5A5A5',
              }}
            >
              {/* Date de création */}
              Il y a {calculateTimeSpent(created_at)}
            </Typography>
          </Stack>
        </Stack>
        {/* Bookmark icon et del icon */}
        {!isProfilePage && (
          <FavouriteButton2 id={id} favorited_by={favorited_by} />
        )}
        <TriplePointButton id={id} context={context} />
      </Stack>
      {/* Lien + image */}
      <a href={`/adverts/${slug}`}>
        <img
          src={
            images.length === 0
              ? 'http://localhost:3000/images/default-advert-picture.png'
              : images[0].thumbnail
          }
          style={{
            height: '16rem',
            width: '26rem',
            objectFit: 'cover',
            borderRadius: '2rem',
          }}
          alt="advert illustration"
        />
      </a>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        gap="1.5rem"
        align-self="stretch"
        width="100%"
      >
        <Typography
          sx={{
            flex: '1 0 0',
            fontFamily: 'Manrope',
            fontSize: '1.5rem',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          {/* Lien + titre annonce */}
          <a
            href={`/adverts/${slug}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {title}
          </a>
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
          {/* Prix */}
          {price} €
        </Typography>
      </Stack>
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
        <Stack direction="row" gap="1rem" justifyContent="center">
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
            {distance} km
          </Typography>
        </Stack>
      </Paper>
    </Paper>
  );
}
