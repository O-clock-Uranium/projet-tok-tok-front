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
          spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
          columns={{ xs: 1, sm: 1, md: 10, lg: 10, xl: 20 }}
        >
          {adverts.map((advert) => (
            <Grid item xs={1} sm={1} md={4} lg={3} xl={6} key={advert.id}>
              <AdvertCard {...advert} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default ContentAdvert;
