import { CssBaseline, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import img1 from '../../../fakedata/carrousel/voisin_1.png';
import img10 from '../../../fakedata/carrousel/voisin_10.png';
import img11 from '../../../fakedata/carrousel/voisin_11.png';
import img12 from '../../../fakedata/carrousel/voisin_12.png';
import img13 from '../../../fakedata/carrousel/voisin_13.png';
import img14 from '../../../fakedata/carrousel/voisin_14.png';
import img15 from '../../../fakedata/carrousel/voisin_15.png';
import img2 from '../../../fakedata/carrousel/voisin_2.png';
import img3 from '../../../fakedata/carrousel/voisin_3.png';
import img4 from '../../../fakedata/carrousel/voisin_4.png';
import img5 from '../../../fakedata/carrousel/voisin_5.png';
import img6 from '../../../fakedata/carrousel/voisin_6.png';
import img7 from '../../../fakedata/carrousel/voisin_7.png';
import img8 from '../../../fakedata/carrousel/voisin_8.png';
import img9 from '../../../fakedata/carrousel/voisin_9.png';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid container component="main" sx={{ width: '2/3', height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={0}
        sm={0}
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
    </Grid>
  );
}
