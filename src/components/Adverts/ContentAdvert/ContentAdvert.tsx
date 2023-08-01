import { Grid } from '@mui/material';
import { Advert } from '../../../@types';
import AdvertCard from '../AdvertCard/AdvertCard';

interface ContentAdvertProps {
  // eslint-disable-next-line react/require-default-props
  adverts?: Advert[];
}

function ContentAdvert({ adverts }: ContentAdvertProps) {
  return (
    <div>
      {adverts && (
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 1 }}
          columns={{ xs: 1, sm: 10, md: 14, lg: 10, xl: 15 }}
        >
          {adverts.map((advert) => (
            <Grid
              //! mx pour aligner
              sx={{ mx: 'auto' }}
              item
              xs={2}
              sm={3}
              md={4}
              lg={3}
              xl={5}
              key={advert.id}
            >
              <AdvertCard {...advert} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default ContentAdvert;
