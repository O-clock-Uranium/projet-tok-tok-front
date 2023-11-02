import { Button, Stack } from '@mui/material';

export default function ContactButton() {
  return (
    <Stack mx="auto" direction="row">
      <Button
        sx={{
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
          color: '#fff',
          fontSize: '1.5rem',
          borderRadius: '2rem',
          fontFamily: 'DM Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          p: '1rem 2rem',
          height: '6rem',
          border: '0px',
        }}
      >
        Contacter le vendeur
      </Button>
    </Stack>
  );
}
