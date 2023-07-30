import { TextField } from '@mui/material';
import { useId, useState } from 'react';

interface FieldProps {
  name: string;
  type: string;
  autoComplete: string;
  inputText?: string | null;
  [prop: string]: unknown;
}

function LoginField({
  name,
  type,
  autoComplete,
  inputText,
  ...props
}: FieldProps) {
  const [value, setValue] = useState(inputText ? inputText : '');

  const inputId = useId();

  return (
    <TextField
      margin="normal"
      // required
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

export default LoginField;
