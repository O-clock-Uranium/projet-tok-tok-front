import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { TextField } from '@mui/material';
import * as React from 'react';

import Copyright from '../Copyright/Copyright';

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <Box
      sx={{
        width: '2/3',
        my: 8,
        mx: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ width: '2/3', mx: 2, mt: 1 }}
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
              Mot de passe oublié ?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" variant="body2">
              Pas encore de compte ?
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Box>
  );
}
