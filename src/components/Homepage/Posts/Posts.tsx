import Stack from '@mui/material/Stack';
import Menu from '../../Menu/Menu';
import AppHeader from '../AppHeader/AppHeader';
import NewPost from './NewPost/NewPost';
import Postv2 from './Post/Post';

export default function Posts() {
  return (
    <>
      <AppHeader />
      <Menu />

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ pt: '13rem' }}
      >
        <NewPost />
        <Postv2 />
        <Postv2 />
        <Postv2 />
        <Postv2 />
      </Stack>
    </>
  );
}
