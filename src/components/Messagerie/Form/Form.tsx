import { IconButton } from '@mui/material';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

//import { sendMessage } from '../../../socket/messagerie';

import send from '../../../assets/icons/paper_plane.svg';

import './Form.scss';
import { sendMessage } from '../../../store/reducers/messagerie';

function Form() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentDestinataire, setCurrentDestinataire] = useState(''); // props qui devra venir d'en haut

  const {id} = useAppSelector((state) => state.user);

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
        type="number"
        name="expéditeur"
        value={id}
        readOnly
      />
      <input
        type="text"
        name="room"
        value={currentDestinataire}
        readOnly
      />

      <IconButton
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
