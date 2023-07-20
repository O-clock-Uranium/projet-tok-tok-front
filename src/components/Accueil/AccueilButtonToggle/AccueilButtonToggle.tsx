import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

export default function ButtonToggle() {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Button
        onClick={() => setIsSignup(!isSignup)}
        sx={{
          borderRadius: '5rem',
          p: '1rem !important',
          gap: '1rem',
          backgroundColor: 'primary.dark !important',
          ':hover': { backgroundColor: 'primary.dark', Color: 'white' },
        }}
      >
        {isSignup ? 'S inscrire' : 'Se connecter'}
      </Button>
      {isSignup ? <SignUp /> : <Login />}
    </Stack>
  );
}
