import { Button, Typography } from '@mui/material';
import { ContactUser } from '../../../../@types';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchMessages } from '../../../../store/reducers/messagerie';

interface ContactProps {
  conversationId: number;
  contact: ContactUser;
  destinataireId: number;
  setDestinataireId: React.Dispatch<React.SetStateAction<number>>;
  destinataireName: string;
  setDestinataireName: React.Dispatch<React.SetStateAction<string>>;
}

function Contact({
  contact,
  setDestinataireName,
  setDestinataireId,
}: ContactProps) {
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
        className="contact-btn"
        onClick={handleClick}
        key={contact.contactInfo.id}
        sx={{
          backgroundColor: '#49c1ac',
          '&:hover': {
            backgroundColor: '#6dd4c4',
          },
          borderRadius: '2rem',
          border: '0px',
          width: '80%',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.3rem',
            color: '#fff',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            p: '1rem 1rem',
          }}
        >
          {' '}
          {contact.contactInfo.firstname} {contact.contactInfo.lastname}{' '}
        </Typography>
      </Button>
    </div>
  );
}

export default Contact;
