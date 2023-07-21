import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'server',
    });
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{}}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Adresse mail"
        name="email"
        autoComplete="email"
        autoFocus
        // value={email}
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
        // value={password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, color: 'white', fontSize: '1.3rem' }}
      >
        Se Connecter
      </Button>
    </Box>
  );
}
