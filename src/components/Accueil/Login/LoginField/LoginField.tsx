import { TextField } from '@mui/material';
import { ChangeEvent, useId, useState } from 'react';

interface FieldProps {
  name: string;
  type: string;
  [prop: string]: unknown;
}

function LoginField({ name, type, ...props }: FieldProps) {
  const [value, setValue] = useState('');

  const inputId = useId();

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      label={name}
      //! Ajouter autoComplete sur Login.tsx spécialement pour mail et current password pour password tavu tmtc
      autoComplete="current-password"
      id={inputId}
      name={name}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...props}
    />
  );
}

export default LoginField;
