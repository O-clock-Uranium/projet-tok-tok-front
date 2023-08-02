import { Paper } from '@mui/material';

interface ContactProps {
  firstname: string;
  lastname: string;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Contact({ firstname, lastname }: ContactProps) {
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
      <p>
        {firstname} {lastname}
      </p>
    </Paper>
  );
}

export default Contact;
