import { Stack, Typography } from '@mui/material';

function WhiteBar() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
      sx={{
        width: '100%',
        height: '7rem',
        my: '2rem',
        borderRadius: '2rem',
        backgroundColor: 'white',
      }}
    >
      <Typography
        sx={{
          alignItems: 'left',
          fontSize: '1.8rem',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          p: '1rem',
        }}
      >
        Favoris
      </Typography>
    </Stack>
  );
}

export default WhiteBar;
