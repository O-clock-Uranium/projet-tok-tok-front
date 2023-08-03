import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProfile } from '../../store/reducers/profile';
import ContentAdvert from '../Adverts/ContentAdvert/ContentAdvert';
import ContentPost from '../Posts/Post/ContentPost/ContentPost';
import Informations from './Informations/Informations';
import Toggle from './Toggle';

export default function Profile() {
  const userInfo = useAppSelector((state) => state.user);
  const user = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const { slug } = useParams();
  const [display, setDisplay] = useState('publications');

  useEffect(() => {
    dispatch(fetchProfile(slug));
  }, [dispatch]);

  if (!user) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ py: '13rem' }}
      width="82rem"
      mx="auto"
    >
      {/* Banniere + infos profil + boutton edit */}
      <Informations userInfo={userInfo} />

      {/* Toggle button Publications / Annonces */}
      <Stack direction="row" paddingY="2rem" width="100%">
        <Toggle display={display} setDisplay={setDisplay} />
      </Stack>
      <Stack width="100rem">
        {/* Publications content ou Adverts content */}
        {display === 'publications' ? (
          <ContentPost publications={user.posts} />
        ) : (
          <ContentAdvert adverts={user.adverts} />
        )}
      </Stack>
    </Stack>
  );
}
