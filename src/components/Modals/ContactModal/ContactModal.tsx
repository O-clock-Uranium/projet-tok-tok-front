import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { sendMessage } from '../../../store/reducers/messagerie';
import ContactModalField from './ContactModalField/ContactModalField';

export default function ContactModal({ id }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(sendMessage(formData));
    setOpen(false);
  };
  console.log(id);
  return (
    <div>
      <Stack mx="auto" direction="row">
        <Button
          onClick={handleOpen}
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
            // boxShadow: 0,
            border: '0px',
          }}
        >
          Contacter le vendeur
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        component="form"
        onSubmit={handleSubmit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: 'transparent',
            margin: 'auto',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              width: '80%',
              m: 'auto',
              p: '5rem',
              borderRadius: '2rem',
            }}
          >
            {/* Titre */}
            <Typography id="modal-modal-title" fontSize="1.6rem">
              Envoyer un message
            </Typography>
            <ContactModalField
              name="content"
              label="Message"
              type="text"
              autoComplete="none"
            />

            <input
              name="destinataire"
              aria-label="Recipient"
              type="text"
              value={id}
              hidden
              autoComplete="none"
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: 'primary.dark',
                color: '#fff',
                textTransform: 'none',
                fontSize: '1.5rem',
                borderRadius: '1.3rem',
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                mt: '1rem',
                p: '1.2rem',
                boxShadow: 0,
              }}
            >
              Envoyer
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
