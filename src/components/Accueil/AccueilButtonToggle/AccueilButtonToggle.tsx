import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

export default function ButtonToggle() {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      pt="2rem"
    >
      <Button
        onClick={() => setIsSignup(!isSignup)}
        sx={{
          fontSize: '1.5rem',
          borderRadius: '5rem',
          p: '1rem !important',
          gap: '1rem',
          backgroundColor: 'primary.dark !important',
          ':hover': { backgroundColor: 'primary.dark', Color: 'white' },
        }}
      >
        {isSignup ? 'Se connecter' : 'S inscrire '}
      </Button>
      {isSignup ? <SignUp /> : <Login />}
    </Stack>
  );
}
