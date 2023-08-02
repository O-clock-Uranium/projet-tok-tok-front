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
          justifyContent="flex start"
          container
          spacing={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 7 }}
          columns={{ xs: 1, sm: 10, md: 14, lg: 15, xl: 21 }}
        >
          {adverts.map((advert) => (
            <Grid item xs={2} sm={3} md={4} lg={6} xl={7} key={advert.id}>
              <AdvertCard {...advert} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default ContentAdvert;
