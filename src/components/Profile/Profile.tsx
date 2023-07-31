import { Stack, ToggleButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProfile } from '../../store/reducers/profile';
import ContentAdvert from '../Adverts/ContentAdvert/ContentAdvert';
import ToggleButton from '../Adverts/ToggleButton/ToggleButton';
import ContentPost from '../Posts/Post/ContentPost/ContentPost';
import Posts from '../Posts/Posts';
import Informations from './Informations/Informations';
import Toggle from './Toggle';

export default function Profile() {
  const dispatch = useAppDispatch();

  const { slug } = useParams();
  const user = useAppSelector((state) => state.profile);
  const [display, setDisplay] = useState('publications');

  useEffect(() => {
    dispatch(fetchProfile(slug));
  }, [dispatch, slug]);

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
    >
      <Informations userInfo={user} />

      <Toggle display={display} setDisplay={setDisplay} />

      {display == 'publications' ? (
        <ContentPost publications={user.posts} />
      ) : (
        <ContentAdvert adverts={user.adverts} />
      )}
    </Stack>
  );
}
