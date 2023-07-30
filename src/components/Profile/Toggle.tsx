import * as React from 'react';

import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ToggleProps {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export default function ToggleButtonNotEmpty({display, setDisplay}: ToggleProps) {

  const handleDisplay = (
    event: React.MouseEvent<HTMLElement>,
    newDisplay: string | null
  ) => {
    if (newDisplay !== null) {
      setDisplay(newDisplay);
    }
  };


  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={display}
        exclusive
        onChange={handleDisplay}
        size="large"
      >
        <ToggleButton value="publications" aria-label="publications">
          Publications
        </ToggleButton>
        <ToggleButton value="annonces" aria-label="annonces">
          Annonces
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
