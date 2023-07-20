import { Stack, Typography } from '@mui/material';
import logo from '../../../assets/logo.svg';

function AccueilLogo() {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <img
        src={logo}
        // height="55.75"
        width="130"
        alt="Logo TokTok"
        style={{ marginTop: '10%', marginBottom: '15%' }}
      />

      <Typography component="h1" variant="h5">
        Viens rencontrer les voisins de ta région !
      </Typography>
    </Stack>
  );
}

export default AccueilLogo;
