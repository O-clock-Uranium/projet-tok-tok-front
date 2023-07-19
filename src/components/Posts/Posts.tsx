import Stack from '@mui/material/Stack';
import Post from './Post/Post';
import Postv2 from './Post/Postv2';

export default function Posts() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pt: '13rem' }}
    >
      <Postv2 />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
}
