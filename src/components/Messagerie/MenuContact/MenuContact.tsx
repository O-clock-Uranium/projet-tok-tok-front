import { Paper, Stack } from '@mui/material';
import { ContactUser } from '../../../@types';
import AddContact from './AddContact/AddContact';
import Contact from './Contact/Contact';

import '../../App/style.scss'

interface MenuContactProps {
  // eslint-disable-next-line react/require-default-props
  contacts?: ContactUser[];
  destinataireId: number;
  setDestinataireId: React.Dispatch<React.SetStateAction<number>>;
  destinataireName: string;
  setDestinataireName: React.Dispatch<React.SetStateAction<string>>;
}

function MenuContact({
  contacts,
  destinataireId,
  setDestinataireId,
  destinataireName,
  setDestinataireName,
}: MenuContactProps) {
  const contactList = contacts?.map((e) => {
    return (
      <Contact
        key={e.id}
        conversationId={e.id}
        contact={e}
        destinataireId={destinataireId}
        setDestinataireId={setDestinataireId}
        destinataireName={destinataireName}
        setDestinataireName={setDestinataireName}
      />
    );
  });

  return (
    //<div
    //className='contacts-menu'
      // style={{
      //   margin: '2rem',
      //   padding: '10px',
      //   // maxHeight: '80rem',
      //   borderRadius: '1rem',
      //   overflowY: 'auto',
      //   '&::-webkit-scrollbar': {
      //     width: '1rem',
      //     backgroundColor: '#F5F5F5',
      //   },
      //   '&::-webkit-scrollbar-track': {
      //     '&::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
      //     backgroundColor: '#49c1ad',
      //     borderRadius: '10px',
      //   },
      //   '&::-webkit-scrollbar-thumb': {
      //     backgroundColor: '#03665C',
      //     borderRadius: '25px',
      //   },
      // }}
    //>
    <>
        {contactList}
    </>
    //</div>
  );
}

export default MenuContact;
