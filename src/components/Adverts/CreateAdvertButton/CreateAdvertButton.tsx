import { Modal, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function CreateAdvertButton() {
  const [Open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(!Open)}
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
      {/* <AdvertModal /> */}
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-advert-form"
        aria-describedby="modal-advert-form"
      >
        <Paper
          sx={{
            backgroundColor: 'white',
            margin: 'auto',
            mt: '20vh',
            width: '50%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            blablabla
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Paper>
      </Modal>
    </>
  );
}
