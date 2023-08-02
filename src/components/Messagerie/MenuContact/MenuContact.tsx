import { Paper, Stack } from '@mui/material';
import { ContactUser } from '../../../@types';
import AddContact from './AddContact/AddContact';
import Contact from './Contact/Contact';

interface MenuContactProps {
  // eslint-disable-next-line react/require-default-props
  contacts?: ContactUser[];
}

function MenuContact({ contacts }: MenuContactProps) {
  return (
    <Paper
      sx={{
        mr: '5rem',
        p: '2rem',
        maxHeight: '60rem',
        id: 'test',
        borderRadius: '1rem',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '1rem',
          backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-track': {
          '&::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
          backgroundColor: '#49c1ad',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#03665C',
          borderRadius: '25px',
        },
      }}
    >
      <Stack direction="column">
        <AddContact />
        {contacts?.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </Stack>
    </Paper>
  );
}

export default MenuContact;
