import Stack from '@mui/material/Stack';
import AppHeader from '../AppHeader/AppHeader';
import Menu from '../Menu/Menu';
import Postv2 from './Post/Postv2';
import NewPost from './NewPost/NewPost';

export default function Posts() {
  return (
    <>
      <AppHeader />
      <Menu />

      <NewPost />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ pt: '13rem' }}
      >
        <Postv2 />
        <Postv2 />
        <Postv2 />
        <Postv2 />
      </Stack>
    </>
  );
}
