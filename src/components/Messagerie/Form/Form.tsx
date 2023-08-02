import { IconButton } from '@mui/material';
import { useState } from 'react';

import send from '../../../assets/icons/paper_plane.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchMessages, sendMessage } from '../../../store/reducers/messagerie';

import './Form.scss';

interface FormProps {
  destinataireId: number;
  setDestinataireId: React.Dispatch<React.SetStateAction<number>>;
}

function Form({ destinataireId, setDestinataireId }: FormProps) {
  const [currentMessage, setCurrentMessage] = useState('');
  // const pseudo = useAppSelector((state) => state.user.firstname);
  const contact = useAppSelector((state) => state.messagerie.contacts);
  console.log(contact);

  const dispatch = useAppDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentMessage(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (currentMessage.trim()) {
      dispatch(sendMessage(formData));
      setCurrentMessage('');
      dispatch(fetchMessages(destinataireId));
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        placeholder="Saisissez votre message…"
        aria-label="Saisissez votre message"
        name="content"
        value={currentMessage}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-input"
        name="destinataire"
        value={destinataireId}
        readOnly
        hidden
      />

      <IconButton
        type="submit"
        sx={{
          my: 'auto',
          maxHeight: '5.2rem',
          p: '0.1rem',
          borderRadius: '5rem',
          backgroundColor: 'primary.dark',
          '&:hover': {
            bgcolor: 'primary.light',
          },
          '&:active': {
            bgcolor: 'primary',
          },
        }}
      >
        <img alt="Send" src={send} style={{ padding: '1rem' }} />
      </IconButton>
    </form>
  );
}

export default Form;
