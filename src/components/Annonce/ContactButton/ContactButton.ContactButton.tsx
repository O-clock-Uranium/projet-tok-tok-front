import { Button, Stack } from '@mui/material';

export default function ContactButton() {
  return (
    <Stack mx="auto" direction="row">
      <Button
        variant="contained"
        endIcon=""
        sx={{
          mt: '1rem',
          mb: '1rem',
          width: '50rem',
          fontSize: '1.4rem',
          borderRadius: '2rem',
        }}
      >
        Contacter le vendeur
      </Button>
    </Stack>
  );
}
