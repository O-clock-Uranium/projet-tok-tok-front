import { Paper } from '@mui/material';

function Contact() {
  return (
    <Paper
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
      <p> Nom Prénom</p>
    </Paper>
  );
}

export default Contact;
