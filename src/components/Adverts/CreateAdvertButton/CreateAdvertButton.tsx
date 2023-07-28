import { useState } from 'react';
import Button from '@mui/material/Button';
import AdvertModal2 from '../../Modals/AdvertModal2';

export default function CreateAdvertButton() {
  const [Open, setOpen] = useState(false);

  return (
    <Button
      variant="contained"
      onClick={() => setOpen(!Open)}
      sx={{
        backgroundColor: 'primary.dark',
        color: '#fff',
        textTransform: 'none',
        fontSize: '1.5rem',
        borderRadius: '2rem',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        p: '2rem',
        height: '6rem',
        boxShadow: 0,
      }}
    >
      <AdvertModal2 />
    </Button>
  );
}
