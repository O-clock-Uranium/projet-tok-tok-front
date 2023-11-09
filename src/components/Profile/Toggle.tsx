import { Dispatch, MouseEvent } from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ToggleProps {
  display: string;
  setDisplay: Dispatch<React.SetStateAction<string>>;
}

export default function ToggleButtonNotEmpty({
  display,
  setDisplay,
}: ToggleProps) {
  const handleDisplay = (
    event: MouseEvent<HTMLElement>,
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
        <ToggleButton
          value="publications"
          aria-label="publications"
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            border: '0px',
            textTransform: 'none',
            fontSize: '1.5rem',
            borderRadius: '2rem',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            p: '2rem',
            height: '6rem',
          }}
        >
          Publications
        </ToggleButton>
        <ToggleButton
          value="annonces"
          aria-label="annonces"
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            border: '0px',
            textTransform: 'none',
            fontSize: '1.5rem',
            borderRadius: '2rem',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            p: '2rem',
            height: '6rem',
          }}
        >
          Annonces
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
