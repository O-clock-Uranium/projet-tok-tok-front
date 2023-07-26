import { TextField } from '@mui/material';
import { ChangeEvent, useId, useState } from 'react';

interface FieldProps {
  name: string;
  [prop: string]: unknown;
}

function Field({ name, ...props }: FieldProps) {
  const [value, setValue] = useState('');

  const inputId = useId();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      label={name}
      autoComplete="current-password"
      id={inputId}
      name={name}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}

export default Field;
