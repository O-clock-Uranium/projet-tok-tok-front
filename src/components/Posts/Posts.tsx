import Stack from '@mui/material/Stack';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../store/reducers/publications';
import NewPost from './NewPost/NewPost';
import ContentPost from './Post/ContentPost/ContentPost';

export default function Posts() {
  // const publications = useAppSelector((state) => state.publications.list);
  // const isLogged = useAppSelector((state) => state.user.logged);
  // const dispatch = useAppDispatch();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ py: '13rem' }}
    >
      <NewPost />
      <ContentPost />
    </Stack>
  );
}
