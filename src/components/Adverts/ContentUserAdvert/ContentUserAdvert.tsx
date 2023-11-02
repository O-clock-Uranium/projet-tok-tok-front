import { Stack } from '@mui/material';
import { Advert } from '../../../@types';
import AdvertCard from '../AdvertCard/AdvertCard';

interface ContentUserAdvertProps {
  userAdverts: Advert[];
}

function ContentUserAdvert({ userAdverts }: ContentUserAdvertProps) {
  return (
    <div>
      {userAdverts && (
        <Stack
          direction="row"
          justifyContent="flex-start"
          gap="2rem"
          flexWrap="wrap"
        >
          {userAdverts.map((advert) => (
            <AdvertCard key={advert.id} {...advert} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default ContentUserAdvert;
