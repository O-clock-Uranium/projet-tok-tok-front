import { Typography } from '@mui/material';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      Tok Tok
      {new Date().getFullYear()}.
    </Typography>
  );
}
