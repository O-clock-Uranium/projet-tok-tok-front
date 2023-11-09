import { useState, ChangeEvent, FormEvent } from 'react';
import { IconButton } from '@mui/material';
import send from '../../../assets/icons/paper_plane.svg';
import { useAppDispatch} from '../../../hooks/redux';
import { fetchMessages, sendMessage } from '../../../store/reducers/messagerie';

import './Form.scss';

interface FormProps {
  destinataireId: number;
}

function Form({ destinataireId }: FormProps) {
  const [currentMessage, setCurrentMessage] = useState('');

  const dispatch = useAppDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCurrentMessage(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
