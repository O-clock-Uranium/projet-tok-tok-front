import { useState } from 'react';
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

function NewPost() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleContentChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputValue = value.trim();

    if (!inputValue) {
      return;
    }

    setValue('');

    const formData = new FormData(event.currentTarget);
    event.currentTarget.reset();

    dispatch(addPost(formData));

    await new Promise((resolve) => setTimeout(resolve, 800));

    dispatch(fetchPosts());
  };

  return (
    <Box
      sx={{
        width: '82rem',
        p: '3rem',
        backgroundColor: 'white',
        mx: 'auto',
        borderRadius: '2rem',
      }}
    >
      <Stack gap="2rem" direction="row">
        <Avatar
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
                fontSize="1.5rem"
                color="white"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                fontFamily="DM Sans"
              >
                Publier
              </Typography>
            </Button>
          </Stack>
          <Stack direction="row" pl="2rem">
            <IconButton
              component="label"
              type="button"
              aria-label="images"
              sx={{
                alignItems: 'center',
                gap: '1rem',
                '&:hover': {
                  borderRadius: '5rem',
                },
              }}
            >
              <img alt="add pictures" src={picture} />
              <Typography
                fontFamily="Manrope"
                fontSize="1.3rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="2.6rem"
                color="#A5A5A5"
              >
                Images
                <input
                  style={{ fontSize: '1.8rem' }}
                  type="file"
                  name="thumbnail"
                  hidden
                />
              </Typography>
            </IconButton>
            <IconButton
              type="button"
              component="label"
              aria-label="vidéos"
              sx={{
                alignItems: 'center',
                gap: '1rem',
                '&:hover': {
                  borderRadius: '5rem',
                  fontColor: 'white',
                },
              }}
            >
              <img alt="search icon" src={video} />
              <Typography
                fontFamily="Manrope"
                fontSize="1.3rem"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="2.6rem"
                color="#A5A5A5"
              >
                Vidéos
                <input
                  style={{ fontSize: '1.8rem' }}
                  type="file"
                  hidden
                  name="thumbnails"
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
