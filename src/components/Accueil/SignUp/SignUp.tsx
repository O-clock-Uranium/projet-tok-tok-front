import { Box, Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { signup } from '../../../store/reducers/user';
import FormField from '../FormField/FormField';

export default function SignUp() {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(signup(formData));
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <FormField
        name="firstname"
        label="Nom"
        type="text"
        autoComplete="family-name"
      />
      <FormField
        name="lastname"
        label="Prénom"
        type="text"
        autoComplete="given-name"
      />
      <FormField name="address" label="Adresse" type="text" autoComplete="" />
      <FormField name="city" label="city" type="text" autoComplete="" />
      <FormField
        name="longitude"
        label="longitude"
        type="text"
        autoComplete=""
      />
      <FormField name="latitude" label="latitude" type="text" autoComplete="" />
      <FormField name="slug" label="slug" type="text" autoComplete="" />
      <FormField name="email" label="Email" type="mail" autoComplete="" />
      <FormField
        name="password"
        label="Mot de passe"
        type="password"
        autoComplete="new-password"
      />
      <FormField
        name="confirmation"
        label="Confirmation de mot de passe"
        type="password"
        autoComplete="new-password"
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
