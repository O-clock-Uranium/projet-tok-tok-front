import { Box, Button, TextField } from '@mui/material';

export default function SignUp() {
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
      component="form"
      noValidate
      onSubmit={handleSubmit}
      //! j'ai triché en dessous pcque pas le meme comportement sur login
      sx={{ px: '1.9rem' }}
    >
      <TextField
        margin="normal"
        fullWidth
        required
        id="prenom"
        label="Prénom"
        type="text"
        name="Prénom"
        autoComplete="given-name"
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        required
        id="nom"
        label="nom"
        type="text"
        name="nom"
        autoComplete="family-name"
      />
      <TextField
        margin="normal"
        fullWidth
        required
        id="adresse"
        label="adresse"
        type="text"
        name="adresse"
        autoComplete="street-address"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="mail"
        label="adresse mail"
        type="text"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Mot de passe"
        type="text"
        id="password"
        autoComplete="current-password"
      />
      <Button
        href="/home"
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
