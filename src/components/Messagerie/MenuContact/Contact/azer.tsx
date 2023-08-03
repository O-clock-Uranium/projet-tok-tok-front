import { Paper, Typography } from '@mui/material';
import { useAppSelector } from '../../../../hooks/redux';

function Contact() {
  const contacts = useAppSelector((state) => state.messagerie.contacts);
  // ici, il faut mettre un ternaire : parfois c'est le user_one_info, parfois le user_two_info
  const Infos = contacts.map((contact) => contact.user_one_info);
  // console.log(Infos);
  // console.log(contacts);

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
      <div>
        {Infos.map((info) => (
          <Typography key={info.id}>
            {' '}
            {info.firstname} {info.lastname}{' '}
          </Typography>
        ))}
      </div>
    </Paper>
  );
}

export default Contact;
