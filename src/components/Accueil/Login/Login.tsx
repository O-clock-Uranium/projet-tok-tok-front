import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { login } from '../../../store/reducers/user';
import FormField from '../FormField/FormField';
import { Alert } from '@mui/material';

export default function Login() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const errorMessage = useAppSelector(state=> state.user.error);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(login(formData));
  };

  return (
    <>
      {isLogged && <Navigate to="/home" />}
      {!isLogged && (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{}}>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <FormField
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
          />
          <FormField
            name="password"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
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
      )}
    </>
  );
}
