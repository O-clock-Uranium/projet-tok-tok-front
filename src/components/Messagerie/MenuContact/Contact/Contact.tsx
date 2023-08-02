import { Paper, Typography } from '@mui/material';
import { ContactUser } from '../../../../@types';
import { useAppSelector } from '../../../../hooks/redux';

interface ContactProps {
  firstname: string;
  lastname: string;
  thumbnail: string;
  contact: {
    user_one_info: {
      firstname: string;
      lastname: string;
      thumbnail: string;
    };
  };
}

function Contact() {
  const contacts = useAppSelector((state) => state.messagerie.contacts);
  // ici, il faut mettre un ternaire : parfois c'est le user_one_info, parfois le user_two_info
  const userInfos = contacts.map((contact) => contact.user_one_info);
  console.log(userInfos);
  console.log(contacts);
  

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
        {userInfos.map((info) => (
          <Typography key={info.id}>test </Typography>
        ))}
      </div>
    </Paper>
  );
}

export default Contact;
