import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { findAdvert } from '../../store/selectors/adverts';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';

export default function Annonce() {
  const { slug } = useParams();

  const advert = useAppSelector((state) =>
    findAdvert(state.adverts.list, slug as string)
  );

  if (!advert) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return (
    <>
      <AppHeader />
      <Menu />
      <Box
        sx={{
          height: '100vh',
          width: '100rem',
          position: 'relative',
          top: '11rem',
          margin: 'auto',
        }}
      >
        <p>{advert.title}</p>
        <p>AUTRES ANNONCES</p>
      </Box>
    </>
  );
}
