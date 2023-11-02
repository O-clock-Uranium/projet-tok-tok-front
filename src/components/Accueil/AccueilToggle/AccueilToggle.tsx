import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

export default function ButtonToggle() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    // Stack : composant MUI qui fonctionne comme une div
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ p: '2rem' }}
    >
      <Button
        // On inverse la valeur au clic
        onClick={() => setIsSignup(!isSignup)}
        sx={{
          fontSize: '1.5rem',
          borderRadius: '5rem',
        }}
      >
        {/* On fait varier l'affichage en fonction du state  */}
        {isSignup ? 'Se connecter' : 'S inscrire '}
      </Button>
      {isSignup ? <SignUp /> : <Login />}
    </Stack>
  );
}
