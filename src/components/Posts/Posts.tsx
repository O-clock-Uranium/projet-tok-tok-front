import Stack from '@mui/material/Stack';
import Post from './Post/Post';

// import './Posts.scss';

export default function Posts() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pt: '13rem' }}
    >
      <Post />
      <Post />
      <Post />
    </Stack>
  );
}
