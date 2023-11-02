import { TextField } from '@mui/material';
import { useId, useState } from 'react';

interface FieldProps {
  name: string;
  type: string;
  autoComplete: string;
  // eslint-disable-next-line react/require-default-props
  inputText?: string;
  [prop: string]: unknown;
}

function LoginField({
  name,
  type,
  autoComplete,
  inputText,
  ...props
}: FieldProps) {
  const [value, setValue] = useState(inputText || '');
  const inputId = useId();

  return (
    <TextField
      margin="normal"
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
