import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addPost, fetchPosts } from '../../../store/reducers/publications';
import picture from '../../../assets/icons/picture.svg';
import video from '../../../assets/icons/camera.svg';

import plane from '../../../assets/icons/paper_plane.svg';

function NewPost() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = value.trim();

    if (!inputValue) {
      return;
    }

    setValue('');

    const formData = new FormData(event.currentTarget);
    event.currentTarget.reset();

    dispatch(addPost(formData));

    setTimeout(async () => {
      await dispatch(fetchPosts());
    }, 800);
  };

  return (
    <Box
      sx={{
        width: '100%',
        p: '3rem',
        backgroundColor: 'white',
        mx: 'auto',
        borderRadius: '2rem',
      }}
    >
      <Stack gap="2rem" direction="row">
        <Avatar
          className="user-avatar-newpost"
          alt="User Thumbnail"
          src={user.thumbnail}
          sx={{ width: 60, height: 60 }}
        />
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          style={{ width: '100%' }}
        >
          <Stack
            direction="row"
            sx={{
              width: '100%',
              borderRadius: '5rem',
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
              onChange={handleContentChange}
              sx={{
                fontFamily: 'DM Sans',
                ml: '2rem',
                p: '1.5rem',
                flex: 0.98,
                fontSize: '1.5rem',
                backgroundColor: '#F5F6FA',
                borderRadius: '9.5rem',
                color: '#888888',
                border: 'none',
                '& fieldset': { border: 'none' },
              }}
              placeholder="Quoi de neuf ?"
              inputProps={{
                'aria-label': 'Champ de publication',
              }}
            />
            <Button
              type="submit"
              sx={{
                my: 'auto',
                p: '1rem 2rem',
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
              <Typography
                className="publish-text-newpost"
                fontSize="1.5rem"
                color="white"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                fontFamily="DM Sans"
              >
                Publier
              </Typography>

              <img
                className="publish-icon-newpost"
                alt="publish icon"
                src={plane}
                height={18}
                width={18}
              />
            </Button>
          </Stack>
          <Stack direction="row" pl="2rem">
            <IconButton
              component="label"
              aria-label="images"
              sx={{
                alignItems: 'center',
                gap: '1rem',
                '&:hover': {
                  borderRadius: '5rem',
                },
              }}
            >
              <img alt="add images" src={picture} />
              <Typography
                fontFamily="Manrope"
                fontSize="1.3rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="2.6rem"
                color="#A5A5A5"
              >
                Image
                <input
                  style={{ fontSize: '1.8rem' }}
                  type="file"
                  name="thumbnail"
                  hidden
                />
              </Typography>
            </IconButton>
            <IconButton
              component="label"
              aria-label="vidéo"
              sx={{
                alignItems: 'center',
                gap: '1rem',
                '&:hover': {
                  borderRadius: '5rem',
                  fontColor: 'white',
                },
              }}
            >
              <img alt="add video" src={video} />
              <Typography
                fontFamily="Manrope"
                fontSize="1.3rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="2.6rem"
                color="#A5A5A5"
              >
                Vidéo
                <input
                  style={{ fontSize: '1.8rem' }}
                  type="file"
                  hidden
                  name="thumbnail"
                />
              </Typography>
            </IconButton>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}

export default NewPost;
