import Stack from '@mui/material/Stack';
// import { Stack } from '@mui/system'; // ne sait pas lequel des deux est le mieux
import Post from './Post/Post';

import './Posts.scss';

function Posts() {
  return (
    <div className="posts">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Post />
        <Post />
        <Post />
      </Stack>
    </div>
  );
}

export default Posts;
