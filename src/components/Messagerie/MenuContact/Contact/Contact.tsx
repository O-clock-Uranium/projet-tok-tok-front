import { Button, Paper, Typography } from '@mui/material';
import { ContactUser } from '../../../../@types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchMessages } from '../../../../store/reducers/messagerie';

interface ContactProps {
  contact: ContactUser;
  id: number;
  setDestinataireId: React.Dispatch<React.SetStateAction<number>>;
}

function Contact({ contact, id, setDestinataireId }: ContactProps) {
  const dispatch = useAppDispatch();
  console.log(id);

  const handleClick = () => {
    dispatch(fetchMessages(contact.id));
    setDestinataireId(contact.id);
    console.log(contact.id);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        key={id}
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
          {contact.firstname} {contact.lastname}{' '}
        </Typography>
      </Button>
    </div>
  );
}

export default Contact;
