import Button from '@mui/material/Button';
import * as React from 'react';

export default function CreateAdvertButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'primary.dark',
        color: '#fff',
        textTransform: 'none',
        fontSize: '1.5rem',
        borderRadius: '2rem',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        p: '2rem',
        height: '6rem',
        boxShadow: 0,
      }}
    >
      Créer une Annonce
    </Button>
  );
}
