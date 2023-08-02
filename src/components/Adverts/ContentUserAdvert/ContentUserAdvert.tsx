import { Grid } from '@mui/material';
import { Advert } from '../../../@types';
import AdvertCard from '../AdvertCard/AdvertCard';

interface ContentUserAdvertProps {
  // eslint-disable-next-line react/require-default-props
  userAdverts?: Advert[];
}

function ContentUserAdvert({ userAdverts }: ContentUserAdvertProps) {
  return (
    <div>
      {userAdverts && (
        <Grid
          container
          spacing={{ xs: 1, sm: 10, md: 14, lg: 10, xl: 10 }}
          columns={{ xs: 1, sm: 10, md: 14, lg: 10, xl: 20 }}
        >
          {userAdverts.map((advert) => (
            <Grid item xs={2} sm={3} md={4} lg={3} xl={6} key={advert.id}>
              <AdvertCard {...advert} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default ContentUserAdvert;
