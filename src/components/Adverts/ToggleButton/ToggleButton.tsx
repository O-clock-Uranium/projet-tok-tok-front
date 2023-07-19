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
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web" sx={{ border: 1, fontSize: '2rem' }}>
        Ventes
      </ToggleButton>
      <ToggleButton value="android" sx={{ border: 1, fontSize: '2rem' }}>
        Dons
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
