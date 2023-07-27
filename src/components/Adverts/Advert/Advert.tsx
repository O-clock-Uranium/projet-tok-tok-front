import { Avatar, CardMedia, IconButton, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import bookmark from '../../../assets/icons/bookmark.svg';

interface AdvertCardProps {
  slug: string;
  title: string;
  content: string;
  price: number;
  thumbnail: string;
}

const linkStyle = {
  textDecoration: 'none',
};

export default function AdvertCard({
  content,
  price,
  thumbnail,
  title,
  slug,
}: AdvertCardProps) {
  return (
    <Link to={`/adverts/${slug}`} style={linkStyle}>
      <Paper
        elevation={0}
        sx={{
          width: '30rem',
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
            justifyContent="space-evenly"
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
                {}
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
                Il y a 5 minutes
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
          <CardMedia
            component="img"
            height="120rem"
            src={thumbnail}
            alt="green iguana"
          />
          <Typography sx={{ textAlign: 'center' }}>{content}</Typography>
          <Stack direction="row" justifyContent="space-around">
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: '1.5rem' }}>{price} €</Typography>
          </Stack>
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
        </Stack>
      </Paper>
    </Link>
  );
}
