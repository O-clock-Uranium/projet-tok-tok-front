import Stack from '@mui/material/Stack';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchPosts } from '../../../store/reducers/publications';
import NewPost from './NewPost/NewPost';
import ContentPost from './Post/ContentPost/ContentPost';

export default function Posts() {
  const publications = useAppSelector((state) => state.publications.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pt: '13rem' }}
    >
      <NewPost />
      <ContentPost publications={publications} />
    </Stack>
  );
}
