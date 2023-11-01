import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Alert } from '@mui/material';
import { FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { login } from '../../../store/reducers/user';
import FormField from '../FormField/FormField';

export default function Login() {
  const isLogged = useAppSelector((state) => state.user.logged);
  const errorMessage = useAppSelector((state) => state.user.error);

  const dispatch = useAppDispatch();

  // Se déclenche quand l'utilsateur valide le formulaire
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // on récupère les données du formulaire
    const formData = new FormData(event.currentTarget);
    // on appel l'action login présente dans le userReducer
    dispatch(login(formData));
  };

  return (
    <>
      {/* On redirige sur la même page pour la recharger et afficher l'accueil */}
      {isLogged && <Navigate to="/" />}

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{}}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <FormField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <FormField
          name="password"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          required
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
    </>
  );
}
