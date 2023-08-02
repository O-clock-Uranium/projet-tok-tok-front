import { Paper, Typography } from '@mui/material';

export default function SeparateBar({ advert }: []) {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100rem',
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
