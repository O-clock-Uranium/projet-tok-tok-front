import { Paper } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: '2rem',
        p: '1rem !important',
        gap: '1rem',
      }}
    >
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{ alignItems: 'center' }}
      >
        <ToggleButton
          value="web"
          sx={{
            border: 0,
            p: '1.6rem',
            borderRadius: '2rem !important',
            fontFamily: 'Manrope',
            fontSize: '1.6rem',
            fontWeight: 600,
          }}
        >
          Ventes
        </ToggleButton>
        <ToggleButton
          value="android"
          sx={{
            border: 0,
            p: '1.6rem',
            borderRadius: '2rem !important',
            fontFamily: 'Manrope',
            fontSize: '1.6rem',
            fontWeight: 600,
          }}
        >
          Dons
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
}
