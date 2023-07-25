import { Box, Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { signup } from '../../../store/reducers/user';
import SignUpField from './SignUpField/SignUpField';

export default function SignUp() {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(signup(formData));
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <SignUpField name="firstname" label="Nom" type="text" />
      <SignUpField name="lastname" label="Prénom" type="text" />
      <SignUpField name="address" label="Adresse" type="text" />
      <SignUpField name="email" label="Email" type="mail" />
      <SignUpField name="password" label="Mot de passe" type="password" />
      <SignUpField
        name="confirmation"
        label="Confirmation de mot de passe"
        type="password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, color: 'white', fontSize: '1.3rem' }}
      >
        S&apos;inscrire
      </Button>
    </Box>
  );
}
