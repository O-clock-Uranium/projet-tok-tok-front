import Stack from '@mui/material/Stack';
import NewPost from './NewPost/NewPost';
import ContentPost from './Post/ContentPost/ContentPost';

export default function Posts() {
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
