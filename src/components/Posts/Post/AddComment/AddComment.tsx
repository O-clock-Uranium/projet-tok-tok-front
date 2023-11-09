import { useState, FormEvent } from 'react';
import { Avatar, Box, IconButton, InputBase, Stack } from '@mui/material';
import { CommentarySubset } from '../../../../@types/publication';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addPost, fetchPosts } from '../../../../store/reducers/publications';
import send from '../../../../assets/icons/paper_plane.svg';

export default function AddCommentary({ id }: CommentarySubset) {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue('');

    const formData = new FormData(event.currentTarget);
    dispatch(addPost(formData));
    dispatch(fetchPosts());
  };
  return (
    <Box sx={{ width: '99%', pt: '4.5rem', pb: '2rem', px: '0.8rem' }}>
      <Stack spacing={2} direction="row">
        <Avatar
          alt="user avatar"
          src={user.thumbnail}
          sx={{ width: 45, height: 45 }}
        />
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            borderRadius: '2rem',
            backgroundColor: '#F5F6FA',
            display: 'flex',
          }}
        >
          <InputBase
            name="content"
            multiline
            maxRows={6}
            fullWidth
            value={value}
            onChange={(event) => setValue(event.target.value)}
            sx={{
              px: '2rem',
              py: '1rem',
              flex: 0.98,
              fontSize: '1.3rem',
            }}
            placeholder="Ecrire un commentaire...."
            inputProps={{ 'aria-label': 'Ajouter un commentaire' }}
          />
          <input type="hidden" id="replyToId" name="reply_to" value={id} />
          <IconButton
            type="submit"
            sx={{
              my: 'auto',
              maxHeight: '5.2rem',
              p: '0.1rem',
              borderRadius: '5rem',
              backgroundColor: 'primary.dark',
              '&:hover': {
                bgcolor: 'primary.light',
              },
              '&:active': {
                bgcolor: 'primary',
              },
            }}
          >
            <img alt="Send" src={send} style={{ padding: '1rem' }} />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}
