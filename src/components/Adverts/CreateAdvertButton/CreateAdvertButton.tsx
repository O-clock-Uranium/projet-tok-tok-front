import Button from '@mui/material/Button';
import * as React from 'react';

export default function CreateAdvertButton() {
  return (
    <Button
      variant="contained"
      sx={{
        maxWidth: '300px',
        backgroundColor: '#03665C',
        color: '#fff',
        textTransform: 'none',
        fontSize: '2rem',
        borderRadius: '20px',
      }}
    >
      Créer une Annonce
    </Button>
  );
}
