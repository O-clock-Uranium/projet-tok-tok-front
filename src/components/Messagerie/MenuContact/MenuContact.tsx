import { Paper, Stack } from '@mui/material';
import AddContact from './AddContact/AddContact';
import Contact from './Contact/Contact';

function MenuContact() {
  return (
    <Paper
      sx={{
        mr: '5rem',
        p: '2rem',
        maxHeight: '60rem',
        id: 'test',
        borderRadius: '2.5rem',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '1rem',
          backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-track': {
          '&::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
          backgroundColor: '#F5F5F5',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'green',
          borderRadius: '25px',
        },
      }}
    >
      <Stack direction="column">
        <AddContact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </Stack>
    </Paper>
  );
}

export default MenuContact;
