import { Button, Paper, Typography } from '@mui/material';
import { ContactUser } from '../../../../@types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchMessages } from '../../../../store/reducers/messagerie';

interface ContactProps {
  conversationId: number;
  contact: ContactUser;
  destinataireId: number;
  setDestinataireId: React.Dispatch<React.SetStateAction<number>>;
  destinataireName: string;
  setDestinataireName: React.Dispatch<React.SetStateAction<string>>;
}

function Contact({ contact, setDestinataireName, setDestinataireId }: ContactProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setDestinataireId(contact.contactInfo.id);
    setDestinataireName(
      `${contact.contactInfo.firstname} ${contact.contactInfo.lastname}`
    );
    
    dispatch(fetchMessages(contact.contactInfo.id));
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        key={contact.contactInfo.id}
        sx={{
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
          color: '#fff',
          width: '10rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          mb: '0.5rem',
        }}
      >
        <Typography>
          {' '}
          {contact.contactInfo.firstname} {contact.contactInfo.lastname}{' '}
        </Typography>
      </Button>
    </div>
  );
}

export default Contact;
