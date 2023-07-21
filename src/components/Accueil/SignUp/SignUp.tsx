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
      sx={{
        my: 8,
        mx: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ width: '2/3', mx: 2, mt: 1 }}
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
    </Box>
  );
}
