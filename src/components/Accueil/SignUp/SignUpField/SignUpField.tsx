import { TextField } from '@mui/material';
import { ChangeEvent, useId, useState } from 'react';

interface FieldProps {
  name: string;
  label: string;
  [prop: string]: unknown;
}

function SignUpField({ name, label, ...props }: FieldProps) {
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
      autoComplete="current-password"
      id={inputId}
      name={name}
      label={label}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}

export default SignUpField;
