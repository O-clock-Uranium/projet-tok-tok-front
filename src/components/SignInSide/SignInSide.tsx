import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import logo from '../../assets/logo.svg';
import img4 from '../../fakedata/banane-chat.jpg';
import img3 from '../../fakedata/cd.jpg';
import img1 from '../../fakedata/jjg.jpg';
import img2 from '../../fakedata/ps.jpg';


function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/home">
        Tok Tok
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const images = [img1, img2, img3, img4];

export default function SignInSide() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={5}
        md={8}
        sx={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: `900ms ease`,
        }}
      />
      <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={logo}
            // height="55.75"
            width="130"
            alt="Logo TokTok"
            style={{ marginTop: '10%', marginBottom: '15%' }}
          />

          <Typography component="h1" variant="h5">
            Viens rencontrer les voisins (les plus chauds) de ta région !
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se rappeler de moi"
            /> */}
            <Button
              href="/home"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: 'white', fontSize: '1.3rem' }}
            >
              Se Connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Mot de passe oublié ? <br />
                  SHEH !
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  Pas encore de compte ? <br />
                  INSCRIS TOI WESH !!
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
