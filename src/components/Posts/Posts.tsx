import Stack from '@mui/material/Stack';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';
import Post from './Post/Post';

import './Posts.scss';

function Posts() {
  return (
    <>
      <AppHeader />
      <Menu />
      <div className="content-container">
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
      </div>
    </>
  );
}

export default Posts;
