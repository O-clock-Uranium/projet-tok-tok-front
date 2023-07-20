import { Avatar, CardMedia, IconButton, Paper, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import bookmark from '../../../assets/icons/bookmark.svg';
import imgAnnonce from '../../../fakedata/patrick.jpg';

export default function AdvertCard() {
  return (
    <Paper sx={{ width: '30rem', height: '28rem', mx: 'auto' }}>
      <Stack direction="column">
        <Stack
          paddingBottom="2.5rem"
          spacing={5}
          direction="row"
          justifyContent="space-evenly"
        >
          <Avatar
            alt="Jean-Jacques"
            src="src/fakedata/ps.jpg"
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
              Patrick Sébastien
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
              Il y a 13 minutes
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
          image={imgAnnonce}
          alt="green iguana"
        />
        <Stack direction="row" justifyContent="space-around">
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Album exclusif
          </Typography>
          <Typography sx={{ fontSize: '1.5rem' }}>15 €</Typography>
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
            <Typography>10 km</Typography>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
}
