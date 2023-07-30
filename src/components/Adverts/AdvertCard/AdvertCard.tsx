import { Avatar, CardMedia, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AdvertCreator, Image } from '../../../@types';
import { useAppSelector } from '../../../hooks/redux';

import { calculateTimeSpent } from '../../../utils/date';
import FavoriteButton from '../FavouriteButton/FavouriteButton';

interface AdvertCardProps {
  id: number;
  slug: string;
  title: string;
  content: string;
  price: number;
  advert_creator: AdvertCreator;
  images: Image[];
  created_at: any;
}

export default function AdvertCard({
  id,
  content,
  price,
  advert_creator,
  title,
  slug,
  images,
  created_at,
}: AdvertCardProps) {
  const userId = useAppSelector((state) => state.user.id);
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '26rem',
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
        <Stack direction="row" alignItems="center" gap="1rem">
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
              {advert_creator.firstname} {advert_creator.lastname}
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
              Il y a {calculateTimeSpent(created_at)}
            </Typography>
          </Stack>
        </Stack>
        <FavoriteButton id={id} />
      </Stack>

      <CardMedia
        component="img"
        height="160rem"
        sx={{ borderRadius: '2rem' }}
        src={
          images.length === 0
            ? 'http://localhost:3000/images/default-advert-picture.png'
            : images[0].thumbnail
        }
        alt="green iguana"
      />

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
          <Link to={`/adverts/${slug}`} style={{ textDecoration: 'none' }}>
            {title}
          </Link>
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
            1 km
          </Typography>
        </Stack>
      </Paper>
    </Paper>
  );
}
