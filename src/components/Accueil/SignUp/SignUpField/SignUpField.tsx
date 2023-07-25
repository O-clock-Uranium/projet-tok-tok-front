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
      onChange={(event) => setValue(event.target.value)}
      {...props}
    />
  );
}

export default SignUpField;
