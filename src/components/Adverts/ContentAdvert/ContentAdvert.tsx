import { Stack } from '@mui/material';
import { Advert } from '../../../@types';
import AdvertCard from '../Advert/Advert';

interface ContentAdvertProps {
  // eslint-disable-next-line react/require-default-props
  adverts?: Advert[];
}

function ContentAdvert({ adverts }: ContentAdvertProps) {
  return (
    <div>
      {adverts && (
        <Stack direction="row" flexWrap="wrap" gap="2rem">
          {adverts.map((advert) => (
            <AdvertCard key={advert.id} {...advert} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default ContentAdvert;
