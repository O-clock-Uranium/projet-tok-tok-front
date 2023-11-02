import { Paper, Typography } from '@mui/material';
import { Advert } from '../../../@types';

interface SeparateBarProps {
  advert: Advert;
}

export default function SeparateBar({ advert }: SeparateBarProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        margin: 'auto',
        borderRadius: '2rem',
        height: '6.7rem',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        fontFamily="Manrope"
        fontSize="1.8rem"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="normal"
        margin="auto"
      >
        Les autres annonces proposées par {advert.advert_creator.firstname}{' '}
        {advert.advert_creator.lastname}
      </Typography>
    </Paper>
  );
}
