import { useId, useState } from 'react';
import { TextField } from '@mui/material';

interface FieldProps {
  name: string;
  type: string;
  autoComplete: string;
  [prop: string]: unknown;
}

function ContactModalField({ name, type, autoComplete, ...props }: FieldProps) {
  const [value, setValue] = useState('');

  const inputId = useId();

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      label={name}
      autoComplete={autoComplete}
      id={inputId}
      type={type}
      name={name}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...props}
    />
  );
}

export default ContactModalField;
