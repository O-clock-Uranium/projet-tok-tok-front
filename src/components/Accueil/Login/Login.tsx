import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { login } from '../../../store/reducers/user';
import LoginField from './LoginField/LoginField';

export default function Login() {
  // const isLogged = useAppSelector((state) => state.user.logged);

  // const loggedMessage = useAppSelector(
  //   (state) => `Bienvenue ${state.user.pseudo}`
  // );

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(login(formData));
  };
  return (
    // {isLogged && (
    //! Rediriger vers la page Homepage
    // )}
    // {
    // !isLogged && (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{}}>
      <LoginField name="email" type="email" />
      <LoginField name="password" type="password" />

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
