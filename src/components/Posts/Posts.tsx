import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import NewPost from './NewPost/NewPost';
import ContentPost from './Post/ContentPost/ContentPost';
import { fetchPosts } from '../../store/reducers/publications';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

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
      sx={{ py: '13rem' }}
    >
      <NewPost />
      <ContentPost publications={publications} />
    </Stack>
  );
}
