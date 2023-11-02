import { SetStateAction } from 'react';
import { ContactUser } from '../../../@types';
import Contact from './Contact/Contact';

import '../../App/style.scss';

interface MenuContactProps {
  // eslint-disable-next-line react/require-default-props
  contacts?: ContactUser[];
  destinataireId: number;
  setDestinataireId: React.Dispatch<SetStateAction<number>>;
  destinataireName: string;
  setDestinataireName: React.Dispatch<SetStateAction<string>>;
}

function MenuContact({
  contacts,
  destinataireId,
  setDestinataireId,
  destinataireName,
  setDestinataireName,
}: MenuContactProps) {
  return (
    <div>
      {contacts?.map((e) => {
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
      })}
    </div>
  );
}

export default MenuContact;
