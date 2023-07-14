import Stack from '@mui/material/Stack';
import Page from '../Page/Page';
import Post from './Post/Post';

import './Posts.scss';

function Posts() {
  return (
    // <Page>
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
    // </Page>
  );
}

export default Posts;
