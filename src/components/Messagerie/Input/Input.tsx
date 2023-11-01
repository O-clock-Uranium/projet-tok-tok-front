import { useState } from 'react';

interface InputProps {
  name: string;
  [prop: string]: unknown;
}

function Input({ name, ...props }: InputProps) {
  const [value, setValue] = useState('');

  return (
    <input
      name={name}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...props}
    />
  );
}

export default Input;
