import { Button } from '@mui/material';

function AddContact() {
  return (
    <Button
      sx={{
        width: '10rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        backgroundColor: 'default',
        mb: '0.5rem',
      }}
    >
      <p> Ajouter...</p>
    </Button>
  );
}

export default AddContact;
