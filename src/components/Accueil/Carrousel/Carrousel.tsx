import { CssBaseline, Grid } from '@mui/material';
import React from 'react';

import img4 from '../../../fakedata/image1.jpg';
import img3 from '../../../fakedata/image2.jpg';
import img2 from '../../../fakedata/image3.jpg';
import img1 from '../../../fakedata/jjg.jpg';

const images = [img1, img2, img3, img4];

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <Grid container component="main" sx={{ width: '2/3', height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={5}
        md={12}
        sx={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: `900ms ease`,
        }}
      />
      {/* <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square /> */}
    </Grid>
  );
}
