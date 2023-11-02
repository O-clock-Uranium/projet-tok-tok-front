import { Stack } from '@mui/material';
import { Advert } from '../../../@types';
import AdvertCard from '../AdvertCard/AdvertCard';

interface ContentAdvertProps {
  adverts: Advert[];
  context: string;
}

function ContentAdvert({ adverts, context }: ContentAdvertProps) {
  return (
    <div className="padding-bottom">
      {adverts && (
        <Stack direction="row" gap="2rem" flexWrap="wrap">
          {adverts.map((advert) => (
            <AdvertCard key={advert.id} context={context} {...advert} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default ContentAdvert;
