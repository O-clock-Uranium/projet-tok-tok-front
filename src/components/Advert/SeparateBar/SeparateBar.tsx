import { Paper } from '@mui/material';

export default function SeparateBar() {
  return (
    <Paper
      sx={{
        textAlign: 'center',
        fontSize: '3rem',
        mt: '2rem',
        mb: '2rem',
        mx: 'auto',
        p: '0.2rem',
        width: '82rem',
        borderRadius: '2rem',
        borderBottom: '0.5rem solid #03665C',
      }}
    >
      <p>Les autres annonces proposées par ce vendeur.</p>
    </Paper>
  );
}
