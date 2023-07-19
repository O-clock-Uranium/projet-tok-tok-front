import Button from '@mui/material/Button';
import * as React from 'react';

export default function CreateAdvertButton() {
  return (
    <Button
      variant="contained"
      sx={{
        maxWidth: '300px',
        position: 'fixed',
        right: '15rem',
        top: '12.5rem',
        backgroundColor: '#03665C',
        color: '#fff',
        textTransform: 'none',
        fontSize: '2rem',
      }}
    >
      Créer une Annonce
    </Button>
  );
}
