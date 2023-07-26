import Stack from '@mui/material/Stack';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

export default function Posts() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pt: '13rem' }}
    >
      <NewPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
}
